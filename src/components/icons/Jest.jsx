import JestIcon from '../../assets/jest.png';
import JavascriptBlur from "../../assets/javascript_blur.svg";



const Jest = () => {
    return <div className="flex max-w-[56px] max-h-[54px] h-[54px] items-center w-full rounded-md justify-center gr_icon relative z-10">
        <img src={JestIcon.src} className="max-w-[30px] w-full max-h-[34px] h-full relative z-20 text-dark_blue" alt="react" />
        <img src={JavascriptBlur.src} className="group-active:opacity-100 transition-opacity max-w-[40px] max-h-[40px] h-full w-full top-2 scale-125 opacity-50 absolute z-0" alt="react blur" />
    </div>
}

export default Jest;

