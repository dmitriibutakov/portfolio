import React from 'react';
import privateClass from "./Works.module.scss"
import UniversalHeader from "../../common/components/UniversalHeader/UniversalHeader";
import Work from "./Work";
import { Fade } from '../../common/components/Animations';

const Works = () => {
    const img1 = "https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=20&m=1145618475&s=612x612&w=0&h=_mC6OZt_eWENYUAZz3tLCBTU23uvx5beulDEZHFLsxI="
    const img2 = "https://media.istockphoto.com/photos/aerial-view-of-apollo-statue-place-massena-nice-mediterranean-sea-picture-id529477147?k=20&m=529477147&s=612x612&w=0&h=r3h8zFs59tJdV9avl2uhm-SyyxgkNqXy966YUfrCDr0="
    return (
        <Fade delay={500} top>
        <section className={privateClass.works}>
            <UniversalHeader title={"My works"}/>
            <div className={privateClass.works__block}>
                <div className={privateClass.works__item}>
                    <Work img={img1}/>
                </div>
                <div className={privateClass.works__item}>
                    <Work img={img2}/>
                </div>
            </div>
        </section>
        </Fade>
    );
};

export default Works;
