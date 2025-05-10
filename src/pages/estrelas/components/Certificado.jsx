import { useState } from 'react';
import Header from "./Header";
import Certificado1 from '../images/CertificadoOficial.png';
import ModalImage from '../images/CertificadoOficial.png'; 
import { useNavigate } from 'react-router-dom';

function Certificado() {
    
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/estrelas/paga');
    };
    
    const handleNavigation2 = () => {
        navigate('/estrelas/nomear');
    };
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Header />
            <div className="bg-cover bg-no-repeat overflow-hidden bg-[url('./pages/estrelas/images/background-stars.png')] bg-[#030D29] flex justify-center items-center">
                <div className="bg-[#DEE8FF] flex flex-col lg:flex-row mb-30 mt-5 lg:gap-30 items-center rounded-[20px] w-90 sm:w-160 lg:w-300 h-auto lg:h-165 ml-5 p-5">
                    <img className="w-70 mt-5 lg:w-110 lg:ml-20" src={Certificado1} alt="certificado" />
                    <div className="text-[#270047] items-center flex flex-col w-full">
                        <p className="font-bold mt-5 lg:text-2xl text-xl">Certificado</p>
                        <p className="font-bold mr-55 lg:mr-93 lg:text-[20px] ">Nome</p>
                        <textarea className="bg-[#3B75A7] lg:w-120 outline-none resize-none rounded-[20px] h-10 w-70 text-center text-white " name="Nome" ></textarea>
                        <p className="font-bold mr-45 lg:mr-80 mt-2 lg:text-[20px]">Mensagem</p>
                        <textarea className="bg-[#3B75A7] lg:w-120 outline-none resize-none rounded-[20px] h-40 w-70 text-center text-white " name="Mensagem" ></textarea>
                        <p className="font-bold mr-40 lg:mr-73 mt-2 lg:text-[20px]" >Data especial</p>
                        <textarea className="bg-[#3B75A7] lg:w-120 outline-none resize-none rounded-[20px] h-10 w-70 text-center text-white " name="Data especial" ></textarea>
                        <p className="font-bold mt-5 text-xl lg:text-2xl lg:text-[20px]">Envio</p>
                        <p className="font-bold mr-55 lg:mr-92 lg:text-[20px]">E-mail</p>
                        <textarea className="bg-[#3B75A7] lg:w-120 outline-none resize-none rounded-[20px] h-10 w-70 text-center text-white " name="E-mail" ></textarea>
                        <p className="font-bold mr-50 lg:mr-86 mt-2 lg:text-[20px]">Telefone</p>
                        <textarea className="bg-[#3B75A7] lg:w-120 outline-none resize-none rounded-[20px] h-10 w-70 text-center text-white " name="Telefone" ></textarea>
                        <div className='flex flex-row justify-center items-center'>
                        <button onClick={handleNavigation2} className="
                              cursor-pointer
                              h-12
                              ml-10
                              px-6 py-3
                              rounded-lg
                              font-medium
                              text-white
                              bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500
                              shadow-lg
                              transition-all
                              duration-300
                              hover:bg-gradient-to-r hover:from-cyan-600 hover:via-blue-800 hover:to-blue-950
                              hover:shadow-xl
                              hover:scale-105
                              active:scale-95
                              focus:outline-none focus:ring-2 focus:ring-cyan-400
                              ">
                              Voltar
                          </button>
                        
                        <button 
                            onClick={openModal}
                            className="
                                ml-5
                                mt-5
                                mb-5
                                relative
                                text-amber-50 
                                px-6 py-3
                                rounded-lg
                                font-medium
                                bg-[linear-gradient(to_right,#0a0e2a_0%,#1a1b4b_30%,#2e1b5e_70%,#3d1b6e_100%)]
                                hover:bg-[linear-gradient(to_right,#0a0e2a_0%,#1a1b4b_50%,#3a0ca3_100%)]
                                transition-all 
                                duration-300
                                shadow-md
                                hover:shadow-[0_0_15px_rgba(58,12,163,0.5)]
                                overflow-hidden
                                group
                            "
                        >
                            <span className="relative z-10">Concluído</span>
                            <span className="
                                absolute 
                                inset-0 
                                bg-[radial-gradient(circle_at_center,rgba(123,223,242,0.15)_0%,transparent_70%)] 
                                opacity-0 
                                group-hover:opacity-100
                                transition-opacity 
                                duration-500
                            "></span>
                        </button>
                        </div>
                       
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
                    <div className="bg-[#DEE8FF] rounded-[20px] p-6 max-w-xl w-full h-175 relative">
                        {/* Botão de fechar */}
                        <button 
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-[#270047] hover:text-[#3a0ca3] text-2xl font-bold"
                        >
                            X
                        </button>
                        
                        {/* Conteúdo do Modal */}
                        <div className="flex flex-col items-center">
                            <h2 className="text-[#270047] font-bold text-2xl mb-6">Certificado Gerado com Sucesso!</h2>
                            
                            {/* Imagem central */}
                            <div className="my-6 flex justify-center">
                                <img 
                                    src={ModalImage} 
                                    alt="Certificado Completo" 
                                    className="max-h-[500px] w-110 rounded-lg"
                                />
                            </div>
                            
                            {/* Botão de ação */}
                            <button
                                onClick={handleNavigation}
                                className="
                                    mt-4
                                    mb-2
                                    relative
                                    text-amber-50 
                                    px-8 py-3
                                    rounded-lg
                                    font-medium
                                    bg-[linear-gradient(to_right,#0a0e2a_0%,#1a1b4b_30%,#2e1b5e_70%,#3d1b6e_100%)]
                                    hover:bg-[linear-gradient(to_right,#0a0e2a_0%,#1a1b4b_50%,#3a0ca3_100%)]
                                    transition-all 
                                    duration-300
                                    shadow-md
                                    hover:shadow-[0_0_15px_rgba(58,12,163,0.5)]
                                    overflow-hidden
                                    group
                                "
                            >
                                <span className="relative z-10">Continuar</span>
                                <span className="
                                    absolute 
                                    inset-0 
                                    bg-[radial-gradient(circle_at_center,rgba(123,223,242,0.15)_0%,transparent_70%)] 
                                    opacity-0 
                                    group-hover:opacity-100
                                    transition-opacity 
                                    duration-500
                                "></span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Certificado;