import React from 'react';
import privateClass from "./Contacts.module.scss"
import UniversalTitle from "../../common/components/UniversalTitle/UniversalTitle";
import commonClass from "../../common/classes/InnerContainer.module.css";
import ContactsForm from "./ContactsForm";
import {Fade} from '../../common/components/Animations';

const Contacts = () => {
    return (
        <Fade delay={500} top>
        <section id={"contacts"} className={privateClass.contacts}>
            <UniversalTitle title={"Contact me"}/>
            <div className={privateClass.contacts__block}>
                <div className={`${commonClass.container} ${privateClass.container}`}>
                    <ContactsForm/>
                </div>
            </div>
        </section>
        </Fade>
    );
};

export default Contacts;
