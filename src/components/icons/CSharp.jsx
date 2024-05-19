import VioletBlur from '../../assets/csharp_blur.svg';
import CSharpIcon from '../../assets/csharp.svg';


const CSharp = () => {
    return <div className="group flex max-w-[56px] max-h-[54px] h-[54px] items-center w-full rounded-md justify-center gr_icon relative z-10">
        <img src={CSharpIcon.src} className="max-w-[32px] max-h-[37px] w-full h-full relative z-20 text-dark_blue"
               alt="csharp"/>
        <img src={VioletBlur.src}
               className="group-active:opacity-100 transition-opacity max-w-[40px] max-h-[40px] h-full w-full top-5 scale-125 opacity-75 absolute z-0"
               alt="react blur"/>
    </div>
}

export default CSharp;

