import React from 'react';
import privateClass from "./About.module.css"
import commonClass from "../../common/classes/InnerContainer.module.css";
import ava from "../../common/photos/ava.png"

const About = () => {
    return (
        <section className={privateClass.about}>
                <div className={commonClass.container}>
                    <div className={privateClass.greetings}>Hello,</div>
                    <h1 className={privateClass.name}> My name is Dmitry Butakov</h1>
                    <p>
                        and I'm frontend developer
                    </p>
                </div>

                <div className={privateClass.about__avatar}>
                    <img
                        src={ava}
                        alt="avatar"/>
                </div>
        </section>
    );
};

export default About;
