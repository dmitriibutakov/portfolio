import React from 'react';
import privateClass from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={privateClass.footer}>
            <div className={privateClass.footer__block}>
                <div className={privateClass.img}></div>
                <div className={privateClass.img}></div>
                <div className={privateClass.img}></div>
                <div className={privateClass.img}></div>
            </div>
            <div className={privateClass.copyright}>
                <span>2022 All content has protect to copyright</span>
            </div>
        </footer>
    );
};

export default Footer;
