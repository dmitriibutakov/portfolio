import React from 'react';
import privateClass from "./Main.module.css"
import About from "./About/About";
import globalClass from "../common/classes/generalContainer.module.css";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Looking from "./Looking/Looking";
import Contacts from "./Contacts/Contacts";

const Main = () => {
    return (
        <main className={privateClass.main}>
                <About/>
                <Skills/>
                <Works/>
                <Looking/>
                <Contacts/>
        </main>
    );
};

export default Main;
