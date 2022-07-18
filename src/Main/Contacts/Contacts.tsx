import React from 'react';
import privateClass from "./Contacts.module.scss"
import UniversalHeader from "../../common/components/UniversalHeader/UniversalHeader";
import commonClass from "../../common/classes/InnerContainer.module.css";
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
