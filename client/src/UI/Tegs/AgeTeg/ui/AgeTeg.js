import React from 'react';
import classes from './AgeTeg.module.css';
const AgeTeg = ({children}) => {
    return (
        <div className={classes.AgeTeg}>
            {children}
        </div>
    );
};

export default AgeTeg;