import NET from '../../assets/.net.svg';
import DarkPurple from "../../assets/dark_purple.svg";


const Net = () => {
   return <div className="flex max-w-[56px] max-h-[54px] h-[54px] items-center w-full rounded-md justify-center gr_icon relative z-10">
        <img src={NET.src} className="w-[56px] max-h-[34px] relative z-20" alt="react"/>
        <img src={DarkPurple.src}
               className="group-active:opacity-100 transition-opacity max-w-[40px] max-h-[40px] h-full w-full top-2 scale-125 opacity-20 absolute z-0"
               alt="react blur"/>
    </div>
}

export default Net;

