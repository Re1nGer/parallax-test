import {ProjectFileLeftMobile, ProjectFileRightMobile} from "./ProjectFileMobile.jsx";
import {ProjectFileLeft, ProjectFileRight} from "./ProjectFile.jsx";
import FileArrow from "../../assets/file1.svg";
import {useEffect} from "react";
import {gsap} from "gsap/dist/gsap";

const Project3 = ({ onClick }) => {

    useEffect(() => {
        gsap.to('#project3',
            { opacity: 1, duration: 1, scrollTrigger: { trigger: '#tower', start: "top top" } });
        gsap.to('#project3_img',
            { opacity: 1, duration: 1, scrollTrigger: { trigger: '#tower', start: "top top" } });
    }, []);

    return <div className="flex justify-end w-full" onClick={onClick}>
        <h1 className={'text-dark_blue text-[80px] font-valorax self-end justify-self-end mr-[-8rem] hidden lg:block'}>03</h1>
        <img id={"project3_img"} src={FileArrow.src} className={'opacity-0 max-w-[359px] max-h-[139px] self-end w-full flex-1 mr-10 hidden lg:block'} alt={'arrow'} />
        <div id={"project3"} className="flex group opacity-0 max-w-[160px] lg:max-w-[420px] lg:max-h-[257px] w-full h-full relative">
            <div className="group-active:opacity-0 transition-opacity absolute z-[1] flex flex-col max-w-[100px] lg:max-w-[250px] lg:w-full mt-1 ml-4 h-full justify-center items-center lg:items-center">
                <h3 className="text-dark_blue text-[15px] lg:text-[42px] uppercase font-valorax">Project</h3>
                <h3 className="text-dark_blue text-[15px] lg:text-[42px] uppercase text-center font-valorax">#3</h3>
            </div>

            <ProjectFileLeftMobile className={'group-active:stroke-[5px] active:-translate-x-4 transition-all lg:hidden'} />

            <ProjectFileRightMobile className={'group-active:stroke-[5px] -translate-x-5 group-active:translate-x-0 transition-transform pt-3 lg:hidden'} />

            <ProjectFileLeft className={'group-hover:stroke-[5px] max-w-[431px] max-h-[277px] group-hover:-translate-x-4 transition-all hidden lg:block'} />

            <ProjectFileRight className={'group-hover:stroke-[5px] max-w-[84px] max-h-[181px] -translate-x-10 group-hover:translate-x-0 transition-transform pt-5 hidden lg:block'} />

        </div>
    </div>

}

export default Project3;