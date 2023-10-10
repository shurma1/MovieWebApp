import React from 'react';
import {useNavigate} from "react-router-dom";

import {MovieButton} from "../../../UI/Buttons/MovieButton";
import {MovieCardHeadLine} from "../../../UI/Font/MovieCardHeadLine"
import {MovieCardInfo} from "../../../UI/Font/MovieCardInfo"
import {CardImg} from '../../../UI/Images';
import {AgeTeg} from "../../../UI/Tegs";

import {BackButton, useWebApp} from "@vkruglikov/react-telegram-web-app";

import classes from './MovieCard.module.css';

const MovieCard = (props) => {
    const {imageLink, title, info, age} = props;
    const route = useNavigate();
    const telegramWebApp = useWebApp();

    const onBack = () => {
        telegramWebApp.offEvent('backButtonClicked', onBack)
        telegramWebApp.BackButton.hide();
        route('/', {});
    }

    const onClick = (path, params) => {
        telegramWebApp.onEvent('backButtonClicked', onBack);
        telegramWebApp.BackButton.show();
        route(path, {state: params});

    }

    return (
        <div className={classes.MovieCard}>
            <CardImg src={imageLink}/>
            <div className={classes.MovieCardWrapper}>
                <div className={classes.header}>
                    <AgeTeg>{age}</AgeTeg>
                </div>
                <div className={classes.footer}>
                    <div className={classes.InfoWrapper}>
                        <MovieCardHeadLine>{title}</MovieCardHeadLine>
                        <MovieCardInfo>{info}</MovieCardInfo>
                    </div>
                    <div>
                        <MovieButton onClick={()=> onClick('/MovieShows',{...props})} >Buy</MovieButton>
                    </div>
                </div>
            </div>

                <BackButton onClick={onBack}/>
        </div>
    );
};

export default MovieCard;
