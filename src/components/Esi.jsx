import React from 'react'
import styles  from '../style'
import slogo from '../assets/slogo.png'

function Esi() {
  return (
    // <section className={`${styles.flexCenter} `} >
          <div className="flex-1 flex flex-col justify-center items-center">
      <img src={slogo} alt="client" className="sm:w-[700px] w-[350px] object-contain rounded-md" />
    </div>
    // </section>
  )
}

export default Esi