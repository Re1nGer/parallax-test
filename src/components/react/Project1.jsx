import { ProjectFileLeftMobile, ProjectFileRightMobile } from "./ProjectFileMobile.jsx";
import { ProjectFileLeft, ProjectFileRight } from "./ProjectFile.jsx";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import FileArrow from '../../assets/file1.svg';

gsap.registerPlugin(ScrollTrigger);

const Project1 = ({ onClick }) => {

    useEffect(() => {
        gsap.to('#project1',
            { opacity: 1, duration: 1, scrollTrigger: { trigger: '#tower', start: "top center" } });
        gsap.to('#project1_img',
            { opacity: 1, duration: 1, scrollTrigger: { trigger: '#tower', start: "top center" } });
    }, [])

    return <div className="flex justify-end w-full z-10" onClick={onClick}>
        <h1 className={'text-dark_blue text-[80px] font-valorax self-end justify-self-end mr-[-6rem] hidden lg:block'}>01</h1>
        <img id={"project1_img"} src={FileArrow.src} className={'opacity-0 max-w-[359px] max-h-[139px] self-end w-full flex-1 mr-10 hidden lg:block'} alt={'arrow'} />
        <div id="project1" className="opacity-0 flex group max-w-[160px] lg:max-w-[420px] lg:max-h-[257px] w-full h-full relative z-30 cursor-pointer">
            <div className="group-active:opacity-0 transition-opacity absolute z-[1] flex flex-col max-w-[100px] mt-2 ml-4l lg:max-w-[250px] lg:w-full ml-4 h-full justify-center items-center lg:items-center">
                <h3 className="text-dark_blue text-[15px] lg:text-[42px] uppercase font-valorax">Project</h3>
                <h3 className="text-dark_blue text-[15px] lg:text-[42px] font-bold font-valorax">#1</h3>
            </div>
            <ProjectFileLeftMobile className={'active:stroke-[5px] active:-translate-x-4 transition-all relative lg:hidden'} />
            <ProjectFileRightMobile className={'group-active:stroke-[5px] -translate-x-5 group-active:translate-x-0 transition-transform pt-3 lg:hidden'} />

            <ProjectFileLeft className={'group-hover:stroke-[5px] max-w-[431px] max-h-[277px] group-hover:-translate-x-4 transition-all hidden lg:block'} />
            <ProjectFileRight className={'group-hover:stroke-[5px] max-w-[84px] max-h-[181px] -translate-x-10 group-hover:translate-x-0 transition-transform pt-5 hidden lg:block'} />
        </div>
    </div>
}

export default Project1;