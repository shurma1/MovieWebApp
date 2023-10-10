import React from 'react';
import classes from './SeatSelector.module.css';
import {SeatButton} from '../../../UI/Buttons';
const SeatSelector = ({seats, activeButtons, setActiveButtons}) => {
    const handleClick = (buttonId) => {
        const index = activeButtons.findIndex((button) => button.id === buttonId);
        if (index !== -1) {
            setActiveButtons((prev) => prev.filter((button) => button.id !== buttonId));
        } else {
            setActiveButtons((prev) => [{ id: buttonId, ...seats[index]}, ...prev]);
        }
    };


    return (
            <div className={classes.SeatSelector}>
                {seats.seats.map((seat) => (
                    <SeatButton
                        key={`${seat.row}${seat.seat}`}
                        seat={seat}
                        onClick={handleClick}
                        activeButtons={activeButtons}
                    />
                ))}
            </div>
    );
};

export default SeatSelector;