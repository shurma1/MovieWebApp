import React, {Suspense} from 'react';
import { Route, Routes } from 'react-router-dom'

import {Movies} from '../../pages/Movies'
import {MovieShows} from "../../pages/MovieShows";
import {Loader} from '../../components/Loader'
const Router = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route index path="/" key={1} element={<Movies/> } />
                <Route path="/MovieShows" key={2} element={<MovieShows/>} />
            </Routes>
        </Suspense>
    );
};

export default Router;