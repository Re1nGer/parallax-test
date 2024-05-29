const SideProjectIcons = ({ showLive = true }) => {
    return <div className={"flex items-baseline gap-[.5rem]"}>
        { showLive ? (
            <svg width="81" height="82" viewBox="0 0 81 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_405_52)">
                    <path
                        d="M30.5056 46.1538H18.641V34.3712H21.6933V43.1015H27.4369V41.0502H30.5056V46.1538ZM35.2194 46.1538H32.1506V34.3712H35.2194V46.1538ZM48.7596 46.1538H42.9012L36.8622 40.1312V34.3712H39.9309V38.8512L44.1647 43.1015H45.7073V34.3712H48.7596V46.1538ZM61.9567 46.1538H50.4038V40.4102L56.4428 34.3712H61.9567V37.44H57.7064L56.328 38.8184H61.1033V41.8871H53.4726V43.1015H61.9567V46.1538Z"
                        fill="#97E9FF" />
                </g>
                <g filter="url(#filter1_d_405_52)">
                    <circle cx="40.7949" cy="41" r="31.5" stroke="#B9F0FF" shapeRendering="crispEdges"/>
                </g>
                <defs>
                    <filter id="filter0_d_405_52" x="10.436" y="26.1662" width="59.7259" height="28.1927"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="4.10256"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.725 0 0 0 0 0.941071 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_52"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_52" result="shape"/>
                    </filter>
                    <filter id="filter1_d_405_52" x="0.589793" y="0.794871" width="80.4103" height="80.4103"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                       result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="4.10256"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.725 0 0 0 0 0.941071 0 0 0 0 1 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_52"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_52" result="shape"/>
                    </filter>
                </defs>
            </svg>
        ) : null }
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 64 64" width="81px"
             height="81px">
            <path fill="#97E9FF" d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/></svg>
    </div>;
}

export default SideProjectIcons;