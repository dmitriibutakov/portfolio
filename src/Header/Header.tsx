import React from 'react';
import globalClass from "../common/classes/generalContainer.module.css"
import privateClass from "./Header.module.css"

const Header = () => {
    return (
        <header className={privateClass.header}>
            <div className={globalClass.container}>
                <nav className={privateClass.navigate}>
                    <a className={privateClass.link} href="#">Main</a>
                    <a className={privateClass.link} href="#">Skills</a>
                    <a className={privateClass.link} href="#">Portfolio</a>
                    <a className={privateClass.link} href="#">Contacts</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
