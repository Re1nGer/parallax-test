import CloseMenu from "../assets/close_menu.svg";
import Nav1 from "../assets/nav_1.svg";
import Nav2 from "../assets/nav_2.svg";
import Nav3 from "../assets/nav_3.svg";
import Nav4 from "../assets/nav_4.svg";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "../assets/menu-2-svgrepo-com 1.svg";


const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);

    return <>
        <div id="mobile_menu" className="md:hidden flex justify-center pt-[51px]">
            <img id="mobile_nav_btn" src={MenuIcon.src} onClick={handleToggle} alt="menu"
                 className="max-h-[47px] relative z-10 max-w-[47px] h-full w-full text-[#CFC5FF]"/>
        </div>
        <AnimatePresence>
            { isOpen ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} id='mobile_nav' className="h-full w-full bg-dark_purple absolute top-0 z-20 md:hidden">
                    <div className="pt-[43px] mb-[81px] flex justify-center">
                        <img id="mobile_close_btn" onClick={handleToggle} src={CloseMenu.src} alt="menu close" className="w-[54px] h-[54px]"/>
                    </div>
                    <div className="flex flex-col gap-[33px] items-center">
                        <div className="flex-col flex gap-[6px] items-center">
                            <img src={Nav1.src} alt="nav"/>
                            <h1 className="font-valorax text-[25px] text-white">About Me</h1>
                        </div>
                        <div className="flex-col flex gap-[6px] items-center">
                            <img src={Nav2.src} alt="nav"/>
                            <h1 className="font-valorax text-[25px] text-white">Work Experience</h1>
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
