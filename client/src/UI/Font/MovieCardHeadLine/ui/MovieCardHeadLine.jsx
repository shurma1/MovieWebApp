import React from 'react';
import classes from './MovieCardHeadLine.module.css';
const MovieCardHeadLine = ({children}) => {
    return (
        <p className={classes.MovieCardHeadLine}>{children}</p>
    );
};

export default MovieCardHeadLine;