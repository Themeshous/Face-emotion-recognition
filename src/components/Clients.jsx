import React from 'react'
import {clients} from "../constants/index2"
import styles  from '../style'
import slogo from '../assets/slogo.png'

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`} >
       <div className={`${styles.flexCenter} flex-wrap w-full` } > 
       {clients.map((client)=>(
         <div key={client.id} className={` flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`} >
         </div>
       ))}
           {/* <img src={slogo} alt="client" className='sm:w-[192px] w-[100px] object-contain'/> */}
        

       </div>
    </section>
  )
}

export default Clients