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
            <div className={globalClass.container}>
                <About/>
            </div>
            <div className={globalClass.container}>
                <Skills/>
            </div>
            <div className={globalClass.container}>
                <Works/>
            </div>
            <div className={globalClass.container}>
                <Looking/>
            </div>
            <div className={globalClass.container}>
                <Contacts/>
            </div>
        </main>
    );
};

export default Main;
