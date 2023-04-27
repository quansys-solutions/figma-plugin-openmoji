const Azure = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width={24} height={23}>
        <defs>
            <linearGradient
                id="a"
                gradientUnits="userSpaceOnUse"
                x1={0.59}
                y1={0.074}
                x2={0.372}
                y2={1.038}
                gradientTransform="matrix(15 0 0 22.90625 .094 0)"
            >
                <stop
                    offset={0}
                    style={{
                        stopColor: "#114a8b",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#0669bc",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
            <linearGradient
                id="b"
                gradientUnits="userSpaceOnUse"
                x1={0.597}
                y1={0.523}
                x2={0.527}
                y2={0.549}
                gradientTransform="matrix(21 0 0 22.90625 .094 0)"
            >
                <stop
                    offset={0}
                    style={{
                        stopColor: "#000",
                        stopOpacity: 0.301961,
                    }}
                />
                <stop
                    offset={0.071}
                    style={{
                        stopColor: "#000",
                        stopOpacity: 0.2,
                    }}
                />
                <stop
                    offset={0.321}
                    style={{
                        stopColor: "#000",
                        stopOpacity: 0.101961,
                    }}
                />
                <stop
                    offset={0.623}
                    style={{
                        stopColor: "#000",
                        stopOpacity: 0.101961,
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#000",
                        stopOpacity: 0,
                    }}
                />
            </linearGradient>
            <linearGradient
                id="c"
                gradientUnits="userSpaceOnUse"
                x1={0.373}
                y1={0.046}
                x2={0.625}
                y2={1}
                gradientTransform="matrix(15.84375 0 0 22.90625 8.063 0)"
            >
                <stop
                    offset={0}
                    style={{
                        stopColor: "#3ccbf4",
                        stopOpacity: 1,
                    }}
                />
                <stop
                    offset={1}
                    style={{
                        stopColor: "#2892df",
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
        </defs>
        <path
            style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "url(#a)",
            }}
            d="M7.969 0h7.125L7.688 22.145c-.094.476-.563.761-1.032.761H1.125a1.13 1.13 0 0 1-.898-.496 1.155 1.155 0 0 1-.133-1.027L6.937.762C7.125.285 7.5 0 7.97 0Zm0 0"
        />
        <path
            style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "#0078d4",
                fillOpacity: 1,
            }}
            d="M18.281 14.828H7.031a.56.56 0 0 0-.414.39.575.575 0 0 0 .133.56l7.219 6.843c.187.188.469.285.75.285h6.375Zm0 0"
        />
        <path
            style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "url(#b)",
            }}
            d="M7.969 0C7.5 0 7.03.285 6.937.762L.095 21.382c-.121.345-.07.727.133 1.028.203.3.539.485.898.496h5.719c.375-.097.75-.383.843-.761l1.407-4.086 4.875 4.562c.187.188.469.285.75.285h6.375l-2.813-8.078h-8.156L15.094 0Zm0 0"
        />
        <path
            style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "url(#c)",
            }}
            d="M17.063.762C16.875.285 16.5 0 16.03 0H8.063C8.53 0 9 .285 9.187.762l6.844 20.62c.121.345.07.727-.133 1.028-.203.3-.539.485-.898.496h7.875a1.13 1.13 0 0 0 .898-.496c.204-.3.254-.683.133-1.027Zm0 0"
        />
    </svg>
};

export default Azure;
