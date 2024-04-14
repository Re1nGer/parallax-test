const SideProjectNextBtn = ({ onClick, curIdx }) => {
    return <button
        onClick={onClick}
        className="max-w-[107px] rounded-3xl px-[32px] py-[.2rem] my-[2rem] mx-auto border-dark_blue border-2">
        <svg className={`max-w-[37px] ${curIdx === 1 ? "rotate-180" : ""}`} width="50" height="38"
             viewBox="0 0 50 38" fill="none"
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
    </button>;
}

export default SideProjectNextBtn;