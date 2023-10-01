import "./index.css";
import Countdown from "react-countdown";
import Snowfall from "react-snowfall";

function App() {
    return (
        <main className="px-4  bg-gradient-to-r  from-dark to-black select-none">
            <Snowfall />
            <div className="text-white text-center h-screen flex justify-center items-center flex-col">
                {" "}
                <a
                    href="https://discord.com/events/768806954205184002/1040671696803332197"
                    target="_blank"
                >
                    {" "}
                    <h1 className="font-black text-6xl my-6 pointer-events-none cursor-pointer select-none md:mb-2 mb-24">
                        Ježiškova Dielňa
                    </h1>
                </a>
                <span className="mb-8 text-xl font-light max-w-3xl font-[Berkshire_Swash, cursive']">
                    U nás na Ježiškovej dielni každoročne počas Vianoc
                    organizujeme rôzne súťaže, komunitné eventy a viac!
                </span>
                <a
                    href="https://bit.ly/jeziskova-dielna"
                    className="z-50 bg-white/90 hover:bg-white transition-all px-12 py-3 rounded-xl text-black text-xl"
                >
                    Pripoj sa!
                </a>
                <p className="text-[15vw] text-white/20 font-extrabold absolute">
                    <Countdown
                        date={Date.parse("24 Nov 2023 19:00:00 GMT+1")}
                    />
                </p>
            </div>
        </main>
    );
}

export default App;
