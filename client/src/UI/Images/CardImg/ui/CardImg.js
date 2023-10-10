import React, {useState} from 'react';
import classes from "./CardImg.module.css";
const CardImg = ({src}) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <div className={[classes.CardImg, (isLoading)? classes.loading :classes.CardVisible].join(' ')}>
            <img src={src} onLoad={() => setLoading(false)}/>
        </div>
    );
};

export default CardImg;