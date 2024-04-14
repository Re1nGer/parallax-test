import Nav1 from "../../assets/nav_1.svg";
import Nav2 from "../../assets/nav_2.svg";
import Nav3 from "../../assets/nav_3.svg";
import Nav4 from "../../assets/nav_4.svg";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";


const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        document.getElementsByTagName('html')[0].style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);

    const handleNavigateToAboutMe = () => {
        //document.getElementById('aboutme').scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
    }

    const handleNavigateToWorkExp = () => {
        //document.getElementById('work').scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
    }

    return <>
        <div id="mobile_menu" className="md:hidden flex justify-center pt-[51px]">

            <svg onClick={handleToggle} className={'active:drop-shadow-[0_0_10px_#D0C5FF]'} width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.66 6.24158H31.02C28.9434 6.24158 27.26 7.92499 27.26 10.0016V15.6416C27.26 17.7182 28.9434 19.4016 31.02 19.4016H36.66C38.7367 19.4016 40.42 17.7182 40.42 15.6416V10.0016C40.42 7.92499 38.7367 6.24158 36.66 6.24158Z" stroke="#CFC5FF" strokeWidth="2.82" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.9801 6.24158H10.3401C8.26349 6.24158 6.58008 7.92499 6.58008 10.0016V15.6416C6.58008 17.7182 8.26349 19.4016 10.3401 19.4016H15.9801C18.0567 19.4016 19.7401 17.7182 19.7401 15.6416V10.0016C19.7401 7.92499 18.0567 6.24158 15.9801 6.24158Z" stroke="#CFC5FF" strokeWidth="2.82" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M36.66 26.9216H31.02C28.9434 26.9216 27.26 28.605 27.26 30.6816V36.3216C27.26 38.3983 28.9434 40.0816 31.02 40.0816H36.66C38.7367 40.0816 40.42 38.3983 40.42 36.3216V30.6816C40.42 28.605 38.7367 26.9216 36.66 26.9216Z" stroke="#CFC5FF" strokeWidth="2.82" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.9801 26.9216H10.3401C8.26349 26.9216 6.58008 28.605 6.58008 30.6816V36.3216C6.58008 38.3983 8.26349 40.0816 10.3401 40.0816H15.9801C18.0567 40.0816 19.7401 38.3983 19.7401 36.3216V30.6816C19.7401 28.605 18.0567 26.9216 15.9801 26.9216Z" stroke="#CFC5FF" strokeWidth="2.82" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <AnimatePresence>
            { isOpen ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} id='mobile_nav' className="h-screen w-full bg-dark_purple absolute top-0 z-20 md:hidden">
                    <div className="pt-[43px] mb-[30px] flex justify-center">
{/*
                        <img id="mobile_close_btn" onClick={handleToggle} src={CloseMenu.src} alt="menu close" className="w-[54px] h-[54px]"/>
*/}
                        <svg onClick={handleToggle} width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2607 48.6203C15.6127 48.6203 14.963 48.3739 14.4702 47.8811L6.11881 39.5297C5.13162 38.5425 5.13162 36.9377 6.11881 35.9505L14.4702 27.5974C14.7993 27.2683 14.7993 26.7334 14.4702 26.4043L6.11881 18.0512C5.13162 17.064 5.13162 15.4592 6.11881 14.472L14.4702 6.12057C15.4557 5.13507 17.0639 5.13507 18.0494 6.12057L24.0164 12.0859C24.3455 12.4149 24.3455 12.9499 24.0164 13.2789C23.6874 13.608 23.1524 13.608 22.8234 13.2789L16.8564 7.31195C16.5273 6.98289 15.9924 6.98289 15.6633 7.31195L7.31187 15.6634C6.98281 15.9924 6.98281 16.5274 7.31187 16.8565L15.6633 25.2096C16.1409 25.6888 16.4058 26.325 16.4058 27C16.4058 27.675 16.1426 28.3112 15.665 28.7905L7.31356 37.1436C6.9845 37.4726 6.9845 38.0076 7.31356 38.3366L15.665 46.6881C15.9941 47.0171 16.529 47.0171 16.8581 46.6881L25.2112 38.3366C26.1663 37.3815 27.8352 37.3815 28.7904 38.3366L37.1435 46.6881C37.4726 47.0171 38.0075 47.0171 38.3366 46.6881L46.688 38.3366C47.0171 38.0076 47.0171 37.4726 46.688 37.1436L38.3366 28.7905C37.859 28.3129 37.5957 27.6767 37.5957 27C37.5957 26.3233 37.859 25.6888 38.3366 25.2096L46.688 16.8565C47.0171 16.5274 47.0171 15.9924 46.688 15.6634L38.3366 7.31195C38.0075 6.98289 37.4726 6.98289 37.1435 7.31195L28.0276 16.4278C27.6986 16.7569 27.1636 16.7569 26.8346 16.4278C26.5055 16.0988 26.5055 15.5638 26.8346 15.2348L35.9504 6.11889C36.9359 5.13339 38.5441 5.13339 39.5296 6.11889L47.8811 14.4703C48.8682 15.4575 48.8682 17.0623 47.8811 18.0495L39.5296 26.4026C39.2006 26.7317 39.2006 27.2666 39.5296 27.5957L47.8811 35.9488C48.8682 36.936 48.8682 38.5408 47.8811 39.528L39.5296 47.8795C38.5441 48.865 36.9359 48.865 35.9504 47.8795L27.5973 39.528C27.2682 39.199 26.7333 39.199 26.4042 39.528L18.0511 47.8795C17.5567 48.3739 16.9087 48.6203 16.2607 48.6203Z" fill="white"/>
                            <path d="M16.2607 48.6203C15.6127 48.6203 14.963 48.3739 14.4702 47.8811L6.11881 39.5297C5.13162 38.5425 5.13162 36.9377 6.11881 35.9505L14.4702 27.5974C14.7993 27.2683 14.7993 26.7334 14.4702 26.4043L6.11881 18.0512C5.13162 17.064 5.13162 15.4592 6.11881 14.472L14.4702 6.12057C15.4557 5.13507 17.0639 5.13507 18.0494 6.12057L24.0164 12.0859C24.3455 12.4149 24.3455 12.9499 24.0164 13.2789C23.6874 13.608 23.1524 13.608 22.8234 13.2789L16.8564 7.31195C16.5273 6.98289 15.9924 6.98289 15.6633 7.31195L7.31187 15.6634C6.98281 15.9924 6.98281 16.5274 7.31187 16.8565L15.6633 25.2096C16.1409 25.6888 16.4058 26.325 16.4058 27C16.4058 27.675 16.1426 28.3112 15.665 28.7905L7.31356 37.1436C6.9845 37.4726 6.9845 38.0076 7.31356 38.3366L15.665 46.6881C15.9941 47.0171 16.529 47.0171 16.8581 46.6881L25.2112 38.3366C26.1663 37.3815 27.8352 37.3815 28.7904 38.3366L37.1435 46.6881C37.4726 47.0171 38.0075 47.0171 38.3366 46.6881L46.688 38.3366C47.0171 38.0076 47.0171 37.4726 46.688 37.1436L38.3366 28.7905C37.859 28.3129 37.5957 27.6767 37.5957 27C37.5957 26.3233 37.859 25.6888 38.3366 25.2096L46.688 16.8565C47.0171 16.5274 47.0171 15.9924 46.688 15.6634L38.3366 7.31195C38.0075 6.98289 37.4726 6.98289 37.1435 7.31195L28.0276 16.4278C27.6986 16.7569 27.1636 16.7569 26.8346 16.4278C26.5055 16.0988 26.5055 15.5638 26.8346 15.2348L35.9504 6.11889C36.9359 5.13339 38.5441 5.13339 39.5296 6.11889L47.8811 14.4703C48.8682 15.4575 48.8682 17.0623 47.8811 18.0495L39.5296 26.4026C39.2006 26.7317 39.2006 27.2666 39.5296 27.5957L47.8811 35.9488C48.8682 36.936 48.8682 38.5408 47.8811 39.528L39.5296 47.8795C38.5441 48.865 36.9359 48.865 35.9504 47.8795L27.5973 39.528C27.2682 39.199 26.7333 39.199 26.4042 39.528L18.0511 47.8795C17.5567 48.3739 16.9087 48.6203 16.2607 48.6203Z" fill="white"/>
                        </svg>

                    </div>
                    <div className="flex flex-col gap-[25px] items-center">
                        <div className="flex-col flex gap-[6px] items-center">
                            <img src={Nav1.src} alt="nav"/>
                            <h1 className="font-valorax text-[25px] text-white" onClick={handleNavigateToAboutMe}>About Me</h1>
                        </div>
                        <div className="flex-col flex gap-[6px] items-center">
                            <img src={Nav2.src} alt="nav"/>
                            <h1 className="font-valorax text-[25px] text-white" onClick={handleNavigateToWorkExp}>Work Experience</h1>
                        </div>
                        <div className="flex-col flex gap-[6px] items-center">
                            <img src={Nav3.src} alt="nav"/>
                            <h1 className="font-valorax text-[25px] text-white">Side Projects</h1>
                        </div>
                        <div className="flex-col flex gap-[6px] items-center">
                            <img src={Nav4.src} alt="nav"/>
                            <h1 className="font-valorax text-[25px] text-white">Contacts</h1>
                        </div>
                    </div>
                </motion.div>
            ) : null }
        </AnimatePresence>
    </>
}

export default MobileNav;
