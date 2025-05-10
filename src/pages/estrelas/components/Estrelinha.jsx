import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Espacial from '../images/Espacial.mp3'
import { Link } from "react-router";

function Estrelinha() {
    const navigate = useNavigate();
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [showVolumeControl, setShowVolumeControl] = useState(false);
    
    const handleNavigation = () => {
        navigate('/estrelas');
    };
    
    const handleNavigation2 = () => {
        navigate('/estrelas/Certificado');
    };
    
    const canvasRef = useRef(null);
    const [starSize, setStarSize] = useState(1.5);
    const [starBrightness, setStarBrightness] = useState(1.5);
    const [lineWidth, setLineWidth] = useState(2.0);
    const [twinkling, setTwinkling] = useState(true);
    const [hoveredStar, setHoveredStar] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1.2);
    const [showControls, setShowControls] = useState(false);

    const scorpius = {
        name: "Scorpius (Escorpião)",
        description: "Nos braços de Antares, meu coração arde como fogo celeste. Mesmo distante, teu brilho me guia nas noites mais escuras, lembrando que o amor, como as estrelas, nunca deixa de brilhar.",
        mythology:"Nos braços de Antares, meu coração arde como fogo celeste. Mesmo distante, teu brilho me guia nas noites mais escuras, lembrando que o amor, como as estrelas, nunca deixa de brilhar.",
        stars: [
            {name: "Débora Paixão", x: 0, y: 0, z: 0, magnitude: 1.1},
            {name: "Graffias", x: -30, y: 10, z: 5, magnitude: 2.6},
            {name: "Dschubba", x: -20, y: 5, z: 0, magnitude: 2.3},
            {name: "Pi Scorpii", x: -10, y: -5, z: -10, magnitude: 2.9},
            {name: "Shaula", x: 40, y: -25, z: 15, magnitude: 1.6},
            {name: "Lesath", x: 45, y: -30, z: 20, magnitude: 2.7},
            {name: "Sargas", x: 30, y: -35, z: 10, magnitude: 1.9}
        ],
        lines: [[1, 2], [2, 3], [3, 0], [0, 4], [4, 5], [4, 6]]
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = volume;
            if (isPlaying) {
                audio.play().catch(error => {
                    console.error("Autoplay prevented:", error);
                    // Mostrar algum UI para o usuário iniciar manualmente
                });
            } else {
                audio.pause();
            }
        }
    }, [isPlaying, volume]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (newVolume === 0) {
            setIsPlaying(false);
        } else if (!isPlaying) {
            setIsPlaying(true);
        }
    };

    const toggleMute = () => {
        if (volume > 0) {
            setVolume(0);
            setIsPlaying(false);
        } else {
            setVolume(0.5);
            setIsPlaying(true);
        }
    };


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const updateCanvasSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            drawScene(ctx);
        };
        
        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);
        
        return () => window.removeEventListener('resize', updateCanvasSize);
    }, [starSize, starBrightness, lineWidth, twinkling, rotation, zoom]);

    const drawBackgroundStars = (ctx, width, height, count = 500) => {
        for (let i = 0; i < count; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const radius = Math.random() * 1.2;
            const opacity = Math.random() * 0.8 + 0.2;
            const brightness = Math.random() * 0.7 + 0.3;
            
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * brightness})`;
            ctx.fill();
        }
    };

    const drawScene = (ctx) => {
        const canvas = canvasRef.current;
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);
        
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#03051A');
        gradient.addColorStop(1, '#0C1442');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        drawBackgroundStars(ctx, width, height);
        
        const centerX = width / 2;
        const centerY = height / 2;
        const scale = 3 * zoom;
        
        const transformedStars = scorpius.stars.map(star => {
            const cosX = Math.cos(rotation.x);
            const sinX = Math.sin(rotation.x);
            const cosY = Math.cos(rotation.y);
            const sinY = Math.sin(rotation.y);
            
            let x = star.x;
            let y = star.y * cosX - star.z * sinX;
            let z = star.y * sinX + star.z * cosX;
            
            let tx = x * cosY + z * sinY;
            
            return {
                ...star,
                screenX: centerX + tx * scale,
                screenY: centerY - y * scale,
                brightness: (6 - star.magnitude) / 6 * starBrightness
            };
        });
        
        ctx.strokeStyle = '#60A0FF';
        ctx.lineWidth = lineWidth * 1.5;
        ctx.globalAlpha = 0.9;
        
        scorpius.lines.forEach(line => {
            const star1 = transformedStars[line[0]];
            const star2 = transformedStars[line[1]];
            
            ctx.beginPath();
            ctx.moveTo(star1.screenX, star1.screenY);
            ctx.lineTo(star2.screenX, star2.screenY);
            ctx.stroke();
        });
        
        ctx.globalAlpha = 1.0;
        transformedStars.forEach(star => {
            const size = (6 - star.magnitude) * starSize * 1.2;
            const twinkleFactor = twinkling ? 0.7 + 0.3 * Math.sin(Date.now() / 200 + star.x + star.y) : 1.0;
            const brightness = star.brightness * twinkleFactor;
            
            const gradient = ctx.createRadialGradient(
                star.screenX, star.screenY, 0,
                star.screenX, star.screenY, size * 2
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${brightness})`);
            gradient.addColorStop(0.7, `rgba(200, 220, 255, ${brightness * 0.5})`);
            gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(star.screenX, star.screenY, size * 2, 0, Math.PI * 2);
            ctx.fill();
            
            if (star.name === "Débora Paixão") {
                ctx.fillStyle = `rgba(255, 100, 100, ${brightness})`;
            } else {
                ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
            }
            
            ctx.beginPath();
            ctx.arc(star.screenX, star.screenY, size * 0.8, 0, Math.PI * 2);
            ctx.fill();
            
            star.size = size;
            star.screenX = star.screenX;
            star.screenY = star.screenY;
        });
    };

    const handleMouseMove = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        if (isDragging) {
            setRotation(prev => ({
                x: Math.max(-Math.PI/2, Math.min(Math.PI/2, prev.x + (e.movementY * 0.01))),
                y: prev.y + (e.movementX * 0.01)
            }));
        }
        
        const stars = scorpius.stars.map(star => {
            const scale = 3 * zoom;
            return {
                ...star,
                screenX: canvas.width / 2 + star.x * scale,
                screenY: canvas.height / 2 - star.y * scale,
                size: (6 - star.magnitude) * starSize * 1.2
            };
        });
        
        const hovered = stars.find(star => {
            const distance = Math.sqrt(
                Math.pow(mouseX - star.screenX, 2) +
                Math.pow(mouseY - star.screenY, 2)
            );
            return distance < star.size * 1.5;
        });
        
        setHoveredStar(hovered || null);
    };

    const handleWheel = (e) => {
        e.preventDefault();
        setZoom(prev => Math.max(0.8, Math.min(prev - e.deltaY * 0.001, 2.5)));
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#03051A] to-[#0C1442]">
             <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#03051A] to-[#0C1442]">
            {/* Elemento de áudio oculto */}
            <audio ref={audioRef} loop src={Espacial} />
            
            {/* ... (mantenha todo o conteúdo existente) ... */}

            {/* Controle de Áudio */}
            <div className="fixed top-4 right-20 z-50 flex items-center">
                {showVolumeControl && (
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-24 h-1.5 bg-[rgba(100,150,255,0.2)] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#60A0FF] mr-2"
                    />
                )}
                
                <button 
                    onClick={toggleMute}
                    className="w-8 h-8 flex items-center justify-center text-[#A0C0FF] hover:text-white"
                >
                    {volume === 0 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a7.975 7.975 0 015.657 2.343m0 0a7.975 7.975 0 010 11.314m-11.314 0a7.975 7.975 0 010-11.314m0 0a7.975 7.975 0 015.657-2.343" />
                        </svg>
                    )}
                </button>
                
                <button 
                    onClick={togglePlayPause}
                    className="w-8 h-8 flex items-center justify-center ml-2 text-[#A0C0FF] hover:text-white"
                >
                    {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                </button>
                
                <button 
                    onClick={() => setShowVolumeControl(!showVolumeControl)}
                    className="w-8 h-8 flex items-center justify-center ml-2 text-[#A0C0FF] hover:text-white"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m0 0l-2.122 2.121M12 6a7.975 7.975 0 015.657 2.343m0 0l-2.121 2.121m0 0l-2.121 2.121m2.121-8.485a7.975 7.975 0 00-5.657-2.343m0 0l2.122 2.121M12 18a7.975 7.975 0 01-5.657-2.343m0 0l2.121-2.121m0 0l2.121-2.121" />
                    </svg>
                </button>
            </div>
        </div>
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full cursor-grab active:cursor-grabbing"
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => {
                    setIsDragging(false);
                    setHoveredStar(null);
                }}
                onWheel={handleWheel}
            />
            
            {/* Info Panel - Hidden on mobile */}
            <div className="hidden lg:block absolute top-8 left-8 bg-[rgba(5,10,30,0.85)] text-[#E0E0FF] p-1 rounded-xl max-w-[28rem] border border-[rgba(100,150,255,0.2)] shadow-lg backdrop-blur-sm">
                <h1 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A0C0FF]">
                    {scorpius.name}
                </h1>
                <div className="text-base leading-relaxed mb-6 text-[#D0D0FF]">
                    {scorpius.description}
                </div>
                <h2 className="text-xl font-semibold mb-2 text-[#A0C0FF] border-b border-[rgba(100,150,255,0.3)] pb-1">
                    Mensagem de Amor
                </h2>
                <div className="text-[0.95rem] leading-relaxed text-[#C0C0FF]">
                    {scorpius.mythology}
                </div>
                
                {hoveredStar && (
                    <div className="mt-6 pt-4 border-t border-[rgba(100,150,255,0.3)]">
                        <h3 className="text-xl text-white mb-1">{hoveredStar.name}</h3>
                        <p className="text-[0.9rem] text-[#B0B0FF]">Magnitude: {hoveredStar.magnitude}</p>
                    </div>
                )}
            </div>
            
            {/* Controls - Collapsible on mobile */}
            <div className={`absolute bottom-4 left-8 bg-[rgba(5,10,30,0.85)] text-[#E0E0FF] p-6 rounded-xl border border-[rgba(100,150,255,0.2)] shadow-lg backdrop-blur-sm
                ${window.innerWidth <= 768 ? (showControls ? 'block' : 'hidden') : 'block'}`}>
                <div className="mb-5">
                    <label className="block mb-2 text-[0.95rem] text-[#C0C0FF]">Tamanho: {starSize.toFixed(1)}</label>
                    <input
                        type="range"
                        min="0.5"
                        max="3"
                        step="0.1"
                        value={starSize}
                        onChange={(e) => setStarSize(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-[rgba(100,150,255,0.2)] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#60A0FF]"
                    />
                </div>
                
                <div className="mb-5">
                    <label className="block mb-2 text-[0.95rem] text-[#C0C0FF]">Brilho: {starBrightness.toFixed(1)}</label>
                    <input
                        type="range"
                        min="0.5"
                        max="3"
                        step="0.1"
                        value={starBrightness}
                        onChange={(e) => setStarBrightness(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-[rgba(100,150,255,0.2)] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#60A0FF]"
                    />
                </div>
                
                <div className="mb-5">
                    <label className="block mb-2 text-[0.95rem] text-[#C0C0FF]">Linhas: {lineWidth.toFixed(1)}</label>
                    <input
                        type="range"
                        min="0.5"
                        max="5"
                        step="0.1"
                        value={lineWidth}
                        onChange={(e) => setLineWidth(parseFloat(e.target.value))}
                        className="w-full h-1.5 bg-[rgba(100,150,255,0.2)] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#60A0FF]"
                    />
                </div>
                
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="twinkling"
                        checked={twinkling}
                        onChange={(e) => setTwinkling(e.target.checked)}
                        className="mr-3"
                    />
                    <label htmlFor="twinkling" className="text-[0.95rem] text-[#C0C0FF] cursor-pointer">Cintilação</label>
                </div>
            </div>
            
            {/* Toggle Button for Mobile */}
            {window.innerWidth <= 768 && (
                <button 
                    onClick={() => setShowControls(!showControls)}
                    className="fixed bottom-20 right-4 w-12 h-12 bg-[rgba(100,150,255,0.7)] rounded-full flex items-center justify-center z-50 cursor-pointer border-none text-white text-xl"
                >
                    {showControls ? '×' : '☰'}
                </button>
            )}
            
            {/* Instructions - Hidden on mobile */}
            <div className="hidden lg:flex flex-col items-center absolute bottom-8 right-8 bg-[rgba(5,10,30,0.85)] text-[#A0C0FF] px-5 py-3 rounded-full text-sm border border-[rgba(100,150,255,0.2)] shadow-md backdrop-blur-sm">
                ⭐ Arraste para rotacionar | Scroll para zoom
                <div className="flex flex-row mt-3">
                    <button 
                        onClick={handleNavigation}
                        className="cursor-pointer h-12 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-[#1e3a8a] via-[#1d4ed8] to-[#06b6d4] shadow transition-all duration-300 border-none outline-none relative overflow-hidden hover:from-[#0891b2] hover:via-[#1e40af] hover:to-[#0c4a6e] hover:shadow-lg hover:scale-105 active:scale-95"
                    >
                        Voltar
                    </button>
                    <button 
                        onClick={handleNavigation2}
                        className="cursor-pointer h-12 px-6 py-3 ml-2 w-40 font-bold text-white rounded-lg overflow-hidden relative transition-all duration-500 shadow bg-gradient-to-r from-[#0B1938] via-[#1A3A8F] to-[#0E2A53] hover:from-[#1A3A8F] hover:via-[#0B1938] hover:to-[#1A3A8F] hover:shadow-[0_0_15px_#3B82F6] active:scale-95"
                    >
                        Continuar
                    </button>
                </div>
            </div>
            
            {/* Mobile Buttons */}
            <div className="lg:hidden fixed bottom-4 left-4 right-4 flex justify-between">
                <button 
                    onClick={handleNavigation}
                    className="cursor-pointer h-12 px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-[#1e3a8a] via-[#1d4ed8] to-[#06b6d4] shadow transition-all duration-300 border-none outline-none relative overflow-hidden hover:from-[#0891b2] hover:via-[#1e40af] hover:to-[#0c4a6e] hover:shadow-lg hover:scale-105 active:scale-95"
                >
                    Voltar
                </button>
                <button 
                    onClick={handleNavigation2}
                    className="cursor-pointer h-12 px-4 py-2 ml-2 font-bold text-white rounded-lg overflow-hidden relative transition-all duration-500 shadow bg-gradient-to-r from-[#0B1938] via-[#1A3A8F] to-[#0E2A53] hover:from-[#1A3A8F] hover:via-[#0B1938] hover:to-[#1A3A8F] hover:shadow-[0_0_15px_#3B82F6] active:scale-95"
                >
                    Continuar
                </button>
            </div>
        </div>
    );
}

export default Estrelinha;