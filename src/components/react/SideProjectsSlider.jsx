import SwiperBg from '../../assets/SwiperBg.svg';
import Base from '../../assets/handle.png';
import {useEffect, useState} from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {AnimatePresence, motion} from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Scrollbar} from "swiper/modules";

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
            scrollTrigger: { trigger: '#base', start: "top bottom" }
        });

        timeline.fromTo('#light', { y: 150, scale: .50 }, { y: -25, scale: 1, duration: 1 })
            .to('#ball', { y:-100, duration: 1 }, "<")
            .to('#cross', { y:-100, duration: 1 }, "<")
    }, []);

    const next = () => {
        gsap.fromTo('#social', { opacity: 0 }, { opacity: 1, duration: .3 });
        setCurIdx(1)
    }

    const prev = () => {
        gsap.fromTo('#social', { opacity: 0 }, { opacity: 1, duration: .3 });
        setCurIdx(0)
    }

    return <div className={'overflow-hidden relative'}>
            <section id={'social'} className="flex flex-col w-full items-center justify-center relative z-10">
                <h1 className="text-dark_blue text-[25px] blue-text-shadow font-valorax text-center">{ curIdx === 0 ? 'Social App' : 'AlgoExpert Clone'} </h1>
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
                    { isSliderOpen && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={'absolute h-[1000px] w-full z-10 bg-black opacity-100'} onClick={() => setIsSliderOpen(false)} />
                    ) }
                    { isSliderOpen ? (
                        <motion.div exit={{ opacity: 0 }} className={'absolute h-[522px] w-[310px] z-30'}>
                            <img className={'absolute h-[522px] scale-125 w-[300px] z-0'} src={SwiperBg.src} alt={'swiper bg'} />
                            <Swiper
                                className={'h-full w-full relative z-40'}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Scrollbar]}
                            >
                                <SwiperSlide className={'bg-white max-w-[300px] max-h-[460px] object-contain'}>Slide 1</SwiperSlide>
                                <SwiperSlide className={'bg-white max-w-[300px] max-h-[460px] object-contain'}>Slide 2</SwiperSlide>
                            </Swiper>
                        </motion.div>
                    ) : null }
                </AnimatePresence>
                <div id="ball" className="flex justify-center items-center" onClick={() => setIsSliderOpen(!isSliderOpen)}>
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
               <div className={'flex gap-[.5rem]'}>

                   <svg width="81" height="82" viewBox="0 0 81 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <g filter="url(#filter0_d_405_52)">
                           <path d="M30.5056 46.1538H18.641V34.3712H21.6933V43.1015H27.4369V41.0502H30.5056V46.1538ZM35.2194 46.1538H32.1506V34.3712H35.2194V46.1538ZM48.7596 46.1538H42.9012L36.8622 40.1312V34.3712H39.9309V38.8512L44.1647 43.1015H45.7073V34.3712H48.7596V46.1538ZM61.9567 46.1538H50.4038V40.4102L56.4428 34.3712H61.9567V37.44H57.7064L56.328 38.8184H61.1033V41.8871H53.4726V43.1015H61.9567V46.1538Z" fill="#97E9FF"/>
                       </g>
                       <g filter="url(#filter1_d_405_52)">
                           <circle cx="40.7949" cy="41" r="31.5" stroke="#B9F0FF" shapeRendering="crispEdges"/>
                       </g>
                       <defs>
                           <filter id="filter0_d_405_52" x="10.436" y="26.1662" width="59.7259" height="28.1927" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                               <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                               <feOffset/>
                               <feGaussianBlur stdDeviation="4.10256"/>
                               <feComposite in2="hardAlpha" operator="out"/>
                               <feColorMatrix type="matrix" values="0 0 0 0 0.725 0 0 0 0 0.941071 0 0 0 0 1 0 0 0 1 0"/>
                               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_52"/>
                               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_52" result="shape"/>
                           </filter>
                           <filter id="filter1_d_405_52" x="0.589793" y="0.794871" width="80.4103" height="80.4103" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                               <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                               <feOffset/>
                               <feGaussianBlur stdDeviation="4.10256"/>
                               <feComposite in2="hardAlpha" operator="out"/>
                               <feColorMatrix type="matrix" values="0 0 0 0 0.725 0 0 0 0 0.941071 0 0 0 0 1 0 0 0 1 0"/>
                               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_52"/>
                               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_52" result="shape"/>
                           </filter>
                       </defs>
                   </svg>
                   <svg width="81" height="82" viewBox="0 0 81 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <g filter="url(#filter0_d_405_52)">
                           <path d="M30.5056 46.1538H18.641V34.3712H21.6933V43.1015H27.4369V41.0502H30.5056V46.1538ZM35.2194 46.1538H32.1506V34.3712H35.2194V46.1538ZM48.7596 46.1538H42.9012L36.8622 40.1312V34.3712H39.9309V38.8512L44.1647 43.1015H45.7073V34.3712H48.7596V46.1538ZM61.9567 46.1538H50.4038V40.4102L56.4428 34.3712H61.9567V37.44H57.7064L56.328 38.8184H61.1033V41.8871H53.4726V43.1015H61.9567V46.1538Z" fill="#97E9FF"/>
                       </g>
                       <g filter="url(#filter1_d_405_52)">
                           <circle cx="40.7949" cy="41" r="31.5" stroke="#B9F0FF" shapeRendering="crispEdges"/>
                       </g>
                       <defs>
                           <filter id="filter0_d_405_52" x="10.436" y="26.1662" width="59.7259" height="28.1927" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                               <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                               <feOffset/>
                               <feGaussianBlur stdDeviation="4.10256"/>
                               <feComposite in2="hardAlpha" operator="out"/>
                               <feColorMatrix type="matrix" values="0 0 0 0 0.725 0 0 0 0 0.941071 0 0 0 0 1 0 0 0 1 0"/>
                               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_52"/>
                               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_52" result="shape"/>
                           </filter>
                           <filter id="filter1_d_405_52" x="0.589793" y="0.794871" width="80.4103" height="80.4103" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                               <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                               <feOffset/>
                               <feGaussianBlur stdDeviation="4.10256"/>
                               <feComposite in2="hardAlpha" operator="out"/>
                               <feColorMatrix type="matrix" values="0 0 0 0 0.725 0 0 0 0 0.941071 0 0 0 0 1 0 0 0 1 0"/>
                               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_52"/>
                               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_52" result="shape"/>
                           </filter>
                       </defs>
                   </svg>
               </div>
                <div className={'mt-[27px] text-white mx-[55px] text-center'}>
                    { curIdx === 0 ? socialAppDescription : algoExpertCloneDescription }
                </div>
                <button
                    onClick={curIdx === 0 ? next : prev}
                    className="max-w-[107px] rounded-3xl px-[32px] py-[.2rem] my-[4rem] mx-auto border-dark_blue border-2">
                    <svg className={`max-w-[37px] ${curIdx === 1 ? 'rotate-180' : ''}`} width="50" height="38" viewBox="0 0 50 38" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_146_374)">
                            <path
                                d="M24.486 21.9438H10.374L5.99004 17.6238V16.7278H20.134L24.486 21.0798V21.9438ZM27.9335 28.3438L27.6775 27.4798L30.6535 22.1038L41.3095 18.9998L30.6535 15.8958L27.6775 10.5198L27.9335 9.65584L41.4695 13.6238L44.4455 18.9998L41.4695 24.4078L27.9335 28.3438Z"
                                fill="#97E9FF"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_146_374" x="0.758468" y="4.42424" width="48.9186" height="29.151"
                                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="2.61576"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.725 0 0 0 0 0.941071 0 0 0 0 1 0 0 0 1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_146_374"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_146_374" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </button>
            </section>
    </div>
}

export default SideProjectsSlider;