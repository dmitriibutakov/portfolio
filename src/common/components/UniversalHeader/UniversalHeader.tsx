import React from 'react';
import privateClass from "./UniversalHeader.module.css";

type UniversalHeaderType = {
    title: string
}
const UniversalHeader = (props: UniversalHeaderType) => {
    return (
        <h2 className={privateClass.title}>{props.title}</h2>
    );
};

export default UniversalHeader;
