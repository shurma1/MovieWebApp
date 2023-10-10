# Mini-app for booking movies

## Description

## Demo
<img src="demo.gif" alt="Demo video" width="50%">

## Stack



##### Client
  - React - [Docs](https://react.dev)
  - Telegram Mini Apps - [Docs](https://core.telegram.org/bots/webapps#implementing-mini-apps)
##### Server
  - NodeJS v18
  - node-telegram-bot-api - Telegram Bot API library for nodeJS [Documentation](https://github.com/yagop/node-telegram-bot-api)


## Project Structure
```
.
├── backend/
│   ├── src/
│   │   ├── Handlers/
│   │   │   ├── TextHandler/
│   │   │   │   └── TextHandler.js           #Text messages Handler
│   │   │   ├── WebAppHandler/
│   │   │   │   └── WebAppHandler.js         #Message handler from web app
│   │   │   └── index.js                     #Handlers import file
│   │   ├── Init/
│   │   │   ├── InitBot/
│   │   │   │   └── InitBot.js               #Bot initialization file
│   │   │   └── index.js                     #Init import file
│   │   ├── Keyboards/
│   │   │   ├── OpenWebAppKeyboard/
│   │   │   │   └── OpenWebAppKeyboard.js    #Keyboard that opens a web app
│   │   │   └── index.js                     #Keyboard import file
│   │   └── config.js                        #App config
│   ├── index.js                             #App main file
│   └── package.json
└── client/
    ├── public
    ├── src
    │   ├── components     # reusable components
    │   ├── hooks          # custom hooks
    │   ├── pages          # pages
    │   ├── services       # api services
    │   ├── index.css
    │   └── index.jsx
    ├── example.env
    ├── index.html
    └── ...
```

  
