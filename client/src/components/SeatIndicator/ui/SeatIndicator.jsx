import React from 'react';
import classes from './SeatIndicator.module.css';
const SeatIndicator = () => {
    return (
            <div className={classes.IndicatorList}>
                <div className={classes.IndicatorWrapper}>
                    <div className={[classes.Indicator, classes.Free].join(' ')}></div>
                    <p>
                        Free
                    </p>
                </div>
                <div className={classes.IndicatorWrapper}>
                    <div className={[classes.Indicator, classes.Busy].join(' ')}></div>
                    <p>
                        Busy
                    </p>
                </div>
            </div>
    );
};

export default SeatIndicator;