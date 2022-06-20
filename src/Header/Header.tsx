import React from 'react';
import privateClass from "./Header.module.css"
import commonClass from "../common/classes/InnerContainer.module.css";

const Header = () => {
    return (
        <header className={privateClass.header}>
            <div className={commonClass.container}>
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
