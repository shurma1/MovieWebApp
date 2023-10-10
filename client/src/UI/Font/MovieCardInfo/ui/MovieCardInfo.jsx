import React from 'react';
import classes from './MovieCardInfo.module.css';
const MovieCardInfo = ({children}) => {
    return (
        <p className={classes.MovieCardInfo}>{children}</p>
    );
};

export default MovieCardInfo;