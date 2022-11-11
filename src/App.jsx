import "./index.css";
import Countdown from "react-countdown";
import Snowfall from "react-snowfall";

function App() {
    return (
        <main>
            <Snowfall />
            <div className="text-white text-center h-screen flex justify-center items-center flex-col bg-dark">
                {" "}
                <h1 className="font-black text-6xl my-6 pointer-events-none cursor-default select-none mb-12">
                    Ježiškova Dielňa
                </h1>
                <p className="text-5xl font-extralight hover:font-extrabold cursor-default select-none bg-white py-6 rounded-lg hover:rounded-full w-96 text-center drop-shadow-[0_15px_35px_rgba(255,255,255,0.25)] hover:-translate-y-3 transition-all duration-100 hover:w-[35rem] hover:h-[35rem] hover:absolute flex items-center justify-center">
                    <Countdown
                        className="text-dark"
                        date={Date.parse("20 Nov 2022 19:00:00 GMT+1")}
                    />
                </p>
            </div>
        </main>
    );
}

export default App;
