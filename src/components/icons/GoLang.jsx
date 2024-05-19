
import GolangIcon from "../../assets/golang.svg";
import DarkBlur from '../../assets/dark_blur.svg';

const Golang = () => {
   return <div className="group max-w-[56px] max-h-[54px] h-[54px] justify-center items-center w-full flex rounded-md gr_icon relative z-10">
        <img src={GolangIcon.src} className="max-w-[32px] max-h-[37px] w-full scale-125 h-full top-1 relative z-20" alt="react" />
        <img src={DarkBlur.src} className="group-active:opacity-100 transition-opacity max-w-[30px] max-h-[40px] h-full w-full top-2.5 scale-150 opacity-75 absolute z-0" alt="golang blur" />
    </div>

}

export default Golang;

