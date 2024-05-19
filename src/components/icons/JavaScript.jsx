import JavascriptBlur from '../../assets/javascript_blur.svg';
import JavaScriptIcon from '../../assets/javascript.svg';


const JavaScript = () => {
    return <div className="group flex max-w-[56px] max-h-[54px] h-[54px] items-center w-full rounded-md justify-center gr_icon relative z-10">
        <img src={JavaScriptIcon.src} className="max-w-[32px] max-h-[37px] w-full h-full relative z-20 text-dark_blue"
               alt="javascript" />
        <img src={JavascriptBlur.src}
               className="group-active:opacity-100 transition-opacity max-w-[40px] max-h-[40px] h-full w-full top-2 scale-125 opacity-50 absolute z-0"
               alt="javascript blur" />
    </div>
}

export default JavaScript;

