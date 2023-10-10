import React from 'react';
import classes from './MovieButton.module.css'
const MovieButton = ({children, ...props}) => {
    return (
        <button className={classes.MovieButton} {...props}>
            {children}
        </button>
    );
};

export default MovieButton;