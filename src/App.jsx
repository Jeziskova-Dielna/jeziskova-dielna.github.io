import "./index.css";
import Countdown from "react-countdown";
import Snowfall from "react-snowfall";

function App() {
    return (
        <main className="relative bg-gradient-to-r from-blue to-black select-none">
            <Snowfall color="white" snowflakeCount={100} />
            <div className="text-white text-center h-screen flex justify-center items-center flex-col">
                <a
                    href="https://discord.com/events/768806954205184002/1040671696803332197"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto"
                >
                    <h1 className="font-black text-6xl my-6 md:mb-2 mb-24">
                        Ježiškova Dielňa
                    </h1>
                </a>
                <span className="mb-8 text-xl font-light max-w-3xl font-[Berkshire_Swash, cursive'] text-white">
                    U nás na Ježiškovej dielni každoročne počas Vianoc
                    organizujeme rôzne súťaže, komunitné eventy a viac!
                </span>
                <a
                    href="https://bit.ly/jeziskova-dielna"
                    className="z-50 bg-red-600 hover:bg-red-500 transition-all px-12 py-3 rounded-xl text-white font-bold text-xl shadow-lg animate-bounce"
                >
                    Pripoj sa!
                </a>
                <p className="text-[15vw] text-white/20 font-extrabold absolute">
                    <Countdown
                        date={Date.parse("25 Nov 2024 19:00:00 GMT+1")}
                    />
                </p>
                {/* Snow at the bottom */}
            </div>
        </main>
    );
}

export default App;
