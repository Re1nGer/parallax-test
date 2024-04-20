import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import ProjectBorder from "../../assets/project_border.svg";
import NetIcon from '../icons/.NET.jsx';
import JestIcon from '../icons/Jest.jsx';
import XUnitIcon from '../icons/Xunit.jsx';
import ReactIcon from '../icons/React.jsx';
import Network from '../../assets/Network.svg';

import Project2 from "./Project2.jsx";
import ProjectBorderDesktop from "../../assets/project_border_desktop.svg";

const Project2Modal = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return <>
        <Project2 onClick={handleOpen} />
        <AnimatePresence>
            { isOpen ? (
                <>
                    <div className={'absolute h-[800px] lg:h-[2000px] w-full z-10 bg-black bg-opacity-0'} onClick={handleClose}></div>
                    <div className={'absolute h-[600px] lg:h-[2000px] w-full z-10 bg-black bg-opacity-90'} onClick={handleClose}></div>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className={'relative flex justify-center flex-col w-full max-h-[2000px] mb-[8rem] items-center z-10'}
                    >
                        <img src={ProjectBorderDesktop.src} className={'absolute z-20 max-w-[597px] max-h-[900px] hidden lg:block'}  alt={'project border'} />
                        <img src={ProjectBorder.src} className={'absolute z-20 max-w-[289px] max-h-[527px] lg:hidden'} alt={'project border'} />
                        <div className={'max-h-[427px] lg:max-h-[800px] lg:max-w-[597px] overflow-y-auto w-full flex-col items-center flex absolute z-20'}>
                            <div className={'max-w-[289px] lg:max-h-[800px] h-full lg:max-w-[597px] flex flex-col relative z-10 lg:mb-[42px] items-center'}>
                                <p className={'text-white lg:text-[25px] px-[25px] mb-[10px] text-center relative z-20 lg:max-w-[400px] lg:leading-none'}>Designed and built medical portal for conducting research with participants and medical professionals</p>
                                <h1 className={'text-dark_blue text-[25px] font-valorax blue-text-shadow lg:text-[35px] lg:mt-8'}>stack:</h1>
                            </div>
                            <div className={'flex w-full justify-start flex-col lg:flex-row lg:justify-center gap-[12.5px] relative z-10'}>
                                <div className={'flex justify-center w-full lg:justify-end gap-[12.5px]'}>
                                    <NetIcon />
                                    <ReactIcon />
                                </div>
                                <div className={'flex justify-center w-full lg:justify-start gap-[12.5px]'}>
                                    <XUnitIcon />
                                    <JestIcon />
                                </div>
                            </div>
                            <div className={'flex gap-[.5rem] lg:gap-[16px] max-w-[250px] lg:max-w-[475px] mt-[30px]'}>
                                <img src={Network.src} className={'relative z-30 self-start'} alt={'n'} />
                                <p className={'text-white lg:text-[22px] text-left leading-none'}>Designed and developed SPA website from scratch using .NET 6, React, PostsgreSQL stack for medical research
                                    team in Latvia</p>
                            </div>
                            <div className={'flex gap-[.5rem] lg:gap-[16px] max-w-[250px] lg:max-w-[475px] mt-[30px]'}>
                                <img src={Network.src} className={'relative z-30 self-start'} alt={'n'} />
                                <p className={'text-white lg:text-[22px] text-left leading-none'}>Introduced Selenium end-to-end tests in python as a part of CI/CD pipeline which resulted in less failed builds</p>
                            </div>
                            <div className={'flex gap-[.5rem] lg:gap-[16px] max-w-[250px] lg:max-w-[475px] mt-[30px]'}>
                                <img src={Network.src} className={'relative z-30 self-start'} alt={'n'} />
                                <p className={'text-white lg:text-[22px] text-left leading-none'}>Devised an antivirus microservice with ClamAV for file upload validation for custom CMS system</p>
                            </div>
                            <div className={'flex gap-[.5rem] lg:gap-[16px] max-w-[250px] lg:max-w-[475px] mt-[30px]'}>
                                <img src={Network.src} className={'relative z-30 self-start'} alt={'n'} />
                                <p className={'text-white lg:text-[22px] text-left leading-none'}>Implemented service worker for fetching audit messages from RabbitMQ</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            ) : null }
        </AnimatePresence>
    </>
}


export default Project2Modal;
