import React, { useState,useRef,useEffect } from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./PickImages"
import PickImages from "./PickImages";
import RealTime from "./RealTime";
import PredictionOnSelectedImages from "./PredictionOnSelectedImages";
// import cv2 from "@techstark/opencv-js";

function Hero() {
  const [selectedImages, setSelectedImages] = useState([])
  const [realTime, setRealTime] = useState(false)
    const videoRef = useRef(null);
  const canvasRef = useRef();
  const firstLoad = useRef(2);
  const [result,setResult] = useState('')
    let ws = useRef(null);

    const [name,setPersonName]=useState('')
    const [emotion,setPersonEmotion]=useState('')


      ws.onmessage = (event) => {
    console.log("WESOCKET event: ", event);
    const message = JSON.parse(event.data);
    const { name, emotion } = message;
    // Update state variables with the received information
    // For example:
    setPersonName(name);
    setPersonEmotion(emotion);
    // setFaceCoordinates(faceCoordinates);
  };


  const startCamera = async () => {
    if(realTime){
      ws.current = new WebSocket('ws://127.0.0.1:8000/ws');
        ws.current.onopen = () => {
          //ws.current.send("Connected");
          
          console.log('WebSocket connection established');
        };


      try {

        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        console.log('camera detected')
        console.log(videoRef.current)

        
        videoRef.current.addEventListener('loadedmetadata', () => { 
        console.log("inti lisnter")    
        // Capture face frames and send them to the backend for predictions
        const captureFrames = () => {
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const video = videoRef.current;
       
        
        
        // Set canvas dimensions to match the video frame size
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Capture face frame and send it to the backend
        const sendFrameToBackend = () => {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // console.log("this canvas",canvas)
        
        // const imageData = cv2.imread(canvas);

        const res = canvas.toDataURL();
        // console.log("this is imagedata",res)

        
        console.log("---------------------------------------")
        
        ws.current.send(res);
        

        // Schedule the next frame capture
        // const delayTime = 1000; // 1 second delay
        // setTimeout(() => {
        //   requestAnimationFrame(sendFrameToBackend);
        // }, delayTime);
        // };
        requestAnimationFrame(sendFrameToBackend);
        };

        // Start capturing frames
        sendFrameToBackend();
        };
      
       captureFrames();

       ws.current.addEventListener('message', (event) => {
        // const message = JSON.parse(event.data);
        console.log('this is message' + event.data)
        setResult(event.data)
});
      },)
      
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    }

        
    }

const stopCamera = () => {
    if (ws.current) {
      ws.current.close();
      console.log('WebSocket disconnected');
      window.location.reload()
    }

    const stream = videoRef.current?.srcObject;
    const tracks = stream && stream.getTracks();
    if (tracks) {
      tracks.forEach((track) => track.stop());
    }

    videoRef.current.srcObject = null;
    console.log('Camera stopped');
  };

  const disconnectWebSocket = () => {
      if (ws.current) {
      ws.current.send('close');
      console.log('Close request sent to the backend');
    }
    stopCamera();
  };
  




    useEffect(() => {
      if (firstLoad.current===2){
        firstLoad.current = 1;
        console.log('hjkkkh')

        return;
      }
       if (firstLoad.current===1){
        firstLoad.current = 0;
        console.log('rtydyrteteteteteteth')

        return;
      }
      if(realTime){
        startCamera()
         console.log('finql')
      }
        
       }, [realTime]);

       

  const handleSelectedImages = (images) => {
    setSelectedImages(images);
  };
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY} `}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]">
            <img src={discount} alt="discount" className=" w-[32px] h-[32px] " />
          </div>
          <div className=" flex flex-row  justify-between  items-center w-full">
            <h1 className=" flex-1 font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[72px] text-[52px] text-white">
              The Next <br className="sm:block hidden" />{" "}
              <span className=" text-gradient">Generation</span> <br />
              </h1>
            <div className=" ss:flex hidden md:mr-4 mr-0" >
              <PickImages onImagesSelected={handleSelectedImages}/>
            </div>
            <div className=" ss:flex hidden md:mr-4 mr-0"  >
              <RealTime realTime={realTime} setRealTime = {setRealTime} stopCamera = {disconnectWebSocket}
             />
            </div>
          </div>
          <p className={`${styles.paragraph} max-w-[470] mt-5`} > 
                    Experience the power of our two cutting-edge models, Model A for face recognition and Model B for emotions prediction, designed to deliver unparalleled 
                    performance and versatility for all your needs.</p>
        </div>
        <div className={` flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
          {!realTime && <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] blend-bg-gray-500 rounded-md" />}
          {realTime &&<div >
      <video ref={videoRef} autoPlay muted />
      <p className="bg-red-100">{result.length !== 0 && result}</p>
    </div> }
          
          <div className=" absolute z-[0] w-[40%] h-[35%] pink__gradient top-0 " />
          <div className=" absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 " />
          <div className=" absolute z-[0] w-[50%] h-[50%] blue__gradient right-20 bottom-20" />
        </div>
      </section>
     {selectedImages.length !== 0 ? (
        <div className=" flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ">
          <PredictionOnSelectedImages images={selectedImages} />{" "}
        </div>
      ) : (
        <></>
      )}
      </>
  );
}

export default Hero;
