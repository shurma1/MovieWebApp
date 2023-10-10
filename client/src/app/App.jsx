import {initTelegramCss} from "../helpers/initTelegramCss";
import Router from "./router/Router";
import {WebAppProvider} from "@vkruglikov/react-telegram-web-app";

function App() {
    //initTelegramCss();
    return (
        <div className="App">
            <div className="ContentContainer">
                <WebAppProvider>
                    <Router/>
                </WebAppProvider>
            </div>
        </div>
    );
}

export default App;
