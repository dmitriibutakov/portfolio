import React from 'react';
import privateClass from "./Skills.module.scss"
import Skill from "./Skill/Skill";
import UniversalTitle from "../../common/components/UniversalTitle/UniversalTitle";
import {Fade} from '../../common/components/Animations';
import {
    browserImg,
    gitImg, postmanImg,
    reactImg,
    reduxImg,
    sassImg,
    storybookImg,
    typescriptImg
} from "../../common/photos/photos";

const Skills = () => {
    return (
        <section id={"skills"} className={privateClass.skills}>
            <Fade delay={500} top>
                <UniversalTitle title={"My skills"}/>
                <div className={privateClass.skills__block}>
                    <Skill img={reactImg} header={"React"} about={"Dividing interface into components according to the rules of OOP and SOLID principles"}/>
                    <Skill img={reduxImg} header={"Redux"} about={"Managing changes of the data, Flux circulation"}/>
                    <Skill img={typescriptImg} header={"Typescript"} about={"Typification of data for simplify writing and suggesting code"}/>
                    <Skill img={gitImg} header={"Git"} about={"Integrate changes from divergent branches. Merge pull/request"}/>
                    <Skill img={browserImg} header={"Rest API"} about={"Making requests on HTTP and HTTPS protocols"}/>
                    <Skill img={sassImg} header={"Sass"} about={"Preprocessor for the style components"}/>
                    <Skill img={storybookImg} header={"Storybook"} about={"Tests of components and snapshot testing"}/>
                    <Skill img={postmanImg} header={"Postman"} about={"Testing in requests on the server"}/>
                </div>
            </Fade>
        </section>
    );
};

export default Skills;
