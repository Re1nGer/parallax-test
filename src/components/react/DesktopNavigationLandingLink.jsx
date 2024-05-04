import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


const DesktopNavigationLandingLink = ({ num, text }) => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = (e) => {
        setIsHover(true)
    }
    const handleMouseLeave = (e) => {
        setIsHover(false)
    }

    return <div
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer h-[50px] group w-[50px] bg-left ml-4 mt-4 top-0 left-0 hover:h-[250px] 2xl:hover:h-auto hover:[writing-mode:vertical-lr] 2xl:hover:[writing-mode:horizontal-tb] 2xl:hover:w-[250px] transition-all mb-[1rem] rounded-full text-dark_purple absolute text-[35px] flex justify-center items-center bg-white"
            >
                {num}
                <AnimatePresence>
                { isHover && (
                    <motion.p
                        initial={{ opacity: 0, display: 'none' }}
                        animate={{ opacity: 1, display: 'inline-block', transitionDuration: '1s', whiteSpace: "nowrap" }}
                        className="text-dark_purple font-valorax text-[25px] 2xl:ml-[20px] 2xl:mt-0 mt-[.5rem]">
                        {text}
                    </motion.p>
                ) }
                </AnimatePresence>
        </div>
}

export default DesktopNavigationLandingLink;