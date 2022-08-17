import React from 'react';
import privateClass from "./UniversalTitle.module.scss";

type UniversalHeaderType = {
    title: string
}
const UniversalTitle = (props: UniversalHeaderType) => {
    return (
        <h2 className={privateClass.title}>{props.title}</h2>
    );
};

export default UniversalTitle;
