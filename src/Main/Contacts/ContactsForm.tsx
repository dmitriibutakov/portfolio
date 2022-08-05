import React from 'react';
import privateClass from "./Contacts.module.scss";
import commonClass from "../../common/classes/InnerContainer.module.css";
import UniversalBtn from "../../common/components/UniversalBtn/UniversalBtn";

const ContactsForm = () => {
    return (
        <form action="post" className={privateClass.form}>
            <div className={commonClass.container}>
                <input className={privateClass.input__form} type="mail" placeholder={"email"}/>
            </div>
            <div className={commonClass.container}>
                <input className={privateClass.input__form} type="text" placeholder={"number"}/>
            </div>
            <div className={commonClass.container}>
                <textarea className={privateClass.textarea__form} placeholder={"addition"}/>
            </div>
            <div className={privateClass.btn__block}>
            <UniversalBtn text={"send"}/>
            </div>
        </form>
    );
};

export default ContactsForm;
