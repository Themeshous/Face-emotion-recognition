import React from 'react'
import styles from "../style"
import { arrowUp} from "../assets"

function RealTime({realTime,setRealTime,stopCamera}) {
  return (
    <div onClick={()=>{setRealTime(prev=>!prev);if(realTime){stopCamera()}}} className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
          { ! realTime ? <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`} > 
               <div className={`${styles.flexStart} flex-row`} >
                <p className=' font-poppins font-medium text-[18px] leading-[23px] mr-2'  >
                  <span className=' text-gradient' >Real</span>
                </p>
                <img src={arrowUp} alt="arrow" className=' w-[23px] h-[23px] object-contain' />

               </div>
               <div className={`${styles.flexStart} flex-row`} >
                <p className=' font-poppins font-medium text-[18px] leading-[23px]'  >
                  <span className=' text-gradient' >Time</span>
                </p>

               </div>
          </div>:
          <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`} > 
               <div className={`${styles.flexStart} flex-row`} >
                <p className=' font-poppins font-medium text-[18px] leading-[23px] mr-2'  >
                  <span className=' text-gradient' >Stop</span>
                </p>
                <img src={arrowUp} alt="arrow" className=' w-[23px] h-[23px] object-contain' />

               </div>
               <div className={`${styles.flexStart} flex-row`} >
                <p className=' font-poppins font-medium text-[18px] leading-[23px]'  >
                  <span className=' text-gradient' >Processing</span>
                </p>

               </div>
          </div>}
    </div>
  )
}

export default RealTime