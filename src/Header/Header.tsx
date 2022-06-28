import React, {useState} from 'react';
import privateClass from "./Header.module.css"
import commonClass from "../common/classes/InnerContainer.module.css";

const Header = () => {
    const [active, setActive] = useState<boolean>(false)
    const changeClass = () => setActive(!active)
    const setClassBurger =  active ? privateClass.burger__active : privateClass.burger
    const setClassHeader = active ? privateClass.header : privateClass.header__hidden
    return (
        <header className={setClassHeader}>
            <div onClick={changeClass} className={setClassBurger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
                <nav className={privateClass.navigate}>
                    <a className={privateClass.link} href="#">Main</a>
                    <a className={privateClass.link} href="#">Skills</a>
                    <a className={privateClass.link} href="#">Portfolio</a>
                    <a className={privateClass.link} href="#">Contacts</a>
                </nav>
        </header>
    );
};

export default Header;
