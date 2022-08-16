import React from 'react';
import privateClass from "./Skills.module.scss"
import Skill from "./Skill/Skill";
import UniversalHeader from "../../common/components/UniversalHeader/UniversalHeader";
import { Fade } from '../../common/components/Animations';

const Skills = () => {
    return (
        <Fade delay={500} top>
        <section id={"skills"} className={privateClass.skills}>
            <UniversalHeader title={"My skills"}/>
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
