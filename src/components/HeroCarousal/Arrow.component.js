import React from "react";

export const NextArrow = (props) => {
    return (
        <>
            <div 
                className={props.className}
                style={{ ...props.style, display: "block", width: "20px", height: "20px", backgroundColor: "gray"}}
                onClick = {props.onClick}
            />
        </>
    );
};

export const PrevArrow = (props) => {
    return (
        <>
            <div 
                className={props.className}
                style={{ ...props.style, backgroundColor: "black"}}
                onClick = {props.onClick}
            />
        </>
    );
};

