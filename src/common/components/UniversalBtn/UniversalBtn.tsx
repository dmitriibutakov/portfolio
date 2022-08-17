import React from 'react';
import privateClass from "./UniversalBtn.module.scss"

type UniversalBtnType = {
    text: string
    type?: "button" | "submit" | "reset"
    link?: string
}
const UniversalBtn = (props: UniversalBtnType) => {
    return (
        <button type={props.type} onClick={()=>props.link} className={privateClass.btn}>{props.text}</button>
    );
};

export default UniversalBtn;
