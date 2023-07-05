import json
import cv2
import tensorflow as tf
import numpy as np
import uvicorn
import base64
import json
import optparse
import os

from tensorflow import keras

from fastapi import FastAPI, WebSocket, File, UploadFile
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse

from pydantic import BaseModel
from starlette.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from keras.models import load_model, model_from_json
from keras.applications.imagenet_utils import preprocess_input
from fastapi.websockets import WebSocketDisconnect


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    print("Accepting connection....")
    await websocket.accept()
    print("Accpeted")
    while True:
        try:
            print(" into try")

            frame_data = await websocket.receive_text()

            if frame_data == "close":
                await websocket.close()
                print("WebSocket connection closed by frontend")
                break

            # print(frame_data)

            image_bytes = base64.b64decode(frame_data.split(",")[1])

            # Convert the image bytes to a numpy array
            nparr = np.frombuffer(image_bytes, dtype=np.uint8)

            # Decode the image using OpenCV
            image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

            image2 = np.uint8(image)

            # Parse the JSON string to get the matrix data
            #matrix_data = json.loads(frame_data)
            #x = json.dumps(frame_data)
            # print(x)

            # Convert the matrix data to an OpenCV matrix
            #matrix = cv2.matFromJson(matrix_data)

            # print(matrix)

            #frame_base = frame_data['face']
            # print(frame_base)
            # Convert base64 encoded image to OpenCV format
            #nparr = np.frombuffer(base64.b64decode(frame_base64), np.uint8)
            # print(nparr)
            #frame = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
            # print(frame)

            # Process the frame and make predictions
            result = {'label': '', 'emotion': ''}
            predictions = process_frame(image2)
            print((predictions))

            # Send the predictions back to the frontend
            if(predictions != []):
                result = predictions[0]['label'] + ' ' + predictions[0]['emotion']
                print('this is result ', result)
                print('this is result type ', type(result))

                await websocket.send_text(result)
                print('sending complete')

        except Exception as e:
            print("Error:", e)
            break

#*****************************************************************************************************#


def convert_to_json_serializable(predictions):
    # Convert numpy int32 to int
    for pred in predictions:
        pred['position'] = tuple(map(int, pred['position']))
        pred['emo_position'] = tuple(map(int, pred['emo_position']))

    return predictions


with open('C:/Users/friha/MyWork/project_2cs_backend/FacialEmotion-Recognition/Project/Models/classifier_face_last_version.json', 'r') as json_file:
    loaded_model_json = json_file.read()
    loaded_model = model_from_json(loaded_model_json)


loaded_model.load_weights(
    'C:/Users/friha/MyWork/project_2cs_backend/FacialEmotion-Recognition/Project/Models/classifier_face_weights_last_version.h5')


loaded_model.compile(loss='categorical_crossentropy',
                     optimizer='adam', metrics=['accuracy'])


with open('C:/Users/friha/MyWork/project_2cs_backend/FacialEmotion-Recognition/Project/Models/new_arch.json', 'r') as json_file:
    emo_model_json = json_file.read()
    emo_model = model_from_json(emo_model_json)

emo_model.load_weights(
    'C:/Users/friha/MyWork/project_2cs_backend/FacialEmotion-Recognition/Project/Models/new_weights.h5')


emo_model.compile(loss='categorical_crossentropy',
                  optimizer='adam', metrics=['accuracy'])


face_classifier = cv2.CascadeClassifier(
    'C:/Users/friha/MyWork/project_2cs_backend/FacialEmotion-Recognition/Project\Models/haarcascade_frontalface_default.xml')
vgg_face = load_model(
    'C:/Users/friha/MyWork/project_2cs_backend/FacialEmotion-Recognition/Project/Models/face_recognition.h5')


person_rep = {0: 'Assia',
              1: 'Yahia',
              2: 'Amine',
              3: 'Rabeh',
              4: 'Ilyas',
              5: 'abdelmalek',
              6: 'Ayoub',
              7: 'Walid',
              8: 'Karim',
              9: 'Abdelali',
              10: 'Ahmed',
              11: 'Yacine',
              12: 'Houssem',
              13: 'Abdlelkader ',
              14: 'Sabrina',
              15: 'Celia',
              16: 'Katia',
              17: 'Kamelia'}


emotion_labels = ['Angry', 'Happy', 'Neutral', 'Sad', 'Tired']

#*****************************************************************************************************#


def process_frame(frame):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_classifier.detectMultiScale(
        gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    predictions = []

    for (left, top, right, bottom) in faces:
        img_crop = gray[top:top + bottom, left:left + right]
        resized_img_crop = cv2.resize(img_crop, (224, 224))
        resized_img_crop = np.expand_dims(resized_img_crop, axis=-1)

        input_face = np.expand_dims(resized_img_crop, axis=0)
        crop_img = np.repeat(input_face, 3, axis=-1)

        crop_img = preprocess_input(crop_img)

        img_embedding = vgg_face(crop_img)

        classifier_pred = loaded_model.predict(img_embedding)

        name_index = np.argmax(classifier_pred, axis=1)
        label = person_rep[int(name_index)]

        prediction = emo_model.predict(input_face)
        label_emo = emotion_labels[prediction.argmax()]
        # predictions.append(label)
        # predictions.append(label_emo)

        predictions.append({"label": label, "emotion": label_emo
                            #                 "position": (
                            # left, top-10), "emo_position": (left-50, top-40)
                            })

    return predictions


@app.get("/")
async def index():
    return {"message": "Server is running."}


@app.post("/predict")
async def predict_image(image: UploadFile = File(...)):
    results = []
    file_path = f"./{image.filename}"
    with open(file_path, "wb") as buffer:
        buffer.write(await image.read())
    frame = cv2.imread(file_path)
    prediction = process_frame(frame)

    results.append({"filename": image.filename,
                   "label": prediction[0]["label"], "emotion": prediction[0]["emotion"]})

    print(results)

    buffer.close()
    # Delete the temporary image file
    os.remove(file_path)

    return {"results": results}
