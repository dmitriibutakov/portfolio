import React from 'react';
import privateClass from "./Main.module.scss"
import About from "./About/About";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Contacts from "./Contacts/Contacts";

const Main = () => {
    return (
        <main className={privateClass.main}>
                <About/>
                <Skills/>
                <Works/>
                <Contacts/>
        </main>
    );
};

export default Main;
