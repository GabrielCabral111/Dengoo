import "./styles.css";
import { useEffect, useState } from "react";
import Header from "./components/Header"
import Introducao from "./components/Introducao"
import Slide from "./components/Slidedeclaracoes"
import Carta from "./components/Carta"
import PedidoNamoro from "./components/PedidoNamoro";
import Playlist from "./components/Playlist";
import Footer from "./components/Footer";

const Declaracoes = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      const heartCount = window.innerWidth < 768 ? 10 : 20;
      const newHearts = Array.from({ length: heartCount }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + "%", 
        delay: Math.random() * 5 + "s", 
        duration: 19 + Math.random() * 10 + "s",
        size: 0.3 + Math.random() * 0.7 + "rem", 
        opacity: 0.3 + Math.random() * 0.7, 
      }));
      setHearts(newHearts);
    };

    generateHearts();
    window.addEventListener("resize", generateHearts);
    return () => window.removeEventListener("resize", generateHearts);
  }, []);

  return (
    <main className=" bg-[#030816] ">
        <div className="relative bg-cover bg-no-repeat bg-center bg-[linear-gradient(to_bottom,#4E1129_0%,#862C4E_50%,#750B34_100%)] h-screen overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:z-10 after:w-full after:h-full ">
        
        {hearts.map((heart) => (
            <div
            key={heart.id}
            className="absolute text-blue-900 animate-float z-0"
            style={{
                left: heart.left,
                bottom: '-5%',
                animationDelay: heart.delay,
                animationDuration: heart.duration,
                fontSize: 1 + Math.random() * 2 + "rem", 
                opacity:heart.opacity,
            }}
            >
            {["💌", "💖", "💘", "💓"][heart.id % 4]}
            </div>
        ))}

        <div className="relative z-20 p-1">
        <Header />
        <Introducao />  
        </div>
        </div>
        <Slide />
        <div className=" absolute z-20  w-full h-15 md:h-35 bg-gradient-to-b from-[#530624] to-transparent ">  
        </div>
        <Carta />
        <div className=" absolute z-20 -translate-y-15 sm:-translate-y-35 mb:-translate-y-35  w-full h-15 md:h-35 bg-gradient-to-t from-[#530624] to-transparent ">  
        </div>
        <div className=" absolute z-20   w-full h-15 md:h-35 bg-gradient-to-b from-[#530624] to-transparent ">  
        </div>
        <PedidoNamoro />
        <div className=" absolute z-20   w-full h-15 md:h-35 bg-gradient-to-b from-[#4d0520] to-transparent "></div>
        <Playlist />
        <Footer />

        
    </main>
  );
};

export default Declaracoes;