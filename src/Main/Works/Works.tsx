import React from 'react';
import privateClass from "./Works.module.scss"
import UniversalTitle from "../../common/components/UniversalTitle/UniversalTitle";
import Work from "./Work";
import { Fade } from '../../common/components/Animations';
import {cardsImg, todoImg, socialImg} from "../../common/photos/photos";

const Works = () => {
    return (

        <section id={"portfolio"} className={privateClass.works}>
            <Fade delay={500} top>
            <UniversalTitle title={"My works"}/>
            <div className={privateClass.works__block}>
                <div className={privateClass.works__item}>
                    <Work link={"https://training-cards.vercel.app"} title={"training-cards"} about={"Application for training your skills in knowledge of anything, based on React/Redux-toolkit/TypeScript"} img={cardsImg}/>
                </div>
                <div className={privateClass.works__item}>
                    <Work link={"https://guests-social-network.vercel.app"} title={"social-network"} about={"Social App with working interface with requests in users and profile page, register/login flow, React/Redux/TypeScript"} img={socialImg}/>
                </div>
                <div className={privateClass.works__item}>
                    <Work link={"https://todo-time-mui.vercel.app"} title={"Todo-list"} about={"Project build-in React with typescript for better compatibility. Using Redux, Material UI, and other libraries"} img={todoImg}/>
                </div>
            </div>
            </Fade>
        </section>

    );
};

export default Works;
