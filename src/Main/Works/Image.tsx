import React from 'react';
type ImageType = {
    img: string
}
const Image:React.FC<ImageType> = ({img}) => {
    return (
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
    );
};

export default Image;
