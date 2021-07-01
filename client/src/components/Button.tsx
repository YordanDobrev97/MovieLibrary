import React from "react";

interface BtnProps {
    text: string;
    border: string;
    br: string;
    bgc: string;
    c: string;
    m: string;
    p: string;
    fz: string,
    onClick: () => void;
}

const Button: React.FC<BtnProps> = ({
    text,
    border,
    br,
    m,
    p,
    fz,
    bgc,
    c,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: bgc,
                color: c,
                border,
                borderRadius: br,
                margin: m,
                padding: p,
                fontSize: fz,
            }}
        >
            {text}
        </button>
    );
}

export default Button;