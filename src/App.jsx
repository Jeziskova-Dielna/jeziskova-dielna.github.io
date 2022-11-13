import "./index.css";
import Countdown from "react-countdown";
import Snowfall from "react-snowfall";

function App() {
    return (
        <main>
            <Snowfall />
            <div className="text-white text-center h-screen flex justify-center items-center flex-col bg-dark">
                {" "}
                <a
                    href="https://discord.com/events/768806954205184002/1040671696803332197"
                    target="_blank"
                >
                    {" "}
                    <h1 className="font-black text-6xl my-6 pointer-events-none cursor-default select-none mb-12">
                        Ježiškova Dielňa
                    </h1>
                </a>
                <p className="text-4xl md:text-5xl font-extralight hover:font-extrabold cursor-default select-none bg-white py-6 rounded-lg hover:rounded-full md:w-96 w-72 text-center drop-shadow-[0_15px_35px_rgba(255,255,255,0.25)] hover:-translate-y-3 transition-all duration-100 md:hover:w-[35rem] md:hover:h-[35rem] hover:w-[20rem] hover:h-[20rem] hover:absolute flex items-center justify-center">
                    <Countdown
                        className="text-dark"
                        date={Date.parse("25 Nov 2022 19:00:00 GMT+1")}
                    />
                </p>
            </div>
        </main>
    );
}

export default App;
