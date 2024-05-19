import ReduxIcon from "../../assets/redux.svg";
import DarkBlur from '../../assets/redux_blur.svg';

const Redux = () => {
   return <div className="group max-w-[56px] max-h-[54px] h-[54px] justify-center items-center w-full flex rounded-md gr_icon relative z-10">
        <img src={ReduxIcon.src} className="max-w-[32px] max-h-[37px] w-full h-full relative z-20" alt="react" />
        <img src={DarkBlur.src} className="group-active:opacity-100 transition-opacity max-w-[30px] max-h-[40px] h-full w-full top-3.5 scale-x-150 scale-y-125 opacity-75 absolute z-0" alt="react blur" />
    </div>

}

export default Redux;

