import React from 'react';
import privateClass from "./Contacts.module.css"
import UniversalHeader from "../../common/components/UniversalHeader/UniversalHeader";
import commonClass from "../../common/classes/InnerContainer.module.css";
import UniversalBtn from "../../common/components/UniversalBtn/UniversalBtn";
import ContactsForm from "./ContactsForm";

const Contacts = () => {
    return (
        <section className={privateClass.contacts}>
            <UniversalHeader title={"Contact me"}/>
            <div className={privateClass.contacts__block}>
                <div className={`${commonClass.container} ${privateClass.container}`}>
                    <ContactsForm/>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
