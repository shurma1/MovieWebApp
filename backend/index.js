import {bot} from './src/Init/index.js';


import {
    TextHandler,
    WebAppHandler
} from "./src/Handlers/index.js";


bot.on('message', WebAppHandler)
bot.on('text', TextHandler)



