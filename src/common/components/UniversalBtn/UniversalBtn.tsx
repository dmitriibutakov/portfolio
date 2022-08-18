import React from 'react';
import privateClass from "./UniversalBtn.module.scss"

type UniversalBtnType = {
    text: string
    type?: "button" | "submit" | "reset"
    link?: string
    disabled?: boolean
}
const UniversalBtn:React.FC<UniversalBtnType>  = ({text, type, link, disabled}) => {
    return (
        <>
        {link ?
                <a className={privateClass.btn} href={link}>{text}</a> :
                <button disabled={disabled} type={type} className={privateClass.btn}>{text}</button>}
        </>

    );
};

export default UniversalBtn;
