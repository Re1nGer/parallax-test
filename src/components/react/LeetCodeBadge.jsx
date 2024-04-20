import Leetcode from "../../assets/leetcode_100.png";
import JavascriptBlur from "../../assets/javascript_blur.svg";



const LeetCodeBadge = () => {
   return <div className="h-[79px] w-[82px] flex justify-center items-center rounded-full group gr_icon relative z-20">
        <img src={Leetcode.src} className="max-h-[42px] max-w-[42px] w-full h-full relative z-10" alt="leet code" />
        <img src={JavascriptBlur.src}
               className="group-active:opacity-100 transition-opacity max-w-[60px] max-h-[55px] h-full w-full top-4 scale-y-125 opacity-70 absolute z-0"
               alt="javascript blur"/>
    </div>
}

export default LeetCodeBadge;