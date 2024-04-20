import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectBorder from "../../assets/project_border.svg";
import JestIcon from '../icons/Jest.jsx';
import XUnitIcon from '../icons/Xunit.jsx';
import ReactIcon from '../icons/React.jsx';
import Network from '../../assets/Network.svg';

import Project3 from "./Project3.jsx";
import Golang from "../icons/GoLang.jsx";
import ProjectBorderDesktop from "../../assets/project_border_desktop.svg";

const Project3Modal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return <>
        <Project3 onClick={handleOpen} />
        <AnimatePresence>
            { isOpen ? (
                <>
                    <div className={'absolute h-[800px] lg:h-[2000px] w-full z-10 bg-black bg-opacity-0'} onClick={handleClose}></div>
                    <div className={'absolute h-[600px] lg:h-[2000px] w-full z-10 bg-black bg-opacity-90'} onClick={handleClose}></div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className={'relative flex justify-end flex-col w-full max-h-[600px] items-center z-10'}
                    >
                        <img src={ProjectBorderDesktop.src} className={'absolute z-20 max-w-[597px] max-h-[900px] hidden lg:block'}  alt={'project border'} />
                        <img src={ProjectBorder.src} className={'absolute z-20 max-w-[289px] max-h-[527px] lg:hidden'} alt={'project border'} />
                        <div className={'max-h-[427px] lg:max-h-[800px] lg:h-[1000px] lg:max-w-[597px] overflow-y-auto w-full flex-col items-center lg:justify-start flex absolute z-20'}>
                            <div className={'max-w-[289px] flex flex-col relative z-10 items-center'}>
                                <p className={'text-white px-[25px] mb-[10px] text-center relative z-20 lg:max-w-[600px] lg:px-0 lg:leading-none lg:text-[25px]'}>Developed Server-side logic for Covid Green Certificate Portal</p>
                                <h1 className={'text-dark_blue text-[25px] font-valorax blue-text-shadow lg:text-[35px] lg:mt-8'}>stack:</h1>
                            </div>
                            <div className={'flex w-full justify-start flex-col lg:flex-row lg:justify-center gap-[12.5px] relative z-10'}>
                                <div className={'flex justify-center w-full lg:justify-end gap-[12.5px]'}>
                                    <Golang />
                                    <ReactIcon />
                                </div>
                                <div className={'flex justify-center w-full lg:justify-start gap-[12.5px]'}>
                                    <XUnitIcon />
                                    <JestIcon />
                                </div>
                            </div>
                            <div className={'flex gap-[.5rem] lg:gap-[16px] max-w-[250px] lg:max-w-[475px] mt-[30px]'}>
                                <img src={Network.src} className={'relative z-30 self-start'} alt={'n'} />
                                <p className={'text-white text-left leading-none'}>Created Microservices API in Golang for handling business logic which would serve 1 million people across Latvia</p>
                            </div>
                            <div className={'flex gap-[.5rem] lg:gap-[16px] max-w-[250px] lg:max-w-[475px] mt-[30px]'}>
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
