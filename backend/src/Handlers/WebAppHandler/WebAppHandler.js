import {bot} from '../../Init/index.js';
import {BOT_API_KEY} from "../../config.js";

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