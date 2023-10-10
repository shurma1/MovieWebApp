import React from 'react';
import {MovieCard} from "../../../components/MovieCard"
import {HeadLine} from '../../../UI/Font/HeadLine'
import movieShows from '../../../constants/movieShows/movieShows'
const Movies = () => {
    return (
        <div>
            <HeadLine>Now in <br/>the cinema</HeadLine>
            <div>
                {movieShows.map(movie => (
                    <MovieCard imageLink={movie.image} title={movie.title} info={movie.info} age={movie.age}/>
                )
                )}
            </div>

        </div>
    );
};

export default Movies;