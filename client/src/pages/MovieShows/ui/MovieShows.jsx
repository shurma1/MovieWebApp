import React, {useCallback, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import {MainButton, useWebApp} from "@vkruglikov/react-telegram-web-app";

import {HeadLine} from '../../../UI/Font/HeadLine';
import {Radio} from '../../../UI/Inputs/Radio'

import {SeatSelector} from '../../../components/SeatSelector';
import {cinemaHallData} from "../../../constants";
import {SeatIndicator} from '../../../components/SeatIndicator';

import classes from './MovieShows.module.css';

const MovieShows = () => {
    const {state} = useLocation();
    const [time, setTime] = useState(0);
    const [activeButtons, setActiveButtons] = useState([]);
    const telegramWebApp = useWebApp();


    const onSendData = useCallback(() => {
        const data =  {
            title: state.title,
            ...cinemaHallData[time],
            seats: activeButtons.map(
                ({id}) => cinemaHallData[time].seats[id]
            )
        }

        telegramWebApp.sendData(JSON.stringify(data));
    }, [time, activeButtons]);

    useEffect(() => {
        telegramWebApp.onEvent('mainButtonClicked', onSendData)
        return () => {
            telegramWebApp.offEvent('mainButtonClicked', onSendData)
        }

    }, [onSendData]);





    useEffect(() => {
        setActiveButtons([])
    }, [time]);

    useEffect(() => {

        const MainButton = telegramWebApp.MainButton;
        if(activeButtons.length !== 0){

            const seatsLength = activeButtons.map(
                ({id}) => cinemaHallData[time].seats[id]
            ).length

            const result = (seatsLength * cinemaHallData[time].price).toFixed(2);
            MainButton.text = `Pay $${result}`;
            MainButton.show();
            return;
        }
        MainButton.hide();
    }, [activeButtons]);

    return (
        <div>
            <HeadLine>{state.title}</HeadLine>
            <div className={[classes.timeSelector, classes.padding].join(' ')}>
                {cinemaHallData.map(({time},id) => (
                    <Radio setTime={setTime} checked={id===0? 'checked': false} id={id} value={time} name='time'/>
                ))}
            </div>
            <svg className={classes.padding} width="100%" viewBox="0 0 357 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 41.5001C109 -10.5 228.5 -12 355.5 41.5001" stroke="var(--tg-theme-bg-color)" strokeWidth="3"/>
            </svg>
            <SeatIndicator/>
            <SeatSelector activeButtons={activeButtons} setActiveButtons={setActiveButtons} seats={cinemaHallData[time]}  />
            <MainButton text={"Main button"} onClick={onSendData}/>
        </div>
    );
};

export default MovieShows;
