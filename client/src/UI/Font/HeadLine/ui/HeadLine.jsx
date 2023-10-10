import React from 'react';
import classes from './HeadLine.module.css';
const HeadLine = ({children}) => {
    return (
        <h1 className={classes.HeadLine}>{children}</h1>
    );
};

export default HeadLine;