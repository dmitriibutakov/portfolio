import React from 'react';
import privateClass from "./UniversalHeader.module.scss";

type UniversalHeaderType = {
    title: string
}
const UniversalHeader = (props: UniversalHeaderType) => {
    return (
        <h2 className={privateClass.title}>{props.title}</h2>
    );
};

export default UniversalHeader;
