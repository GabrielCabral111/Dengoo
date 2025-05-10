import Header from "./Header";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function Nomear() {
    const [mostrarConteudo, setMostrarConteudo] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/estrelas/Certificado');
    };

    // ParticleJS initialization remains the same
    useEffect(() => {
        let particlesInitialized = false;
        let script = null;
        let canvasEl = null;

        const initParticles = () => {
            if (particlesInitialized || !window.particlesJS) return;

            try {
                canvasEl = document.querySelector("#particles-js > canvas");
                
                if (canvasEl) {
                    canvasEl.style.position = "fixed";
                    canvasEl.style.top = "0";
                    canvasEl.style.left = "0";
                    canvasEl.style.width = "100%";
                    canvasEl.style.height = "100%";
                    canvasEl.style.pointerEvents = "auto";
                    canvasEl.style.zIndex = "10";
                }

                window.particlesJS("particles-js", {
                    particles: {
                        number: { 
                            value: 160,
                            density: { 
                                enable: true, 
                                value_area: 800 
                            } 
                        },
                        color: { 
                            value: ["#7875BE", "#a991f0", "#ffffff"] 
                        },
                        shape: { 
                            type: "circle",
                            stroke: { 
                                width: 0,
                                color: "#000000" 
                            },
                            polygon: { 
                                nb_sides: 5 
                            } 
                        },
                        opacity: { 
                            value: 0.7,
                            random: true,
                            anim: { 
                                enable: true,
                                speed: 0.5,
                                opacity_min: 0.1,
                                sync: false 
                            } 
                        },
                        size: { 
                            value: 2.5,
                            random: true,
                            anim: { 
                                enable: true,
                                speed: 3,
                                size_min: 0.3,
                                sync: false 
                            } 
                        },
                        line_linked: { 
                            enable: false 
                        },
                        move: { 
                            enable: true,
                            speed: 0.5,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: { 
                                enable: true,
                                rotateX: 600,
                                rotateY: 1200 
                            } 
                        }
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: { 
                                enable: true,
                                mode: "bubble",
                                parallax: { 
                                    enable: true,
                                    force: 30,
                                    smooth: 10
                                }
                            },
                            onclick: { 
                                enable: true,
                                mode: "push" 
                            },
                            resize: true
                        },
                        modes: {
                            bubble: { 
                                distance: 120,
                                size: 3,
                                duration: 2,
                                opacity: 0.8,
                                speed: 3 
                            },
                            push: { 
                                particles_nb: 3 
                            },
                            repulse: { 
                                distance: 100,
                                duration: 0.4 
                            }
                        }
                    },
                    retina_detect: true
                });

                particlesInitialized = true;
            } catch (error) {
                console.error("Erro ao inicializar particlesJS:", error);
            }
        };

        const loadParticles = () => {
            if (window.particlesJS) {
                initParticles();
                return;
            }

            script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
            script.async = true;
            script.onload = () => {
                initParticles();
            };
            script.onerror = () => {
                console.error('Falha ao carregar a biblioteca particles.js');
            };
            document.body.appendChild(script);
        };

        const destroyParticles = () => {
            if (window.pJSDom && window.pJSDom.length > 0) {
                try {
                    window.pJSDom[0].pJS.fn.vendors.destroypJS();
                    window.pJSDom = [];
                } catch (error) {
                    console.error("Erro ao destruir partículas:", error);
                }
            }
            particlesInitialized = false;
        };

        const loadTimer = setTimeout(loadParticles, 500);

        return () => {
            clearTimeout(loadTimer);
            destroyParticles();
            if (script && document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="nomear-container bg-[#0F1C3B] min-h-screen">
            <Header />
            
            {/* Main Content Section */}
            <section className="relative bg-gradient-to-b from-gray-900 via-blue-900 to-blue-800 py-12 sm:py-16 md:py-24 lg:py-32">
                {/* Particles Background */}
                <div 
                    id="particles-js" 
                    className="fixed inset-0 w-full h-full pointer-events-none"
                    style={{ zIndex: 10 }}
                ></div>
                
                {/* Content Container */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="max-w-4xl mx-auto">
                        {/* Main Card */}
                        <div className='bg-[#0F1C3B]/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-blue-500/20'>
                            {/* Title */}
                            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent mb-6 sm:mb-8 md:mb-10">
                                Coloque seu nome e veja<br />
                                qual é a sua Estrela
                            </h1>
                            
                            {/* Name Input */}
                            <textarea 
                                className="bg-white/90 mt-4 sm:mt-6  font-bold rounded-xl w-full max-w-xs sm:max-w-sm mx-auto h-20 sm:h-15 p-4 text-center resize-none focus:outline-none placeholder:text-gray-500 block text-black"
                                placeholder="Nome do seu Dengo"
                            ></textarea>
                            
                            {/* Star Info Card */}
                            <div 
                                className='bg-[#0B1938] border border-gray-300/30 flex flex-col sm:flex-row items-center justify-between w-full max-w-md mx-auto mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl cursor-pointer hover:bg-[#0B1938]/90 transition-colors duration-300'
                                onClick={() => setMostrarConteudo(!mostrarConteudo)}
                            >
                                <div className='text-center sm:text-left mb-4 sm:mb-0'>
                                    <p className="text-sm sm:text-base text-amber-50/80">Estrela ideal:</p>
                                    <p className='text-2xl sm:text-3xl lg:text-5xl font-bold font-goudy-italic text-amber-50'>
                                        {mostrarConteudo ? 'Antares' : '••••••'}
                                    </p>
                                </div>
                                
                                <div className="hidden sm:block w-px bg-gray-400 h-16 mx-4"></div>
                                
                                <div className='text-center sm:text-right'>
                                    <p className="text-sm sm:text-base text-amber-50/80">Combinação:</p>
                                    <p className='text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50'>
                                        {mostrarConteudo ? '99%' : '•••'}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Continue Button */}
                            <button 
                                className="relative px-6 py-3 sm:px-8 sm:py-4 w-full max-w-xs sm:max-w-sm mx-auto mt-8 sm:mt-10 text-white font-bold rounded-lg bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-400 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-500 hover:to-cyan-300 active:scale-95 overflow-hidden group flex justify-center items-center"
                                onClick={handleNavigation}
                            >
                                <span className="relative z-10 text-sm sm:text-base md:text-lg">
                                    Continuar
                                </span>
                                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Nomear;