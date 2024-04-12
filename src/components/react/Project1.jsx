const Project1 = ({ onClick }) => {
    return <div className="flex justify-end w-full" onClick={onClick}>
        <div className="flex group max-w-[160px] h-[88px] relative">
            <div
                className="group-active:opacity-0 transition-opacity absolute z-[1] flex flex-col max-w-[100px] mt-2 ml-4 h-full justify-center items-center">
                <h3 className="text-dark_blue text-[15px] uppercase font-valorax">Project</h3>
                <h3 className="text-dark_blue text-[15px] font-bold font-valorax">#1</h3>
            </div>

            <svg className="active:stroke-[5px] active:-translate-x-4 transition-all relative" width="150" height="96"
                 viewBox="0 0 150 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_138_27)">
                    <path
                        d="M8.82424 11.5809L4 16.5775L4.17229 80.6709L8.30735 85.1506H68.7826L76.1913 92.7315H140.802L145.798 88.0796V69.8164L121.677 46.0398V11.9255L114.268 4H47.935L40.5264 11.5809H8.82424Z"
                        fill="#232323" fillOpacity="0.8" shapeRendering="crispEdges"/>
                    <path
                        d="M8.82424 11.5809L4 16.5775L4.17229 80.6709L8.30735 85.1506H68.7826L76.1913 92.7315H140.802L145.798 88.0796V69.8164L121.677 46.0398V11.9255L114.268 4H47.935L40.5264 11.5809H8.82424Z"
                        stroke="#97E9FF" shapeRendering="crispEdges"/>
                </g>
                <defs>
                    <filter id="filter0_d_138_27" x="0.742805" y="0.743294" width="148.312" height="95.2449"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="1.37835"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.725 0 0 0 0 0.941071 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_27"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_27" result="shape"/>
                    </filter>
                </defs>
            </svg>
            <svg
                className="group-active:stroke-[5px] -translate-x-5 group-active:translate-x-0 transition-transform pt-3"
                width="30" height="62" viewBox="0 0 30 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_138_26)">
                    <path d="M21.5211 3.40881H3.60254V36.4893L26.0008 58.0261V8.06076L21.5211 3.40881Z" fill="#232323"
                          fillOpacity="0.8" shapeRendering="crispEdges"/>
                    <path d="M21.5211 3.40881H3.60254V36.4893L26.0008 58.0261V8.06076L21.5211 3.40881Z" stroke="#97E9FF"
                          shapeRendering="crispEdges"/>
                </g>
                <defs>
                    <filter id="filter0_d_138_26" x="0.345833" y="0.152107" width="28.9116" height="61.805"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="1.37835"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.725 0 0 0 0 0.941071 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_26"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_26" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
    </div>
}

export default Project1;