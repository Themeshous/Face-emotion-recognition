# Real-Time Facial Detection and Emotion Analysis System:
This repository contains the code and resources for an intelligent system designed to detect and recognize faces in real-time, with a particular focus on analyzing the emotional state of ESI (Emotional and Social Intelligence) students. The aim of this project is to provide a tool that can assist in understanding and monitoring the emotional well-being of individuals, especially in educational settings.


## Introduction:
The Real-Time Facial Detection and Emotion Analysis System is built upon advanced computer vision techniques and machine learning algorithms. It leverages state-of-the-art deep learning models to detect and recognize faces in real-time video streams. Additionally, the system utilizes facial expression analysis to infer the emotional states of ESI students, helping educators and researchers gain valuable insights into their well-being.

The backend of the system is implemented using FastAPI, a modern, fast (high-performance), web framework for building APIs with Python. It incorporates two pre-trained models: face_classifier.h5 and emotion_arch.h5. The face_classifier.h5 model is responsible for face detection and recognition, while the emotion_arch.h5 model analyzes facial expressions to determine the emotional states of individuals.

To identify and localize only faces in our images, we used MTCNN (Multi-task Cascaded Convolutional Networks), which is a deep learning-based algorithm commonly used for face detection and facial feature alignment. MTCNN is designed to detect and align faces in images with varying poses, scales, and lighting conditions in three stages. It can accurately detect multiple faces in an image and provide bounding box coordinates for each face, enabling precise face detection and recognition.

In our facial recognition model approach, we leveraged the VGG Face model to obtain embeddings from the cropped facial images. The VGG Face model is a powerful deep learning model specifically designed for facial recognition tasks. By passing the cropped images through this model, we extracted the embeddings, which represent unique and discriminative features of each face. These embeddings enable accurate matching and identification of known individuals in the video stream.

For the emotion analysis model, we first started by splitting the original dataset into a new one based on emotions to create a dataset with five emotions: angry, happy, neutral, sad, and tired. We then pass the images through our emotion classifier, which takes as input an image of size (224,224,1) with one channel (gray images). We apply convolutional layers for feature extraction, followed by a flatten layer, and finally a fully connected layer. This architecture allows the model to learn the distinctive features associated with different emotions and make predictions based on the input image.

By combining facial recognition and emotion analysis models, our system can provide real-time insights into the emotional states of individuals, allowing for personalized and targeted interventions in educational and research settings.

## Features:
Real-time face detection using the Haar Cascade classifier and MTCNN.
Facial recognition for identifying known individuals in the video stream using the VGG Face model.
Emotion analysis to determine the emotional states of ESI students.
Integration with ESI student profiles for personalized analysis.
Real-time frame capturing using a web interface developed with React.
Websockets for seamless communication between the web interface and the backend system.
FastAPI framework for building high-performance APIs.
Utilization of pre-trained models face_classifier.h5 and emotion_arch.h5.
Extraction of face embeddings using the VGG-Face model.
Application of image augmentation techniques (flip, rotate, zoom, translate) to increase dataset diversity.

## Installation:
To set up the Real-Time Facial Detection and Emotion Analysis System, please follow the instructions below:

Clone this repository to your local machine using the following command:

git clone https://github.com/Themeshous/Face-emotion-recognition

Download the pre-trained models for face detection (face_classifier.h5), facial recognition, and emotion analysis (emotion_arch.h5) from the following links:

[Models and architectures](https://drive.google.com/drive/folders/16yoMusfFiSWHoUgh9I83-1LcvuxuNi_U)

Start the web interface by navigating to the /src directory and running the following commands:

npm start 

Start the FastApi backend by running : 

uvicorn main:app --reload

