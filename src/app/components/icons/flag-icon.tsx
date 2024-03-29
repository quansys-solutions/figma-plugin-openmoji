const FLAG = () => {
    return (
        <svg id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
            <g id="color">
                <rect
                    x="9"
                    y="20"
                    width="22"
                    height="15"
                    transform="translate(-9.9052 11.3157) rotate(-25.551)"
                    fill="#fff"
                />
                <rect
                    x="40.8409"
                    y="20"
                    width="22"
                    height="15"
                    transform="translate(86.7507 74.6703) rotate(-154.449)"
                    fill="#fff"
                />
                <circle cx="20" cy="27.5" r="2.5" />
                <circle cx="51.841" cy="27.5" r="2.5" />
            </g>
            <g id="line">
                <g id="Flag">
                    <line
                        x1="46"
                        x2="27"
                        y1="56"
                        y2="16"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                    <rect
                        x="9"
                        y="20"
                        width="22"
                        height="15"
                        transform="translate(-9.9052 11.3157) rotate(-25.551)"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                    <line
                        x1="25.8409"
                        x2="44.8409"
                        y1="56"
                        y2="16"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                    <rect
                        x="40.8409"
                        y="20"
                        width="22"
                        height="15"
                        transform="translate(86.7507 74.6703) rotate(-154.449)"
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                </g>
            </g>
            <g id="color-foreground">
                <circle cx="20" cy="27.5" r="2.5" fill="#d22f27" />
                <circle cx="51.8409" cy="27.5" r="2.5" fill="#d22f27" />
            </g>
        </svg>
    );
};

export default FLAG;
