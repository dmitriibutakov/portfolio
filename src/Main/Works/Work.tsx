import React from 'react';
import privateClass from "./Work.module.scss"
import commonClass from "../../common/classes/InnerContainer.module.css"
import Image from "./Image";
import UniversalBtn from "../../common/components/UniversalBtn/UniversalBtn";

type WorkType = {
    img: string
}
const Work = (props: WorkType) => {
    return (
        <div className={commonClass.container}>
            <div className={privateClass.work}>
                <div className={privateClass.work__img}>
                    <Image img={props.img}/>
                    <div className={privateClass.overlay}></div>
                    <div className={privateClass.btn__block}>
                        <UniversalBtn text={"link"}/>
                    </div>
                </div>
                <h4 className={privateClass.title}>Name project</h4>
                <p className={privateClass.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ullam.</p>
            </div>
        </div>
    );
};

export default Work;
