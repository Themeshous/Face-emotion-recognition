import React from 'react'
import styles from "../style"
import { arrowUp} from "../assets"
import { useRef } from 'react';
import axios from 'axios';
import cv2 from "@techstark/opencv-js";
function PickImages({ onImagesSelected }) {
  const fileInputRef = useRef(null);
  const handleClick = () => {
    onImagesSelected([]);
    fileInputRef.current.click();
  };  
  const  Predict = async (images) => {

    // Create a new FormData object
    const formData = new FormData();
    formData.append('image', images[0]);

    try {
      // Send the image to the backend using fetch
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data)
      const file = images[0];
      const reader = new FileReader();

      reader.onload = () => {
        onImagesSelected([{url:reader.result,name:data.results[0].label,emotion:data.results[0].emotion}]);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`} onClick={handleClick}>
          <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`} > 
               <div className={`${styles.flexStart} flex-row`} >
                <p className=' font-poppins font-medium text-[18px] leading-[23px] mr-2'  >
                  <span className=' text-gradient' >Pick</span>
                </p>
                <img src={arrowUp} alt="arrow" className=' w-[23px] h-[23px] object-contain' />

               </div>
               <div className={`${styles.flexStart} flex-row`} >
                <p className=' font-poppins font-medium text-[18px] leading-[23px]'  >
                  <span className=' text-gradient' >Images</span>
                </p>

               </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(event) => Predict(event.target.files)}
          />
    </div>
  )
}

export default PickImages