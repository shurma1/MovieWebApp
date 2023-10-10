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

Add ui components:

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


