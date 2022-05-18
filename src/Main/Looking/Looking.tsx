import React from 'react';
import privateClass from "./Looking.module.css"
import UniversalHeader from "../../common/components/UniversalHeader/UniversalHeader";
import UniversalBtn from "../../common/components/UniversalBtn/UniversalBtn";

const Looking = () => {
    return (
        <section className={privateClass.looking}>
            <UniversalHeader title={"I am considering remote work"}/>
            <UniversalBtn text={"Hire me"}/>
        </section>
    );
};

export default Looking;
