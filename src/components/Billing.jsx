import React from 'react'
import {apple,bill,google} from "../assets"
import styles, {layout} from '../style'
import { exemples } from '../constants/index2'
import {quotes} from "../assets"
function Billing() {
  return (
    <section id='product' className={layout.sectionReverse} >
      <div className=" absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className=" flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] "  >
      {
        exemples.map(exemple => (
          <div className='flex justify-between flex-col px-5 py-5  rounded-[20px] max-w-[340px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card' >
            {/* <img src={quotes} alt="double_quotes" className=" w-[42px] h-[27px] my-10 object-contain" /> */}
            <div className=' flex flex-row' >
              <img src={exemple.img} alt={exemple.name} className="w-[200px] h-[200px] " />
            </div>
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white" >Name : {exemple.name}</h4>
            <p  className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>Emotion : {exemple.emotion} </p>
          </div>
        ))
      }
      </div> 
    </section>
  )
}

export default Billing

