import "./index.css";
import Countdown from "react-countdown";
import Snowfall from "react-snowfall";

function App() {
    return (
        <div>
            <Snowfall />
            <div className="text-white text-center h-screen flex justify-center items-center flex-col bg-dark">
                {" "}
                <h1 className="font-black text-6xl my-6 pointer-events-none cursor-default select-none">
                    Ježiškova Dielňa
                </h1>
                <p className="text-5xl font-extralight cursor-default select-none">
                    <Countdown
                        date={Date.parse("20 Nov 2022 00:00:00 GMT+1")}
                    />
                </p>
            </div>
        </div>
    );
}

export default App;
