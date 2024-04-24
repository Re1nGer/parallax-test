import SwiperBg from '../../assets/SwiperBg.svg';
import Base from '../../assets/handle.png';
import { useEffect, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Scrollbar } from "swiper/modules";
import SideProjectIcons from "./SideProjectIcons.jsx";
import SideProjectNextBtn from "./SideProjectNextBtn.jsx";
import SliderBorder from '../../assets/slider_bg_desktop.svg';
import AlgoExpert1 from '../../assets/img.png';
import AlgoExpert2 from '../../assets/img_1.png';
import {Image} from "astro:assets";

gsap.registerPlugin(ScrollTrigger);


const socialAppDescription=
    'Personal attempt at replicating some of the features of the real social media application combined  with few AI-based enhancements.';

const algoExpertCloneDescription =
    'A clone of infamous AlgoExpert platform designed to help learn algorithms by providing video explanations to LeetCode like questions.';

const SideProjectsSlider = () => {

    const [curIdx, setCurIdx] = useState(0);

    const [isSliderOpen, setIsSliderOpen] = useState(false);

    useEffect(() => {
        let timeline = gsap.timeline({
            scrollTrigger: { trigger: '#base', start: "center bottom" }
        });

        timeline.fromTo('#light', { y: 150, scale: .50, opacity: .4 }, { y: -25, scale: 1, opacity: 1, duration: 1 })
            .to('#ball', { y:-100, duration: 1 }, "<")
            .to('#cross', { y:-100, duration: 1 }, "<")
            .fromTo('#app_name', { opacity: 0 }, { opacity: 1, duration: 1 }, ">")

        gsap.fromTo('#app_description', { opacity: 0 },
            { opacity: 1, duration: 1, scrollTrigger: { trigger: '#app_description', start: 'bottom bottom' } });

    }, []);

    const blink = () => {
        gsap.fromTo('#social', { opacity: 0 }, { opacity: 1, duration: .3 });
    }

    const next = () => {
        blink();
        setCurIdx(1)
    }

    const prev = () => {
        blink();
        setCurIdx(0)
    }

    return <div className={'overflow-hidden max-w-[3000px]'}>
        <section id={'social'} className="flex flex-col w-full items-center justify-center z-10">

            <h1 id={'app_name'}
                className="text-dark_blue text-[25px] blue-text-shadow font-valorax text-center">
                {curIdx === 0 ? 'Social App' : 'AlgoExpert Clone'}
            </h1>

            <svg id="light" className="mx-auto" width="342" height="297" viewBox="0 0 342 297" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_146_380)">
                    <path d="M75.2725 75.083L168.311 221.038L266.874 75.083H75.2725Z" fill="#B9F0FF"/>
                </g>
                <defs>
                    <filter id="filter0_f_146_380" x="0.272461" y="0.0830078" width="341.602" height="295.955"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="37.5" result="effect1_foregroundBlur_146_380"/>
                    </filter>
                </defs>
            </svg>

            <AnimatePresence>
                {isSliderOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: .8 }}
                        exit={{ opacity: 0 }}
                        className={'absolute h-[2000px] w-full z-20 bg-black opacity-80 lg:hidden'}
                        onClick={() => setIsSliderOpen(false)}
                    />
                )}
                {isSliderOpen ? (
                    <motion.div
                        exit={{opacity: 0}}
                        className={'absolute h-[522px] w-[300px] -translate-y-8 z-30 lg:hidden'}
                    >
                        <img
                            className={'absolute h-[522px] scale-[120%] w-[300px] z-0 lg:hidden'}
                            src={SwiperBg.src}
                            alt={'swiper bg'}
                        />
{/*
                        <img
                            className={'absolute h-[852px] z-0'}
                            src={SliderBorder.src}
                            alt={'swiper bg'}
                        />
*/}
                        <Swiper
                            className={'h-full w-full relative z-40'}
                            spaceBetween={40}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Scrollbar]}
                        >
                            <SwiperSlide
                                className={'bg-white max-w-[300px] w-full max-h-[400px] mt-10 rounded-xl'}>
                                <img src={AlgoExpert1.src} className={'object-contain h-full w-full'} alt={'algo'} />
                            </SwiperSlide>
                            <SwiperSlide
                                className={'bg-white max-w-[300px] w-full max-h-[400px] mt-10 rounded-xl'}>
                                <img src={AlgoExpert2.src} className={'object-contain'} alt={'algo'} />
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <div id="ball" className="flex justify-center items-center" onClick={() => setIsSliderOpen(true)}>
                <svg id="ball" className="absolute" width="96" height="93" viewBox="0 0 96 93" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_b_146_381)">
                        <rect x="0.978516" y="0.937988" width="94.9705" height="91.5787" rx="45.7893" fill="#B9F0FF"
                              fillOpacity="0.2"/>
                        <rect x="1.45906" y="1.41854" width="94.0094" height="90.6176" rx="45.3088" stroke="white"
                              strokeOpacity="0.2" strokeWidth="0.961098"/>
                    </g>
                    <defs>
                        <filter id="filter0_b_146_381" x="-5.94139" y="-5.98192" width="108.81" height="105.418"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.45995"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_146_381"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_146_381"
                                     result="shape"/>
                        </filter>
                    </defs>
                </svg>

                <svg id="cross" className="absolute" width="71" height="71" viewBox="0 0 71 71" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M35.5 68.0322C35.5 42.884 28.116 35.5 2.96777 35.5C28.116 35.5 35.5 28.116 35.5 2.96777C35.5 28.116 42.884 35.5 68.0322 35.5C42.884 35.5 35.5 42.884 35.5 68.0322Z"
                        fill="white"/>
                </svg>
            </div>
            <img id="base" className="mx-auto mt-[-4rem]" src={Base.src} alt="base"/>

            <SideProjectIcons />

            <div id={'app_description'} className={'mt-[27px] max-w-[300px] text-white mx-[20px] text-center'}>
                {curIdx === 0 ? socialAppDescription : algoExpertCloneDescription}
            </div>
            <SideProjectNextBtn
                onClick={curIdx === 0 ? next : prev}
                curIdx={curIdx}
            />
        </section>
    </div>
}

export default SideProjectsSlider;