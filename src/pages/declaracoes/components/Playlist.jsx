// import { useCallback, useState } from "react";
import { Play, SkipBack, SkipForward } from "lucide-react";
import "../styles.css";
import tp1 from "../images/ferramenta-caneta.png"
import tp2 from "../images/enviar.png"
import tp3 from "../images/cadeado.png"
import tp4 from "../images/relogio.png"
import musica from "../images/musica.png"
import { Link } from "react-router";

const Playlist = () => {
    return (
        <section className=" text-center m-auto flex justify-center bg-[url('pages/declaracoes/images/playlist.png')] bg-cover bg-center pt-20  ">
            <div className=" absolute z-5   lg:w-100 lg:h-20 flex flex-col justify-end items-center text-center translate-x-0 md:translate-x-2 translate-y-4 ">
                <button className="relative bg-[#5C0469] lg:w-50 lg:h-13 px-5 py-2 rounded-lg text-white ">
                    <img src={musica} alt="Coracao com flecha" className="inline-block mr-2 w-8 " />
                    Carta de Amor
                </button>

            </div>

            <div className="relative  h-screen w-full flex flex-col justify-center items-center md:flex-row md:justify-center md:items-cente pt-9">


                <div className=" relative custom-gradient2 w-8/10 h-5/10 lg:w-6/10 mt-2 md:ml-9 rounded-2xl flex justify-center items-center text-center  xl:left-20 xl:w-200 lg:h-100 ">
                    <div className="bg-[#aaaaaab2] w-8/10 h-80 rounded-2xl flex flex-col justify-center items-center p-6 space-y-4 shadow-lg">
                        {/* Área superior: Capa e Lista */}
                        <div className="flex w-full">
                            {/* Capa */}
                            <div className="w-1/2 flex justify-center items-center">
                                <div className="bg-gray-300 w-40 h-40 rounded-xl shadow-inner flex items-center justify-center text-gray-600 text-xl">
                                    🎵 Capa
                                </div>
                            </div>

                            {/* Lista de músicas */}
                            <div className="w-1/2 flex flex-col justify-evenly space-y-2 pl-4 ">
                                <div className="bg-white rounded-xl p-2 flex items-center shadow">
                                    <div className="w-8 h-8 bg-purple-800 rounded mr-2"></div>
                                    <span className="text-sm text-gray-700">Música 1</span>
                                </div>
                                <div className="bg-white rounded-xl p-2 flex items-center shadow">
                                    <div className="w-8 h-8 bg-purple-800 rounded mr-2"></div>
                                    <span className="text-sm text-gray-700">Música 2</span>
                                </div>
                                <div className="bg-white rounded-xl p-2 flex items-center shadow">
                                    <div className="w-8 h-8 bg-purple-800 rounded mr-2"></div>
                                    <span className="text-sm text-gray-700">Música 3</span>
                                </div>
                            </div>
                        </div>

                        {/* Controles de player */}
                        <div className="w-full flex justify-center items-center space-x-4 mt-4">
                            <button className="text-gray-900">
                                <SkipBack size={32} />
                            </button>
                            <button className="bg-gray-900 text-white rounded-full w-12 h-12 flex justify-center items-center shadow">
                                <Play size={28} />
                            </button>
                            <button className="text-gray-900">
                                <SkipForward size={32} />
                            </button>
                        </div>
                    </div>


                </div>



                <div className="mt-10 max-w-[600px] mx-auto lg:flex lg:justify-between lg:max-w-[800px] p-5">
                    <div className="flex flex-col lg:flex-1/2">
                        <div className="grid grid-cols-2 gap-5 justify-center lg:grid-cols-1 ">
                            <div className="flex items-center gap-2">
                                <div className="bg-gradient-to-r from-[#F2A0FF] via-[#8A719E] to-[#763BA7] w-max p-2 rounded-full">
                                    <img src={tp1} alt="Cam" className="w-7 h-7" />
                                </div>
                                <p className="font-medium text-sm md:text-[20px] text-white">Formatos Criativos</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="bg-gradient-to-r from-[#F2A0FF] via-[#8A719E] to-[#763BA7] w-max p-2 rounded-full">
                                    <img src={tp2} alt="Checked" className="w-7 h-7" />
                                </div>
                                <p className="font-medium text-sm md:text-[20px] text-white">Botões interativos</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="bg-gradient-to-r from-[#F2A0FF] via-[#8A719E] to-[#763BA7] w-max p-2 rounded-full">
                                    <img src={tp3} alt="Clock" className="w-7 h-7" />
                                </div>
                                <p className="font-medium text-sm md:text-[20px] text-white">Entrega Programada</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="bg-gradient-to-r from-[#F2A0FF] via-[#8A719E] to-[#763BA7] w-max p-2 rounded-full">
                                    <img src={tp4} alt="Share" className="w-7 h-7" />
                                </div>
                                <p className="font-medium text-sm md:text-[20px] text-white">Compartilhe quando quiser</p>
                            </div>
                        </div>

                        <Link to="/declaracoes/playlist" className="relative 
                                 py-7 flex flex-col items-center justify-center lg:flex-1/2 translate-x-27 lg:translate-x-0  bg-gradient-to-r from-blue-500 to-purple-600 h-13  md:py-4 w-50 lg:h- rounded-3xl text-[#ffff] font-bold mt-4 ">
                            Criar Playlist
                        </Link>
                    </div>
                </div>
            </div>
        </ section>
    )
}

export default Playlist