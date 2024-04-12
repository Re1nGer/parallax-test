import DarkBlur from '../../assets/dark_blur.svg';
import ReactIcon from "../../../public/react.svg";


const React = () => {
    return <div className="group flex max-w-[56px] max-h-[54px] h-[54px] items-center w-full rounded-md justify-center gr_icon relative z-10">
        <img src={ReactIcon.src} className="max-w-[30px] scale-125 max-h-[34px] w-full h-full relative z-20 text-dark_blue"
               alt="react"/>
        <img src={DarkBlur.src}
               className="group-active:opacity-100 transition-opacity max-w-[40px] max-h-[40px] h-full w-full top-2 scale-125 opacity-50 absolute z-0"
               alt="react blur"/>
    </div>
}

export default React;

