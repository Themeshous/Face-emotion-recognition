import React from "react";
import { features } from "../constants/index2";
import styles from "../style";
import { layout } from "../style";
import Billing from "./Billing";
import { feedback } from "../constants/index2";
import FeedbackCard from "./FeedbackCard";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index === features.length - 1 ? "mb-0" : "mb-6"
    } feature-card `}
  >
    <div className={` w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `} >
      <img src={icon} alt="icon" className=" w-[50%] h-[50%] object-contain" />
    </div>
    <div className=" flex-1 flex flex-col ml-3" >
      <h4 className=" font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1"  >{title}</h4>
      <p className=" font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1" >{content}</p>
    </div>
  </div>
);

function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden" /> Predicting Identity and Emotional States
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Advanced models for face recognition and emotion detection, allowing users to accurately predict 
          the identity of individuals and analyze their emotions based on selected images or real-time video streams.
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      
    </section>
  );
}

export default Business;
