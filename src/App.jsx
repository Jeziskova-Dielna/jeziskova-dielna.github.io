import "./index.css";
import Countdown from "react-countdown";
import Snowfall from "react-snowfall";

// Import images manually
import img1 from "./imgs/1.png";
import img2 from "./imgs/2.png";
import img3 from "./imgs/3.png";
import img4 from "./imgs/4.png";
import img5 from "./imgs/5.png";
import img6 from "./imgs/6.png";

const images = [img1, img2, img3, img4, img5, img6];

function ImageSlider() {
    return (
        <div className="slider mb-12">
            <div className="slide-track">
                {images.concat(images).map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`slide-${index}`}
                        className="slide"
                    />
                ))}
            </div>
        </div>
    );
}

function App() {
    return (
        <main className="relative bg-gradient-to-r from-blue-900 to-black select-none overflow-hidden">
            <Snowfall color="white" snowflakeCount={100} />
            <div className="text-white text-center h-screen flex items-center flex-col">
                <a
                    href="https://discord.com/events/768806954205184002/1040671696803332197"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto"
                >
                    <h1 className="font-black text-6xl my-6 md:mb-2 mb-24 drop-shadow-lg mt-24">
                        Ježiškova Dielňa
                    </h1>
                </a>
                <span className="mb-8 text-xl font-light max-w-3xl font-[Berkshire_Swash, cursive] text-white drop-shadow-md">
                    U nás na Ježiškovej dielni každoročne počas Vianoc
                    organizujeme rôzne súťaže, komunitné eventy a viac!
                </span>
                <a
                    href="https://bit.ly/jeziskova-dielna"
                    className="z-50 bg-red-600 hover:bg-red-500 transition-all px-12 py-3 rounded-xl text-white font-bold text-xl shadow-lg animate-bounce"
                >
                    Pripoj sa!
                </a>
                <p className="text-[15vw] text-white/20 font-extrabold absolute top-1/3 transform -translate-y-1/2 w-full flex justify-center drop-shadow-lg">
                    <Countdown
                        date={Date.parse("25 Nov 2024 19:00:00 GMT+1")}
                    />
                </p>
            </div>
            <ImageSlider />
        </main>
    );
}

export default App;
