import React from 'react';
import privateClass from "./Contacts.module.css"
import UniversalHeader from "../../common/components/UniversalHeader/UniversalHeader";
import commonClass from "../../common/classes/InnerContainer.module.css";
import UniversalBtn from "../../common/components/UniversalBtn/UniversalBtn";

const Contacts = () => {
    return (
        <section className={privateClass.contacts}>
            <UniversalHeader title={"Contact me"}/>
            <div className={`${commonClass.container} ${privateClass.container}`}>
                <form action="post" className={privateClass.form}>
                    <div className={commonClass.container}>
                        <input className={privateClass.input__form} type="mail" placeholder={"email"}/>
                    </div>
                    <div className={commonClass.container}>
                    <input className={privateClass.input__form} type="number" placeholder={"number"}/>
                    </div>
                    <div className={commonClass.container}>
                    <textarea className={privateClass.texarea__form} placeholder={"addition"}/>
                    </div>
                </form>
            </div>
            <UniversalBtn text={"send"}/>
        </section>
    );
};

export default Contacts;
