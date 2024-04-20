import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import ProjectBorder from "../../assets/project_border.svg";
import JestIcon from '../icons/Jest.jsx';
import XUnitIcon from '../icons/Xunit.jsx';
import ReactIcon from '../icons/React.jsx';
import Network from '../../assets/Network.svg';

import Project3 from "./Project3.jsx";
import Golang from "../icons/GoLang.jsx";

const Project3Modal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return <>
        <Project3 onClick={handleOpen} />
        <AnimatePresence>
            { isOpen ? (
                <>
                    <div className={'absolute h-[900px] w-screen z-10 bg-black bg-opacity-0'} onClick={handleClose}></div>
                    <div className={'absolute max-h-[550px] h-full w-screen z-10 bg-black bg-opacity-100'} onClick={handleClose}></div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={(e) => e.stopPropagation()}  className={'relative flex justify-end flex-col w-full max-h-[600px] items-center z-10'}>
                        <img src={ProjectBorder.src} className={'absolute z-20 max-w-[289px] max-h-[527px]'} alt={'project border'} />
                        <div className={'max-h-[427px] overflow-y-auto w-full flex-col items-center mb-10 flex absolute z-20'}>
                            <div className={'max-w-[289px] flex flex-col relative z-10 items-center'}>
                                <p className={'text-white px-[25px] mb-[10px] text-center relative z-20'}>Developed Server-side logic for Covid Green Certificate Portal</p>
                                <h1 className={'text-dark_blue text-[25px] font-valorax blue-text-shadow'}>stack:</h1>
                            </div>
                            <div className={'flex w-full justify-start flex-col gap-[12.5px] relative z-10'}>
                                <div className={'flex justify-center gap-[12.5px]'}>
                                    <Golang />
                                    <ReactIcon />
                                </div>
                                <div className={'flex justify-center gap-[12.5px]'}>
                                    <XUnitIcon />
                                    <JestIcon />
                                </div>
                            </div>
                            <div className={'flex gap-[.5rem] max-w-[250px] mt-[30px]'}>
                                <img src={Network.src} className={'relative z-30 self-start'} alt={'n'} />
                                <p className={'text-white text-left leading-none'}>Created Microservices API in Golang for handling business logic which would serve 1 million people across Latvia</p>
                            </div>
                            <div className={'flex gap-[.5rem] max-w-[250px] mt-[30px]'}>
                                <img src={Network.src} className={'relative z-30 self-start'} alt={'n'} />
                                <p className={'text-white text-left leading-none'}>Implemented integration tests resulting in less failed builds and more maintainable codebase</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            ) : null }
        </AnimatePresence>
    </>
}


export default Project3Modal;
