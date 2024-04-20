import { useState } from "react";
import ProjectBorder from '../../assets/project_border.svg';
import Project1 from "./Project1.jsx";
import {AnimatePresence, motion} from "framer-motion";
import NetIcon from '../icons/.NET.jsx';
import JestIcon from '../icons/Jest.jsx';
import XUnitIcon from '../icons/Xunit.jsx';
import ReactIcon from '../icons/React.jsx';
import Network from '../../assets/Network.svg';

const Project1Modal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return <>
        <Project1 onClick={handleOpen} />
        <AnimatePresence>
            { isOpen ? (
                <>
                    <div className={'absolute h-[800px] w-screen z-10 bg-black bg-opacity-0'} onClick={handleClose}></div>
                    <div className={'absolute max-h-[600px] h-full w-screen z-10 bg-black bg-opacity-100'} onClick={handleClose}></div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className={'relative flex justify-center flex-col w-full max-h-[2000px] items-center mb-[-4rem] z-10'}
                    >
                        <img src={ProjectBorder.src} className={'absolute z-20 max-w-[289px] max-h-[527px]'}  alt={'project border'} />
                        <div className={'max-h-[427px] overflow-y-auto w-full flex-col items-center flex absolute z-20'}>
                            <div className={'max-w-[289px] flex flex-col relative z-10 items-center'}>
                                <p className={'text-white px-[25px] mb-[10px] text-center relative z-20'}>Hotel accommodation system used by hotel managers to create and run campaigns, update availability of rooms etc</p>
                                <h1 className={'text-dark_blue text-[25px] font-valorax blue-text-shadow'}>stack:</h1>
                            </div>
                            <div className={'flex w-full justify-start flex-col gap-[12.5px] relative z-10'}>
                                <div className={'flex justify-center gap-[12.5px]'}>
                                    <NetIcon />
                                    <ReactIcon />
                                </div>
                                <div className={'flex justify-center gap-[12.5px]'}>
                                    <XUnitIcon />
                                    <JestIcon />
                                </div>
                            </div>
                            <div className={'flex gap-[.5rem] max-w-[250px] mt-[30px]'}>
                                <img src={Network.src} className={'relative z-30 self-start'} alt={'n'} />
                                <p className={'text-white text-left leading-none'}>Optimized revenue management REST API
                                    by introducing parallel processing for overloaded endpoints which boosted response time by 55%.</p>
                            </div>
                            <div className={'flex gap-[.5rem] max-w-[250px] mt-[30px]'}>
                                <img src={Network.src} className={'relative z-30 self-start'} alt={'n'} />
                                <p className={'text-white text-left leading-none'}>Reduced TTI (Time To Interactive) by 20% for the promotion pages by cutting down on a number of cms requests
                                    made to the server on the first page load</p>
                            </div>
                            <div className={'flex gap-[.5rem] max-w-[250px] mt-[30px]'}>
                                <img src={Network.src} className={'relative z-30 self-start'} alt={'n'} />
                                <p className={'text-white text-left leading-none'}>Improved FCP (First Contentful Paint) by 15% for the promotion pages by employing code-splitting for React
                                    components</p>
                            </div>
                            <div className={'flex gap-[.5rem] max-w-[250px] mt-[30px]'}>
                                <img src={Network.src} className={'relative z-30 self-start'} alt={'n'} />
                                <p className={'text-white text-left leading-none'}>Reduced API response time by 10% with fetching data directly from GraphQL server bypassing Gateway</p>
                            </div>
                            <div className={'flex gap-[.5rem] max-w-[250px] mt-[30px]'}>
                                <img src={Network.src} className={'relative z-30 self-start'} alt={'n'} />
                                <p className={'text-white text-left leading-none'}>Performed A/B testing on page load time with the precise analytics data to determine the effect of optimization
                                    techniques employed. As a result, all of the proposed experiments were successfully integrated</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            ) : null }
        </AnimatePresence>
    </>
}


export default Project1Modal;