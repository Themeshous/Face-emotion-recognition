import React from 'react'
import {quotes} from "../assets"

function PredictionOnSelectedImages({images}) {
  return (
    <>
        {
            images.map(image => (
                <div className='flex justify-between flex-col px-5 py-5  rounded-[20px] max-w-[340px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card' >
                    <img src={quotes} alt="double_quotes" className=" w-[42px] h-[27px] my-10 object-contain" />
                    <div className=' flex flex-row' >
                    <img src={image.url} alt={image.name} className="w-[200px] h-[200px] " />
                    </div>
                    <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white" >Name : {image.name}</h4>
                    <p  className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>Emotion : {image.emotion} </p>
                </div>
            ))
        }
    </>
  )
}

export default PredictionOnSelectedImages