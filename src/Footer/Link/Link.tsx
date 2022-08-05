import React from 'react';

type LinkType = {
    link: string
    img: string
    classes: string
}
const Link:React.FC<LinkType> = ({link, img, classes}) => {
    return (
            <a href={link}><img className={classes} src={img} alt="icon"/></a>
    );
};

export default Link;