import React, {useState} from 'react';
import privateClass from "./Skill.module.scss"
import commonClass from "../../../common/classes/InnerContainer.module.css";

type SkillPropsType = {
    img: string
    header:string
    about: string
}
const Skill:React.FC<SkillPropsType> = ({about,header,img}) => {
    const [show, setShow] = useState(false)
    return (

        <div className={commonClass.container}>
            {show ?
                <div className={privateClass.skill_show}>
                    <p className={privateClass.skill__desc}>{about}</p>
                    <button className={privateClass.btn} onClick={() => setShow(false)}>{show ? "less" : "more"}</button>
                </div> :
                <div className={privateClass.skill}>
                    <div className={privateClass.skill__icon}>
                        <img src={img} alt="logo"/>
                    </div>
                    <h3 className={privateClass.skill__name}>{header}</h3>
                    <button className={privateClass.btn} onClick={() => setShow(true)}>{show ? "less" : "more"}</button>
                </div>
            }
        </div>
    );
};

export default Skill;
