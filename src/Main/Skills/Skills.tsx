import React from 'react';
import privateClass from "./Skills.module.css"
import Skill from "./Skill/Skill";
import UniversalHeader from "../../common/components/UniversalHeader/UniversalHeader";

const Skills = () => {
    return (
        <section className={privateClass.skills}>
            <UniversalHeader title={"My skills"}/>
            <div className={privateClass.skills__block}>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
        </section>
    );
};

export default Skills;
