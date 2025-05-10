import Brilho from '../images/brilhante1.png';
import Linha from '../images/Line6.png';
import { useNavigate } from 'react-router-dom';

function Inicio() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/estrelas/nomear');
    };

    return (
        <section className='relative w-full min-h-screen'>
           
            <div className="bg-cover bg-no-repeat bg-[url('./pages/estrelas/images/BackgoundEstrelas2.jpg')] bg-center w-full h-[100vh] min-h-[600px] flex flex-col items-center justify-center">
                
               
                <div className="text-center px-4">
                    <h1 className="text-amber-50 text-4xl sm:text-5xl md:text-6xl font-medium mb-4">
                        Declare seu amor em <br className="hidden sm:block" /> uma estrela
                    </h1>
                    <p className="text-amber-50 text-lg sm:text-xl md:text-2xl">
                        Registre um brilho eterno!
                    </p>
                </div>
                
              
                <button 
                    onClick={handleNavigation} 
                    className="
                        relative
                        text-amber-50 
                        text-base sm:text-lg
                        bg-[linear-gradient(to_right,#0a0e2a_0%,#1a1b4b_30%,#2e1b5e_70%,#3d1b6e_100%)]
                        w-40 sm:w-48 md:w-56
                        h-12 sm:h-14
                        flex items-center justify-center gap-2
                        rounded-full
                        mt-12 sm:mt-16 md:mt-20
                        hover:bg-[linear-gradient(45deg,#3a0ca3_0%,#4361ee_40%,#4cc9f0_100%)]
                        hover:shadow-[0_0_25px_5px_rgba(72,202,228,0.3)]
                        hover:shadow-sky-400/30
                        hover:scale-105
                        active:scale-95
                        transition-all duration-300
                        group
                        overflow-hidden
                        z-20
                        border border-slate-700/50
                        hover:border-cyan-200/30
                    "
                >
                    <img 
                        className='w-6 sm:w-8 h-6 sm:h-8 transition-transform group-hover:scale-110 group-hover:rotate-12' 
                        src={Brilho} 
                        alt="brilho" 
                    />
                    <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_#7bdff2]">
                        Começar
                    </span>
                    
                    <span className="
                        absolute inset-0
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-700
                        bg-[radial-gradient(circle_at_center,rgba(123,223,242,0.15)_0%,transparent_70%)]
                    "></span>
                    
                    <div className="absolute inset-0 overflow-hidden opacity-30 group-hover:opacity-60">
                        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-white shadow-[0_0_4px_1px_white]"></div>
                        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-white shadow-[0_0_4px_1px_white]"></div>
                        <div className="absolute bottom-1/4 left-2/5 w-1 h-1 rounded-full bg-white shadow-[0_0_4px_1px_white]"></div>
                    </div>
                </button>
                
              
                <div className='absolute bottom-0 w-full h-40 sm:h-48 flex justify-center'>
                    <div className='bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,53,71,0.8)_50%,rgba(0,9,71)_100%)] w-full h-full flex justify-center'>
                        <img 
                            className='w-full h-px mt-24 sm:mt-28' 
                            src={Linha} 
                            alt="linha decorativa" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Inicio;