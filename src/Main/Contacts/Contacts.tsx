import React from 'react';
import privateClass from "./Contacts.module.scss"
import UniversalTitle from "../../common/components/UniversalTitle/UniversalTitle";
import commonClass from "../../common/classes/InnerContainer.module.css";
import ContactsForm from "./ContactsForm";
import {Fade} from '../../common/components/Animations';

const Contacts = () => {
    return (
        <section id={"contacts"} className={privateClass.contacts}>
            <Fade delay={500} top>
                <UniversalTitle title={"Contact me"}/>
                <div className={privateClass.contacts__block}>
                    <div className={`${commonClass.container} ${privateClass.container}`}>
                        <ContactsForm/>
                    </div>
                </div>
            </Fade>
        </section>

    );
};

export default Contacts;
