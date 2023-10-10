# Mini-app for booking movies step-by-step tutorial (REACT + NODEJS)

## Get telegram API token
First, we need to get an API token for the telegram bot, through which our web application will be launched. this can be done as follows:

1. Create a new bot using [BotFather](https://t.me/botfather)
2. Type `/newbot` and follow the instructions
3. Copy the bot token and save it somewhere. We will need it later


## Client

### React Setup
Create react app  - [React Setup Guide]([https://vitejs.dev/guide/#scaffolding-your-first-vite-project](https://create-react-app.dev/docs/getting-started/)https://create-react-app.dev/docs/getting-started/)

```
npx create-react-app my-app
cd my-app
npm start
```

### Adding Telegram Script
Now you need to connect Mini App to the Telegram client. insert the link to the telegram script into the <head></head> tag in file public/index.html:
```html
<head>
...
<script src="https://telegram.org/js/telegram-web-app.js"></script>
...
</head>
```

### Install Telegram Web App Libruary 

```
npm i @vkruglikov/react-telegram-web-app
```

###Set the structure of the project
1. Delete all files except index.html from the public folder
2. Delete all files except index.js, package.json and package-lock.json from the root directory folder

   Create next structure:

```
client/
    ├── public
    ├── src
    │   ├── app     
    │   ├── assets         
    │   ├── components          
    │   ├── constants      
    │   ├── pages
    │   ├── style
    │   ├── UI
    │   └── index.js
    └── index.js
```


Structure component:

```
Component/
    ├── UI
    │   ├── Component.js
    │   └── Component.module.css
    └── index.js //using for import

```

Create a file of the same name app.jsx and router/Router.jsx in the app folder

app.jsx:
```jsx
// Import the Router component from the "./router/Router" file
import Router from "./router/Router";

// Import the WebAppProvider component from the "@vkruglikov/react-telegram-web-app" package
import {WebAppProvider} from "@vkruglikov/react-telegram-web-app";

// Define the App component
function App() {
    return (
        <div className="App">
            <div className="ContentContainer">
                {/* Wrap the Router component with the WebAppProvider */}
                <WebAppProvider>
                    <Router/>
                </WebAppProvider>
            </div>
        </div>
    );
}

// Export the App component as the default export
export default App;

```
Router.jsx:

```
import React, {Suspense} from 'react';
import { Route, Routes } from 'react-router-dom'

import {Movies} from '../../pages/Movies'
import {MovieShows} from "../../pages/MovieShows";
import {Loader} from '../../components/Loader'

// Define the Router component
const Router = () => {
    return (
        <Suspense fallback={<Loader/>}>
            {/* Define the routes */}
            <Routes>
                {/* Define the route for the Movies page */}
                <Route index path="/" key={1} element={<Movies/> } />
                
                {/* Define the route for the MovieShows page */}
                <Route path="/MovieShows" key={2} element={<MovieShows/>} />
            </Routes>
        </Suspense>
    );
};

// Export the Router component as the default export
export default Router;

```

Now let's connect our application component to the main index file

index.js (main):

```js
// Import the necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { MemoryRouter } from 'react-router-dom'

// Import the global CSS styles
import './styles/globals.css';
import './styles/reset.css';
import './styles/main.css';

// Create a root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped in a MemoryRouter
root.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);

```

Let's add global styles to our project. create a file global.css, root.css, reset.css in the styles folder

global.css:

```css
/* Define CSS variables for various values */
:root{
    --radius-xs: 4px;
    --radius-s: 12px;
    --radius-m: 17px;
    --radius-xl: 30px;

    --button-height: 33px;

    --font-size-s: .8rem;
    --font-size-m: 1rem;
    --font-size-l: 1.5rem;
    --font-size-xl: 2.3rem;

    --margin-s: 5px;
    --margin-m: 8px;
    --margin-xl: 20px;

    --padding-s: 9px;
    --padding-m: 25px;
    --padding-g: 20px;

    --card-height: 40vw;
}

/* Media query for screen width greater than or equal to 400px */
@media screen and (min-width: 400px) {
    :root{
        /* Adjust CSS variables for larger screen sizes */
        --padding-s: 20px;
        --font-size-m: 1.2rem;
        --font-size-s: .9rem;
        --margin-s: 2px;
    }
}

```

reset.css:

```css
body{
    margin: 0;
    padding: 0;
}

button{
    border: none;
    outline: none;
}

```

main.css:

```
body{
    background: var(--tg-theme-secondary-bg-color);
}

.App{
    padding: var(--padding-g);
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
}

.ContentContainer{
    max-width: 400px;
    width: 100%;
}
```

####Add ui components:

Button/SeatButton/ui/SeatButton.jsx:

```jsx
// Import the necessary modules and styles
import React from 'react';
import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app';
import classes from './SeatButton.module.css';

// Define the SeatButton component
const SeatButton = (props) => {
    // Destructure the props
    const { seat, onClick, activeButtons, disabled } = props;
    
    // Calculate the buttonId based on the seat's row and seat number
    const buttonId = (seat.row-1)*7 + (seat.seat-1);
    
    // Check if the button is active
    const isActive = activeButtons.some((button) => button.id === buttonId);

    // Determine the CSS class for the button based on its state
    const buttonClass = isActive
        ? classes.active
        : (seat.state === 'free')
            ? classes.free
            : (seat.state === 'busy')
                ?  classes.busy
                : classes.ghost;

    // Use the useHapticFeedback hook for haptic feedback
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

// Export the SeatButton component as the default export
export default SeatButton;

```
Button/SeatButton/ui/SeatButton.module.css:

```
.SeatButton{
    aspect-ratio: 1/1;
    background-color: var(--tg-theme-bg-color);
    border-radius: var(--radius-s);
    color: #ffffff;
    font-weight: 500;
}

.SeatButton p{
    padding: 0;
    margin: 0;
}

.SeatButton:not(.busy):active{
    transform: scale(.95);
}

.free{

}

.busy{
    background-color: #ffffff00;
    border: 3px solid var(--tg-theme-bg-color);
}

.ghost{
    visibility: hidden;
}
.active{
    background-color: var(--tg-theme-button-color);
}


```

Button/SeatButton/index.js:

```js
import SeatButton from "./ui/SeatButton";

export {SeatButton}
```

Here we have created a seat selection component in a cinema hall and added vibration when clicking on a reserved seat. create the ui components you need in a similar way


####Now let's create the application components

such components are created similar to ui components.

MovieCard.jsx:

```jsx
// Import the necessary modules and components
import React from 'react';
import { useNavigate } from "react-router-dom";
import { MovieButton } from "../../../UI/Buttons/MovieButton";
import { MovieCardHeadLine } from "../../../UI/Font/MovieCardHeadLine";
import { MovieCardInfo } from "../../../UI/Font/MovieCardInfo";
import { CardImg } from '../../../UI/Images';
import { AgeTeg } from "../../../UI/Tegs";
import { BackButton, useWebApp } from "@vkruglikov/react-telegram-web-app";
import classes from './MovieCard.module.css';

// Define the MovieCard component
const MovieCard = (props) => {
    // Destructure the props
    const { imageLink, title, info, age } = props;
    
    // Use the useNavigate hook for navigation
    const route = useNavigate();
    
    // Use the useWebApp hook for Telegram Web App integration
    const telegramWebApp = useWebApp();

    // Define the onBack function for handling the back button
    const onBack = () => {
        telegramWebApp.offEvent('backButtonClicked', onBack)
        telegramWebApp.BackButton.hide();
        route('/', {});
    }

    // Define the onClick function for handling button clicks
    const onClick = (path, params) => {
        telegramWebApp.onEvent('backButtonClicked', onBack);
        telegramWebApp.BackButton.show();
        route(path, { state: params });
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
                        <MovieButton onClick={() => onClick('/MovieShows', { ...props })}>Buy</MovieButton>
                    </div>
                </div>
            </div>
            <BackButton onClick={onBack}/>
        </div>
    );
};

// Export the MovieCard component as the default export
export default MovieCard;

```

MovieCard.module.jsx:

```css
.MovieCard{
    position: relative;
    margin: var(--margin-xl) 0;
}

.MovieCardWrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    padding: var(--padding-s);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.header{
    display: flex;
    justify-content: end;
}

.footer{
    display: flex;
    justify-content: space-between;
    align-items: end;
}

.InfoWrapper{
    display: flex;
    flex-direction: column;
    max-width: 65%;
}


```


MovieList.jsx:

```jsx
import React from 'react';
import classes from './MovieList.module.css';
const MovieList = ({children}) => {
    return (
        <div className={classes.MovieList}>
            {children}
        </div>
    );
};

export default MovieList;
```

SeatIndicaor.jsx:

```jsx
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
``

SeatIndicaor.module.css:

```css

.IndicatorList{
    display: flex;
    width: 100%;
    justify-content: center;
    color: var(--tg-theme-text-color);
    gap: var(--margin-xl);
    padding: var(--padding-s) 0;
}

.IndicatorWrapper{
    display: flex;
    align-items: center;
    gap: var(--margin-m);
}

.Indicator{
    width: 20px;
    height: 20px;
    border-radius: var(--radius-xs);
}

.Busy{
    outline: 2px solid var(--tg-theme-bg-color);
}

.Free{
    background: var(--tg-theme-bg-color);
}
```

SeatSelector.jsx:

```jsx
// Import the necessary modules and components
import React from 'react';
import classes from './SeatSelector.module.css';
import { SeatButton } from '../../../UI/Buttons';

// Define the SeatSelector component
const SeatSelector = ({ seats, activeButtons, setActiveButtons }) => {
    // Define the handleClick function for handling button clicks
    const handleClick = (buttonId) => {
        // Find the index of the button in the activeButtons array
        const index = activeButtons.findIndex((button) => button.id === buttonId);
        
        // If the button is already active, remove it from the activeButtons array
        if (index !== -1) {
            setActiveButtons((prev) => prev.filter((button) => button.id !== buttonId));
        } else {
            // If the button is not active, add it to the activeButtons array
            setActiveButtons((prev) => [{ id: buttonId, ...seats[index] }, ...prev]);
        }
    };

    return (
        <div className={classes.SeatSelector}>
            {/* Map over the seats array and render a SeatButton component for each seat */}
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

// Export the SeatSelector component as the default export
export default SeatSelector;
```

SeatSelector.module.css:

```css
.SeatSelector{
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(7,1fr);
    rid-gap: 5px;
    gap: 5px;
}

```

####Now let's create our pages

Pages/Movie/ui/Movie.jsx:

```jsx

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
```

Pages/Movie/ui/Movie.async.js:

```js
// Import the necessary module from React
import { lazy } from "react";

// Define the MoviesAsync component using lazy loading
export const MoviesAsync = lazy(() => import('./Movies'));

```

Pages/Movie/index.js:

```js
export {MoviesAsync as Movies} from './ui/Movies.async';

```


We also create a MovieShows pag

Pages/MovieShows/ui/MovieShows.jsx:

```jsx
// Import the necessary modules and components from React and react-router-dom
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Import the necessary components from the "@vkruglikov/react-telegram-web-app" package
import { MainButton, useWebApp } from "@vkruglikov/react-telegram-web-app";

// Import the necessary components from the UI folder
import { HeadLine } from '../../../UI/Font/HeadLine';
import { Radio } from '../../../UI/Inputs/Radio';

// Import the necessary components from the components folder
import { SeatSelector } from '../../../components/SeatSelector';
import { cinemaHallData } from "../../../constants";
import { SeatIndicator } from '../../../components/SeatIndicator';

// Import the necessary CSS module
import classes from './MovieShows.module.css';

// Define the MovieShows component
const MovieShows = () => {
    const { state } = useLocation();
    const [time, setTime] = useState(0);
    const [activeButtons, setActiveButtons] = useState([]);
    const telegramWebApp = useWebApp();

    // Define the onSendData function for sending data to the Telegram web app
    const onSendData = useCallback(() => {
        const data = {
            title: state.title,
            ...cinemaHallData[time],
            seats: activeButtons.map(({ id }) => cinemaHallData[time].seats[id])
        }

        telegramWebApp.sendData(JSON.stringify(data));
    }, [time, activeButtons]);

    useEffect(() => {
        // Register the onSendData function as an event listener for the 'mainButtonClicked' event
        telegramWebApp.onEvent('mainButtonClicked', onSendData);

        // Unregister the onSendData function as an event listener when the component unmounts
        return () => {
            telegramWebApp.offEvent('mainButtonClicked', onSendData);
        }
    }, [onSendData]);

    useEffect(() => {
        // Clear the activeButtons array when the selected time changes
        setActiveButtons([]);
    }, [time]);

    useEffect(() => {
        // Update the MainButton based on the activeButtons array
        const MainButton = telegramWebApp.MainButton;

        if (activeButtons.length !== 0) {
            const seatsLength = activeButtons.map(({ id }) => cinemaHallData[time].seats[id]).length;
            const result = (seatsLength * cinemaHallData[time].price).toFixed(2);
            MainButton.text = `Pay $${result}`;
            MainButton.show();
            return;
        }

        MainButton.hide();
    }, [activeButtons]);

    return (
        <div>
            {/* Render the movie title */}
            <HeadLine>{state.title}</HeadLine>

            {/* Render the time selector */}
            <div className={[classes.timeSelector, classes.padding].join(' ')}>
                {cinemaHallData.map(({ time }, id) => (
                    <Radio setTime={setTime} checked={id === 0 ? 'checked' : false} id={id} value={time} name='time' />
                ))}
            </div>

            {/* Render the SVG path */}
            <svg className={classes.padding} width="100%" viewBox="0 0 357 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 41.5001C109 -10.5 228.5 -12 355.5 41.5001" stroke="var(--tg-theme-bg-color)" strokeWidth="3" />
            </svg>

            {/* Render the SeatIndicator component */}
            <SeatIndicator />

            {/* Render the SeatSelector component */}
            <SeatSelector activeButtons={activeButtons} setActiveButtons={setActiveButtons} seats={cinemaHallData[time]} />

            {/* Render the MainButton component */}
            <MainButton text={"Main button"} onClick={onSendData} />
        </div>
    );
};

// Export the MovieShows component as the default export
export default MovieShows;


```

Pages/MovieShows/ui/MovieShows.module.css:

```css
.padding{
    padding: var(--padding-s) 0;
}

.timeSelector{
    display: flex;
    justify-content: space-between;
}

```

upload movie covers to the assets/images folder



Let's create a constants folder and place cinemaHallData.js and movieShows.js there. they will act as data from the server

cinemaHallData.js:

```js

export const cinemaHallData = [
    {
        time: '12:00',
        price: 1.99,
        seats: [
            { row: 1,  rowMarker: 'A', seat: 1, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 2, state: 'busy'},
            { row: 1,  rowMarker: 'A', seat: 3, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 4, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 5, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 6, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 7, state: 'free'},
            { row: 2,  rowMarker: 'B', seat: 1, state: 'free'},
            { row: 2, rowMarker: 'B', seat: 2, state: 'free'},
            { row: 2, rowMarker: 'B', seat: 3, state: 'free'},
            { row: 2, rowMarker: 'B',seat: 4, state: 'busy'},
            { row: 2, rowMarker: 'B',seat: 5, state: 'free'},
            { row: 2, rowMarker: 'B',seat: 6, state: 'free'},
            { row: 2, rowMarker: 'B',seat: 7, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 1, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 2, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 3, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 4, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 5, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 6, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 7, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 1, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 2, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 3, state: 'busy'},
            { row: 4, rowMarker: 'D',seat: 4, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 5, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 6, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 7, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 1, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 2, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 3, state: 'ghost'},
            { row: 5, rowMarker: 'E',seat: 4, state: 'ghost'},
            { row: 5, rowMarker: 'E',seat: 5, state: 'ghost'},
            { row: 5, rowMarker: 'E',seat: 6, state: 'busy'},
            { row: 5, rowMarker: 'E',seat: 7, state: 'free'},
            { row: 6, rowMarker: 'F',seat: 1, state: 'free'},
            { row: 6, rowMarker: 'F',seat: 2, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 3, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 4, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 5, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 6, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 7, state: 'free'}
        ]
    },
    {
        time: '15:00',
        price: 2.49,
        seats: [
            { row: 1,  rowMarker: 'A', seat: 1, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 2, state: 'busy'},
            { row: 1,  rowMarker: 'A', seat: 3, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 4, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 5, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 6, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 7, state: 'free'},
            { row: 2,  rowMarker: 'B', seat: 1, state: 'busy'},
            { row: 2, rowMarker: 'B', seat: 2, state: 'free'},
            { row: 2, rowMarker: 'B', seat: 3, state: 'free'},
            { row: 2, rowMarker: 'B',seat: 4, state: 'busy'},
            { row: 2, rowMarker: 'B',seat: 5, state: 'free'},
            { row: 2, rowMarker: 'B',seat: 6, state: 'free'},
            { row: 2, rowMarker: 'B',seat: 7, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 1, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 2, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 3, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 4, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 5, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 6, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 7, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 1, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 2, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 3, state: 'busy'},
            { row: 4, rowMarker: 'D',seat: 4, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 5, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 6, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 7, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 1, state: 'busy'},
            { row: 5, rowMarker: 'E',seat: 2, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 3, state: 'ghost'},
            { row: 5, rowMarker: 'E',seat: 4, state: 'ghost'},
            { row: 5, rowMarker: 'E',seat: 5, state: 'ghost'},
            { row: 5, rowMarker: 'E',seat: 6, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 7, state: 'free'},
            { row: 6, rowMarker: 'F',seat: 1, state: 'free'},
            { row: 6, rowMarker: 'F',seat: 2, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 3, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 4, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 5, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 6, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 7, state: 'free'}
        ]
    },
    {
        time: '17:00',
        price: 5.49,
        seats: [
            { row: 1,  rowMarker: 'A', seat: 1, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 2, state: 'busy'},
            { row: 1,  rowMarker: 'A', seat: 3, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 4, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 5, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 6, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 7, state: 'free'},
            { row: 2,  rowMarker: 'B', seat: 1, state: 'free'},
            { row: 2, rowMarker: 'B', seat: 2, state: 'free'},
            { row: 2, rowMarker: 'B', seat: 3, state: 'free'},
            { row: 2, rowMarker: 'B',seat: 4, state: 'busy'},
            { row: 2, rowMarker: 'B',seat: 5, state: 'free'},
            { row: 2, rowMarker: 'B',seat: 6, state: 'free'},
            { row: 2, rowMarker: 'B',seat: 7, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 1, state: 'busy'},
            { row: 3, rowMarker: 'C',seat: 2, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 3, state: 'busy'},
            { row: 3, rowMarker: 'C',seat: 4, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 5, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 6, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 7, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 1, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 2, state: 'busy'},
            { row: 4, rowMarker: 'D',seat: 3, state: 'busy'},
            { row: 4, rowMarker: 'D',seat: 4, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 5, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 6, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 7, state: 'busy'},
            { row: 5, rowMarker: 'E',seat: 1, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 2, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 3, state: 'ghost'},
            { row: 5, rowMarker: 'E',seat: 4, state: 'ghost'},
            { row: 5, rowMarker: 'E',seat: 5, state: 'ghost'},
            { row: 5, rowMarker: 'E',seat: 6, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 7, state: 'free'},
            { row: 6, rowMarker: 'F',seat: 1, state: 'free'},
            { row: 6, rowMarker: 'F',seat: 2, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 3, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 4, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 5, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 6, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 7, state: 'free'}
        ]
    },
    {
        time: '21:30',
        price: 1.99,
        seats: [
            { row: 1,  rowMarker: 'A', seat: 1, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 2, state: 'busy'},
            { row: 1,  rowMarker: 'A', seat: 3, state: 'busy'},
            { row: 1,  rowMarker: 'A', seat: 4, state: 'busy'},
            { row: 1,  rowMarker: 'A', seat: 5, state: 'free'},
            { row: 1,  rowMarker: 'A', seat: 6, state: 'busy'},
            { row: 1,  rowMarker: 'A', seat: 7, state: 'free'},
            { row: 2,  rowMarker: 'B', seat: 1, state: 'free'},
            { row: 2, rowMarker: 'B', seat: 2, state: 'free'},
            { row: 2, rowMarker: 'B', seat: 3, state: 'busy'},
            { row: 2, rowMarker: 'B',seat: 4, state: 'busy'},
            { row: 2, rowMarker: 'B',seat: 5, state: 'busy'},
            { row: 2, rowMarker: 'B',seat: 6, state: 'free'},
            { row: 2, rowMarker: 'B',seat: 7, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 1, state: 'busy'},
            { row: 3, rowMarker: 'C',seat: 2, state: 'busy'},
            { row: 3, rowMarker: 'C',seat: 3, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 4, state: 'busy'},
            { row: 3, rowMarker: 'C',seat: 5, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 6, state: 'free'},
            { row: 3, rowMarker: 'C',seat: 7, state: 'busy'},
            { row: 4, rowMarker: 'D',seat: 1, state: 'busy'},
            { row: 4, rowMarker: 'D',seat: 2, state: 'busy'},
            { row: 4, rowMarker: 'D',seat: 3, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 4, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 5, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 6, state: 'free'},
            { row: 4, rowMarker: 'D',seat: 7, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 1, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 2, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 3, state: 'ghost'},
            { row: 5, rowMarker: 'E',seat: 4, state: 'ghost'},
            { row: 5, rowMarker: 'E',seat: 5, state: 'ghost'},
            { row: 5, rowMarker: 'E',seat: 6, state: 'free'},
            { row: 5, rowMarker: 'E',seat: 7, state: 'free'},
            { row: 6, rowMarker: 'F',seat: 1, state: 'busy'},
            { row: 6, rowMarker: 'F',seat: 2, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 3, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 4, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 5, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 6, state: 'ghost'},
            { row: 6, rowMarker: 'F',seat: 7, state: 'free'}
        ]
    }
]
```


movieShows.js:

```js
import SickIamge from '../../assets/images/sick.jpg';
import AliceDarlinImage from '../../assets/images/AliceDarlin.jpg';
import CreedImage from '../../assets/images/creed3.jpg';
import MagicianElemphantImage from '../../assets/images/TheMagickElephant.jpg';
import GreenMileImage from '../../assets/images/greenMile.jpg'
import OnePlusOneImage from '../../assets/images/onePlusOne.jpg'

const movieShows = [
    {
        title: 'Sick',
        image: SickIamge,
        info: 'Italy · 2020 · 2h 30m',
        age: '18+'
    },
    {
        title: 'Alice, Darling',
        image: AliceDarlinImage,
        info: 'Italy · 2020 · 2h 30m',
        age: '12+'
    },
    {
        title: 'Creed 3',
        image: CreedImage,
        info: 'Italy · 2020 · 2h 30m',
        age: '12+'
    },
    {
        title: 'The Magician’s Elephant',
        image: MagicianElemphantImage,
        info: 'Italy · 2020 · 2h 30m',
        age: '12+'
    },
    {
        title: 'The Green Mile',
        image: GreenMileImage,
        info: 'Italy · 2020 · 2h 30m',
        age: '12+'
    },
    {
        title: '1+1',
        image: OnePlusOneImage,
        info: 'Italy · 2020 · 2h 30m',
        age: '12+'
    }
]

export default movieShows;

```

build project
```
npm run build
```

move the files from the build folder to your web server

##Server
###Set the structure of the project

```
├── backend/
│   ├── src/
│   │   ├── Handlers/
│   │   │   ├── TextHandler                   #Text messages Handler
│   │   │   ├── WebAppHandler                 #Message handler from web app
│   │   │   └── index.js                      #Handlers import file
│   │   ├── Init/
│   │   │   ├── InitBot                       #Bot initialization file
│   │   │   └── index.js                      #Init import file
│   │   ├── Keyboards 
│   │   │   ├── OpenWebAppKeyboard            #Keyboard that opens a web app
│   │   │   └── index.js                      #Keyboard import file
│   │   └── config.js                         #App config
│   ├── index.js                              #App main file
│   └── package.json

```

### Install dependencies

```
npm i node-telegram-bot-api
```

index.js (main):

```
import {bot} from './src/Init/index.js';


import {
    TextHandler,
    WebAppHandler
} from "./src/Handlers/index.js";


bot.on('message', WebAppHandler)
bot.on('text', TextHandler)

```


src/config.js

```
const BOT_API_KEY = 'YPUR API KEY';
const HELLO_STIKER_ID = 'CAACAgIAAxkBAAICHGUjmQNID7R9RX7wzjnwwAIR8sULAAJHAANZu_wlXJ3WrE3fYSwwBA';
const HELLO_MESSAGE = 'What movie do you want to watch? Click on the button below and book your tickets.';
const WEB_APP_URL = 'YOUR WEB APP URL';

export {
    BOT_API_KEY,
    WEB_APP_URL,
    HELLO_STIKER_ID,
    HELLO_MESSAGE
}
```


Handlers/TextHandler/TextHandler.js:

```js
import {bot} from '../../Init/index.js'
import {OpenWebAppKeyboard} from '../../Keyboards/index.js'
import {
    HELLO_MESSAGE,
    HELLO_STIKER_ID
} from "../../config.js";
const TextHandler = async message => {

    await bot.sendSticker(
        message.chat.id,
        HELLO_STIKER_ID

    )

    await bot.sendMessage(message.chat.id, HELLO_MESSAGE, OpenWebAppKeyboard);
}

export {TextHandler}
```

Handlers/TextHandler/WebAppHandler.js:


```js

import {bot} from '../../Init/index.js';


const WebAppHandler = async message => {
    if(!message.web_app_data) return;
    const data = JSON.parse(message.web_app_data.data)

    const places = data.seats.map((seat) => `${seat.rowMarker}${seat.seat}`).join(', ');
    const total = `$${(data.price*data.seats.length).toFixed(2)} (${data.seats.length}x$${data.price})`;

    const answer = `
<b>${data.title} movie tickets are booked</b>
<b>Your places:</b> ${places}
<b>Time:</b> ${data.time}
<b>total:</b> ${total}
`

    await bot.sendMessage(message.chat.id, answer, {parse_mode: 'HTML'})
}



export {WebAppHandler}
```


Init/InitBot/InitBot.js:

```js
import TelegramBot from "node-telegram-bot-api";
import {BOT_API_KEY} from "../../config.js";

const bot = new TelegramBot(BOT_API_KEY, {
    polling: {
        interval: 300,
            autoStart: true
    }
})

export {bot}

```


Keyboards/OpenWebAppKeyboard/OpenWebAppKeyboard.js:

```js
import {WEB_APP_URL} from '../../config.js';

const OpenWebAppKeyboard = {
    reply_markup: {

        keyboard: [

            [{
                "text": "Now in cinema📽️",
                "web_app": {
                    "url": WEB_APP_URL
                }
            }]

        ],
        resize_keyboard: true

    }
}

export {OpenWebAppKeyboard}

```


start the project:

```
npm start
```
