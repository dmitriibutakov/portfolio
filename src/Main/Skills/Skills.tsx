import React from 'react';
import privateClass from "./Skills.module.scss"
import Skill from "./Skill/Skill";
import UniversalTitle from "../../common/components/UniversalTitle/UniversalTitle";
import { Fade } from '../../common/components/Animations';

const Skills = () => {
    return (
        <Fade delay={500} top>
        <section id={"skills"} className={privateClass.skills}>
            <UniversalTitle title={"My skills"}/>
            <div className={privateClass.skills__block}>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
        </section>
        </Fade>
    );
};

export default Skills;
