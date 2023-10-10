import React from 'react';

import classes from './Radio.module.css';
const Radio = ({id, value, name, checked, setTime}) => {
    return (
        <div className={classes.Container}>
            <input defaultChecked={checked} type="radio" id={id} value={value} name={name} onInput={() => setTime(id)}/>
            <label htmlFor={id}>{value}</label>
        </div>
    );
};

export default Radio;