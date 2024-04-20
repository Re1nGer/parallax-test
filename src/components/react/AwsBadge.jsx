import Aws from "../../assets/aws.png";
import DarkBlur from "../../assets/dark_blur.svg";

const AwsBadge = () => {
   return <div className="h-[79px] w-[82px] flex justify-center items-center rounded-full group gr_icon relative z-20">
        <img src={Aws.src} className="max-h-[42px] max-w-[42px] w-full h-full relative z-10" alt="aws"/>
        <img src={DarkBlur.src}
               className="group-active:opacity-100 transition-opacity max-w-[60px] max-h-[57px] h-full w-full top-5 opacity-40 absolute z-0"
               alt="react blur"/>
    </div>
}


export default AwsBadge;