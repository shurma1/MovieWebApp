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