import React from 'react';
import classes from './MovieList.module.css';
const MovieList = ({children}) => {
    return (
        <div className={classes.MovieList}>
            {children}
        </div>
    );
};

export default MovieList;