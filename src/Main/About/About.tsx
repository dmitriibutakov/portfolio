import React from 'react';
import privateClass from "./About.module.css"
import commonClass from "../../common/classes/InnerContainer.module.css";

const About = () => {
    return (
        <section className={privateClass.about}>
            <div className={privateClass.about__info}>
                <div className={commonClass.container}>
                    <div className={privateClass.greetings}>Hello,</div>
                    <h1 className={privateClass.name}> My name is Dmitry Butakov</h1>
                    <p className={privateClass.about__text}>
                        and I'm frontend developer
                    </p>
                </div>
            </div>

            <div className={privateClass.about__avatar}>
                <img
                    src="https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart?format=750w"
                    alt="avatar"/>
            </div>
        </section>
    );
};

export default About;
