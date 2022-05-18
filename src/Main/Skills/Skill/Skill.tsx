import React from 'react';
import privateClass from "./Skill.module.css"
import commonClass from "../../../common/classes/InnerContainer.module.css";

const Skill = () => {
    return (
        <div className={commonClass.container}>
            <div className={privateClass.skill}>
                <div className={privateClass.skill__icon}>
                    <img src="https://miro.medium.com/max/1200/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg" alt="React"/>
                </div>
                <h3 className={privateClass.skill__name}>React</h3>
                <p className={privateClass.skill__desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi, iste?</p>
            </div>
        </div>
    );
};

export default Skill;
