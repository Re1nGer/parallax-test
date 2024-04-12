import {useEffect, useState} from "react";
import ProjectBorder from '../../assets/project_border.svg';
import Project1 from "./Project1.jsx";
import {AnimatePresence, motion} from "framer-motion";


const Project1Modal = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);


    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);


    return <>
        <Project1 onClick={handleOpen} />
        <AnimatePresence>
            { isOpen ? (
                <>
                        <div className={'absolute h-[1000px] w-screen z-10 bg-black bg-opacity-0'} onClick={handleClose}></div>
                        <div className={'absolute h-[600px] w-screen z-10 bg-black bg-opacity-100'}></div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}  className={'relative flex justify-center w-full h-full items-center mb-[-4rem] z-10'}>
                            <img src={ProjectBorder.src} className={'absolute z-20 max-w-[289px] max-h-[527px]'} onClick={(e) => e.stopPropagation()} alt={'project border'} />
                            <div className={'max-w-[289px] flex flex-col items-center h-[480px] absolute'}>
                                <p className={'text-white px-[25px] pt-6 mb-[22px] text-center relative z-20'}>Hotel accommodation system used by hotel managers to create and run campaigns, update availability of rooms etc</p>
                                <h1 className={'text-dark_blue text-[25px] font-valorax blue-text-shadow'}>stack</h1>
                            </div>
                        </motion.div>
                </>
            ) : null }
        </AnimatePresence>
    </>
}


export default Project1Modal;