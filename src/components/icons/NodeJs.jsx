import NodeBlur from '../../assets/dark_green.svg';
import NodeJsIcon from '../../assets/node_js.svg';


const NodeJs = () => {
    return <div className="group flex max-w-[56px] max-h-[54px] h-[54px] items-center w-full rounded-md justify-center gr_icon relative z-10">
        <img src={NodeJsIcon.src} className="max-w-[32px] max-h-[37px] top-1 w-full h-full relative z-20 text-dark_blue"
               alt="javascript" />
        <img src={NodeBlur.src}
               className="group-active:opacity-100 transition-opacity max-w-[40px] max-h-[40px] h-full w-full top-2 scale-125 opacity-75 absolute z-0"
               alt="javascript blur" />
    </div>
}

export default NodeJs;

