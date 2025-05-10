import CoracaoComFlecha from "../images/coracao-com-flecha.svg";
import CamRecorder from "../images/cam-recorder-icon.svg";
import Checked from "../images/checked-icon.svg";
import Clock from "../images/clock-icon.svg";
import Share from "../images/share-icon.svg";
import Hearts from "../images/hearts.svg";
import { Link } from "react-router";

const PedidoNamoro = () => {
    return (
        <section className="bg-gradient-to-b from-[#750B34] via-[#862C4E] to-[#4E1129] min-h-screen py-20 px-6">
            <div className="text-center">
                <p className="mt-5 font-medium text-white sm:text-lg lg:text-2xl">Peça sua amada(o) em namoro de um jeito único!</p>
                <div className="bg-[#5C0469] inline-block px-5 py-2 rounded-lg text-white mt-5">
                    <img src={CoracaoComFlecha} alt="Coracao com flecha" className="inline-block mr-2 w-8" />
                    Pedido de Namoro
                </div>
            </div>

            <div className="mt-10 max-w-[600px] mx-auto lg:flex lg:justify-between lg:max-w-[800px]">
                <div className="flex flex-col lg:flex-1/2">
                    <div className="grid grid-cols-2 gap-5 justify-center lg:grid-cols-1 ">
                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-r from-[#F2A0FF] via-[#8A719E] to-[#763BA7] w-max p-2 rounded-full">
                                <img src={CamRecorder} alt="Cam" className="w-7 h-7" />
                            </div>
                            <p className="font-medium text-sm md:text-[20px] text-white">Formatos Criativos</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-r from-[#F2A0FF] via-[#8A719E] to-[#763BA7] w-max p-2 rounded-full">
                                <img src={Checked} alt="Checked" className="w-7 h-7" />
                            </div>
                            <p className="font-medium text-sm md:text-[20px] text-white">Botões interativos</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-r from-[#F2A0FF] via-[#8A719E] to-[#763BA7] w-max p-2 rounded-full">
                                <img src={Clock} alt="Clock" className="w-7 h-7" />
                            </div>
                            <p className="font-medium text-sm md:text-[20px] text-white">Entrega Programada</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-r from-[#F2A0FF] via-[#8A719E] to-[#763BA7] w-max p-2 rounded-full">
                                <img src={Share} alt="Share" className="w-7 h-7" />
                            </div>
                            <p className="font-medium text-sm md:text-[20px] text-white">Compartilhe quando quiser</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <Link to="/declaracoes/pedido/capa" className="relative 
                                 py-7 flex flex-col items-center justify-center lg:flex-1/2 bg-gradient-to-r from-blue-500 to-purple-600 h-13  md:py-4 w-50 lg:h- rounded-3xl text-[#ffff] font-bold mt-4 ">
                            Criar Pedido
                        </Link>

                    </div>
                </div>

                <div className="relative custom-gradient bg-cover bg-no-repeat bg-center mt-10 rounded-lg py-7 flex flex-col items-center lg:flex-1/2">
                    <img src={Hearts} alt="Hearts" />
                    <h3 className="text-white text-xl my-4">Quer namorar comigo</h3>
                    <div className="flex items-center gap-4">
                        <button className="bg-[#763BA7] px-7 py-2 rounded-full text-white">Sim</button>
                        <button className="bg-[#9A67B2] px-7 py-2 rounded-full text-white">Não</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PedidoNamoro