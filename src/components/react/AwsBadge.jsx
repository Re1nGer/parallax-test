import Aws from "../../assets/aws.png";
import DarkBlur from "../../assets/dark_blur.svg";
import {useState} from "react";

const AwsBadge = () => {

   return <div className={'relative'}>
       <div className="lg:w-[64px] lg:h-[61px] xl:h-[79px] xl:w-[82px] flex justify-center items-center rounded-full group gr_icon relative">
           <img src={Aws.src} className="max-h-[42px] max-w-[42px] w-full h-full relative z-10" alt="aws"/>
           <img src={DarkBlur.src}
                className="group-active:opacity-100 transition-opacity lg:max-w-[50px] lg:max-h-[40px] xl:max-w-[60px] xl:max-h-[57px] h-full w-full top-5 opacity-40 absolute z-0"
                alt="react blur"/>
       </div>
   </div>
}


export default AwsBadge;