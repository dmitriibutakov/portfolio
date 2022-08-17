import React from 'react';
import privateClass from "./UniversalBtn.module.scss"

type UniversalBtnType = {
    text: string
    type?: "button" | "submit" | "reset"
}
const UniversalBtn = (props: UniversalBtnType) => {
    return (
        <button type={props.type} className={privateClass.btn}>{props.text}</button>
    );
};

export default UniversalBtn;
