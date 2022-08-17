import React from 'react';
import privateClass from "./Work.module.scss"
import commonClass from "../../common/classes/InnerContainer.module.css"
import Image from "./Image";
import UniversalBtn from "../../common/components/UniversalBtn/UniversalBtn";

type WorkType = {
    img: string
    title: string
    about: string
    link?: string
}
const Work:React.FC<WorkType> = ({img, about, title, link}) => {
    return (
        <div className={commonClass.container}>
            <div className={privateClass.work}>
                <div className={privateClass.work__img}>
                    <Image img={img}/>
                    <div className={privateClass.overlay}></div>
                    <div className={privateClass.btn__block}>
                        <UniversalBtn link={link} text={"link"}/>
                    </div>
                </div>
                <h4 className={privateClass.title}>{title}</h4>
                <p className={privateClass.desc}>{about}</p>
            </div>
        </div>
    );
};

export default Work;
