import PullShark from "../../assets/pull_shark.png";
import DarkBlur from "../../assets/dark_blur.svg";


const PullSharkBadge = () => {
   return <div className="lg:w-[64px] lg:h-[61px] xl:h-[79px] xl:w-[82px] flex justify-center items-center rounded-full group gr_icon relative z-20">
        <img src={PullShark.src} className="max-h-[42px] max-w-[42px] w-full h-full relative z-10" alt="pull shark" />
        <img src={DarkBlur.src}
               className="group-active:opacity-100 transition-opacity lg:max-w-[50px] lg:max-h-[40px] xl:max-w-[60px] xl:max-h-[57px] h-full w-full top-5 opacity-40 absolute z-0"
               alt="react blur" />
    </div>
}

export default PullSharkBadge;