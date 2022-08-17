import React from 'react';
import privateClass from './Footer.module.scss'
import Link from "./Link/Link";
import {Facebook, GitHub, LinkedIn, Telegram} from "../common/photos/photos";

const Footer = () => {
    return (
        <footer className={privateClass.footer}>
            <div className={privateClass.footer__block}>
                <Link classes={privateClass.img} link={"https://www.linkedin.com/in/dmitry-butakov-a079a722a/"}
                      img={LinkedIn}/>
                <Link classes={privateClass.img} link={"https://t.me/dmitryload"} img={Telegram}/>
                <Link classes={privateClass.img} link={"https://github.com/dmitryload"} img={GitHub}/>
                <Link classes={privateClass.img} link={"https://www.facebook.com/sportyounde/"} img={Facebook}/>
            </div>
            <div className={privateClass.copyright}>
                <span>2022 All content has protect to copyright</span>
            </div>
        </footer>
    );
};

export default Footer;
