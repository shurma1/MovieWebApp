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