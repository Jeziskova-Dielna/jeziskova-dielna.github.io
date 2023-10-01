import "./index.css";
import Countdown from "react-countdown";
import Snowfall from "react-snowfall";

function App() {
    return (
        <main>
            <Snowfall />
            <div className="text-white text-center h-screen flex justify-center items-center flex-col bg-gradient-to-r  from-dark to-black">
                {" "}
                <a
                    href="https://discord.com/events/768806954205184002/1040671696803332197"
                    target="_blank"
                >
                    {" "}
                    <h1 className="font-black text-6xl my-6 pointer-events-none cursor-pointer select-none ">
                        Ježiškova Dielňa
                    </h1>
                </a>
                <span className="mb-8 text-xl font-light max-w-3xl font-[Berkshire_Swash, cursive']">
                    U nás na Ježiškovej dielni každoročne počas Vianoc
                    organizujeme rôzne súťaže, komunitné podujatia a ďalšie
                    akcie!
                </span>
                <p className="text-7xl text-white font-regular">
                    <Countdown
                        date={Date.parse("24 Nov 2023 19:00:00 GMT+1")}
                    />
                </p>
            </div>
        </main>
    );
}

export default App;
