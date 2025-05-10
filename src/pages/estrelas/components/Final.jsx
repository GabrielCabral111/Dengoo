import Certificado from '../images/certificado2.png'
import Pincel from '../images/pincel.png'
import Estrela from '../images/estrela2.png'
import Gift from '../images/gift2.png'
import Compartilhar from '../images/compartilhar.png'
import Card from '../images/id-card1.png'
import Linha from '../images/Line6.png'
import Guia from '../images/guiaestrela.png'
import Relogio from '../images/relogio.png'
import Cubo from '../images/cubo.png'
import { useNavigate } from 'react-router-dom';

function Final() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/estrelas/galaxy');
    };

    const handleNavigationToNomear = () => {
        navigate('/estrelas/nomear');
    };

    return (
        <div className="relative">

            <section className="bg-[linear-gradient(to_bottom,rgba(17,9,105,0.9)_0%,#0a0438_15%,#11095e_30%,#190f85_45%,#2016ac_60%,#281ed4_75%,#3127fc_90%,#3a30ff_100%)] min-h-[500px] lg:min-h-[700px] flex flex-col justify-center items-center py-12 px-4 sm:py-16 lg:py-20 text-amber-50 relative overflow-hidden">
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-[90%] sm:max-w-[80%] leading-tight mb-8 sm:mb-12'>
                    Já pensou em presentear uma <br className="hidden sm:block" /> pessoa com uma estrela?
                </h1>

                <div className='flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 w-full max-w-[90%] sm:max-w-[80%]'>
                    <img 
                        className='w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto' 
                        src={Certificado} 
                        alt="certificado" 
                    />
                    
                    <div className='flex flex-col gap-4 sm:gap-6 w-full max-w-[400px]'>
                        {[
                            { icon: Pincel, text: "Personalize seu certificado" },
                            { icon: Estrela, text: "Escolha sua estrela em nosso universo" },
                            { icon: Gift, text: "Um presente único para seu Dengoo" },
                            { icon: Compartilhar, text: "Envio fácil e rápido" }
                        ].map((item, index) => (
                            <div key={index} className='flex flex-row items-center gap-3 sm:gap-4'>
                                <img 
                                    className='h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12' 
                                    src={item.icon} 
                                    alt={item.text.toLowerCase()} 
                                />
                                <p className='text-sm sm:text-base md:text-lg'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex justify-center w-full mt-10 sm:mt-14'>
                    <button 
                        onClick={handleNavigationToNomear} 
                        className='
                            flex flex-row gap-3 rounded-[30px] justify-center items-center 
                            text-sm sm:text-base md:text-lg font-bold h-10 sm:h-12 w-[200px] sm:w-[250px]
                            bg-[linear-gradient(to_right,#0F2A98_0%,#1326CB_50%,#1883FE_100%)]
                            relative overflow-hidden
                            transition-all duration-500
                            group
                            hover:bg-[linear-gradient(45deg,#0a0e2e_0%,#1a237e_30%,#283593_60%,#3949ab_100%)]
                            hover:shadow-[0_0_20px_5px_rgba(56,142,255,0.4)]
                            hover:scale-[1.02]
                            border border-transparent
                            hover:border-blue-300
                        '
                    >
                        <div className='
                            bg-[#401265] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                            transition-all duration-300
                            group-hover:bg-[#7b1fa2]
                            group-hover:scale-110
                            z-10
                        '>
                            <img className='h-4 w-4 sm:h-5 sm:w-5' src={Card} alt="card" />
                        </div>
                        <span className='z-10'>Começar</span>
                    </button>
                </div>
            </section>


            <section className="min-h-[600px] sm:min-h-[500px] bg-cover bg-no-repeat bg-[#000737] bg-[url('./pages/estrelas/images/background-stars.png')] py-12 px-4 sm:py-16">
                <div className='flex justify-center'>
                    <div className='w-full max-w-[1200px] h-px bg-gradient-to-r from-transparent via-amber-50/30 to-transparent'></div>
                </div>
                
                <div className='mt-10 sm:mt-16 text-amber-50 flex flex-col items-center'>
                    <h2 className='text-amber-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 sm:mb-12'>
                        Veja sua Estrela
                    </h2>
                    
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 w-full max-w-[90%] sm:max-w-[80%]'>
                        <img 
                            className='rounded-[10px] w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto' 
                            src={Guia} 
                            alt="guia" 
                        />
                        
                        <div className='flex flex-col gap-4 sm:gap-6 w-full max-w-[400px]'>
                            {[
                                { icon: Relogio, text: "Veja a qualquer momento" },
                                { icon: Cubo, text: "Veja um modelo 3D" },
                                { icon: Compartilhar, text: "Envio fácil e rápido" }
                            ].map((item, index) => (
                                <div key={index} className='flex flex-row items-center gap-3 sm:gap-4'>
                                    <img 
                                        className='h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12' 
                                        src={item.icon} 
                                        alt={item.text.toLowerCase()} 
                                    />
                                    <p className='text-sm sm:text-base md:text-lg'>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <button 
                        onClick={handleNavigationToNomear} 
                        className='
                            text-amber-50 mt-10 sm:mt-14
                            bg-[linear-gradient(to_right,#0F2A98_0%,#1326CB_50%,#1883FE_100%)] 
                            w-[160px] sm:w-[200px] h-10 sm:h-12 font-bold rounded-[20px]
                            relative overflow-hidden
                            transition-all duration-500
                            group
                            hover:bg-[linear-gradient(45deg,#0F2A98_0%,#6e0d6e_30%,#c2185b_60%,#ffcc00_100%)]
                            hover:shadow-[0_0_20px_5px_rgba(255,204,0,0.3)]
                            hover:scale-105
                        '
                    >
                        <span className='relative z-10'>Começar</span>
                    </button>
                </div>
            </section>

            {/* Third Section */}
            <section className='min-h-[200px] sm:min-h-[250px] text-amber-50 flex flex-col justify-center items-center py-8 sm:py-12 px-4 bg-[linear-gradient(to_right,#3E48A5_0%,#47CEE3_50%,#292E87_100%)]'>
                <h2 className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 max-w-[90%] sm:max-w-[80%] leading-tight'>
                    Veja pessoas conectadas através <br className="hidden sm:block" /> de estrelas no universo Dengoo
                </h2>

                <div className="relative w-full max-w-[560px] mx-auto">
            <div className="aspect-w-16 aspect-h-9 pb-[56.25%]"> {/* 16:9 aspect ratio container */}
                <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-[10px]"
                src="https://www.youtube.com/embed/I6jcLXLBy2o?si=SeMXCghXpxjI45xZ" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                ></iframe>
                    </div>
                    </div>  
                    <button 
                    onClick={handleNavigation} 
                    className='
                        mt-5
                        text-amber-50 
                        bg-[linear-gradient(to_right,#0F2A98_0%,#1326CB_50%,#1883FE_100%)]
                        w-[160px] sm:w-[200px] h-10 sm:h-12 font-bold rounded-[20px]
                        transition-all duration-300
                        hover:bg-[linear-gradient(to_right,#9C27B0_0%,#673AB7_50%,#3F51B5_100%)]
                        hover:shadow-lg
                        hover:shadow-purple-500/40
                        hover:scale-105
                        border-2
                        border-transparent
                        hover:border-white
                        relative
                        overflow-hidden
                        group
                    '
                >
                    <span className="relative z-10">Universo Dengoo</span>
                </button>
            </section>
        </div>
    )
}

export default Final