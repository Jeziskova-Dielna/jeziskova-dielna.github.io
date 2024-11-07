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
            </div>

            {/* Gallery Section */}
            <section className="gallery bg-black py-20">
                <h2 className="text-center text-white font-extrabold text-5xl mb-12">
                    Christmas Gallery
                </h2>
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
                    {[
                        "https://images.unsplash.com/photo-1608897013037-e0557a151d1a",
                        "https://images.unsplash.com/photo-1607082348813-520db240b3cd",
                        "https://images.unsplash.com/photo-1512813195386-6cf811ad3542",
                        "https://images.unsplash.com/photo-1543872084-c7bd3822856d",
                        "https://images.unsplash.com/photo-1575379799635-0d04c3af6a4e",
                        "https://images.unsplash.com/photo-1512936787536-e7b5d2f39e92",
                        "https://images.unsplash.com/photo-1607083205934-5fa0ae1e68ef",
                        "https://images.unsplash.com/photo-1573662716115-1c0b8aee779e",
                    ].map((url, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg shadow-lg group transform hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={`${url}?auto=format&fit=crop&w=300&h=200&q=80`}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-semibold text-lg">
                                    Holiday Memory {index + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default App;
