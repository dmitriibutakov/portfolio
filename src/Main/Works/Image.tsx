import React from 'react';
import privateClass from "./Work.module.scss";
type ImageType = {
    img: string
}
const Image:React.FC<ImageType> = ({img}) => {
    return (
        <div className={privateClass.black}>
        <div
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                maxWidth: "500px",
                height: "300px",
                borderRadius: "10px"
            }}
        />
        </div>
    );
};

export default Image;
