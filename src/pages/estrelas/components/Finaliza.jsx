import Header from "./Header"
import Seta from '../images/Seta.png'
import { useNavigate } from 'react-router-dom';

function Finaliza(){
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
    };

    const handleNavigation2 = () => {
        navigate('/QR');
    };

    return(
        <div className="min-h-screen bg-cover bg-no-repeat bg-[url('./pages/estrelas/images/background-stars.png')] bg-[#030D29]">
            <Header/>
            <div className="container mx-auto px-4 py-12 flex flex-col justify-center items-center min-h-[calc(100vh-80px)]">
                <div className="max-w-4xl w-full flex flex-col items-center gap-8 lg:gap-12 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:w-400 font-bold leading-tight bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                        Parabéns você registrou uma estrela! <br />
                        Agora é só enviar para seu Dengoo
                    </h1>
                    
                    <img 
                        className="h-20 sm:h-24 md:h-28 lg:h-32 animate-bounce" 
                        src={Seta} 
                        alt="seta" 
                    />
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-lg justify-center">
                        <button 
                            onClick={handleNavigation}
                            className="
                                relative
                                text-white
                                px-6 py-3
                                sm:px-8 sm:py-3
                                rounded-xl
                                font-medium
                                text-base
                                sm:text-lg
                                bg-[linear-gradient(135deg,#0a0e2a_0%,#1a1b4b_30%,#1883FE_100%)]
                                hover:bg-[linear-gradient(135deg,#0a0e2a_0%,#1a1b4b_50%,#00F5FF_100%)]
                                transition-all 
                                duration-300
                                shadow-lg
                                hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]
                                overflow-hidden
                                group
                                border border-[#1883FE]/30
                                hover:border-[#00F5FF]/50
                                w-full
                                sm:w-auto
                            "
                        >
                            <span className="relative z-10">Cancelar</span>
                            
                            <span className="
                                absolute 
                                inset-0 
                                bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.1)_0%,transparent_70%)] 
                                opacity-0 
                                group-hover:opacity-100
                                transition-opacity 
                                duration-300
                            "></span>
                        </button>

                        <button 
                            onClick={handleNavigation2}
                            className="
                                relative
                                text-white
                                px-6 py-3
                                sm:px-8 sm:py-3
                                rounded-xl
                                font-medium
                                text-base
                                sm:text-lg
                                bg-[linear-gradient(135deg,#0a0e2a_0%,#1a1b4b_30%,#1883FE_100%)]
                                hover:bg-[linear-gradient(135deg,#0a0e2a_0%,#1a1b4b_50%,#00F5FF_100%)]
                                transition-all 
                                duration-300
                                shadow-lg
                                hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]
                                overflow-hidden
                                group
                                border border-[#1883FE]/30
                                hover:border-[#00F5FF]/50
                                w-full
                                sm:w-auto
                            "
                        >
                            <span className="relative z-10">Enviar Agora</span>
                            
                            <span className="
                                absolute 
                                inset-0 
                                bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.1)_0%,transparent_70%)] 
                                opacity-0 
                                group-hover:opacity-100
                                transition-opacity 
                                duration-300
                            "></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finaliza