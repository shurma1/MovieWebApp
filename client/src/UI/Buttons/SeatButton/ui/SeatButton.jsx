import React from 'react';

import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app';

import classes from './SeatButton.module.css';

const SeatButton = (props) => {
    const { seat, onClick, activeButtons, disabled } = props;
    const buttonId = (seat.row-1)*7 + (seat.seat-1);
    const isActive = activeButtons.some((button) => button.id === buttonId);

    const buttonClass = isActive
        ? classes.active
        : (seat.state === 'free')
            ? classes.free
            : (seat.state === 'busy')
                ?  classes.busy
                : classes.ghost;

    const [,notificationOccurred] = useHapticFeedback();

    return (
        <button
            className={[classes.SeatButton, buttonClass].join(' ')}
            onClick={
                () => (seat.state === 'busy')
                    ? notificationOccurred('error')
                    : onClick(buttonId)
            }>
            {isActive &&
                <p>{`${seat.rowMarker}${seat.seat}`}</p>
            }
        </button>
    );
};

export default SeatButton;
