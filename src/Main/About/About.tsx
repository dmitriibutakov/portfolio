import React from 'react';
import privateClass from "./About.module.scss"
import commonClass from "../../common/classes/InnerContainer.module.css";
import ReactTypingEffect from "react-typing-effect";
import { Fade } from '../../common/components/Animations';
import {avatarImg} from "../../common/photos/photos";

const About = () => {
    return (
        <Fade delay={300} top>
            <section id={"about"} className={privateClass.about}>
                <div className={commonClass.container}>
                    <div className={privateClass.greet__container}>
                        <div className={privateClass.greetings}>Hello,</div>
                        <ReactTypingEffect typingDelay={.2} speed={120} eraseSpeed={12}
                            text={"My name is Dmitry Butakov"}
                            cursorClassName={privateClass.name}/>
                        <p>
                            and I'm frontend developer
                        </p>
                    </div>
                </div>
                <div className={privateClass.about__avatar}>
                    <img
                        src={avatarImg}
                        alt="avatar"/>
                </div>
            </section>
        </Fade>
    );
};

export default About;
