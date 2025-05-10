
import "../styles.css";
import tp1 from "../images/ferramenta-caneta.png"
import tp2 from "../images/enviar.png"
import tp3 from "../images/cadeado.png"
import tp4 from "../images/relogio.png"
import carta from "../images/correspondencia.png"
import { Link } from "react-router";

const Carta = () => {
    return (
        <section className=" text-center m-auto flex justify-center bg-[url('pages/declaracoes/images/rosa.png')] bg-cover bg-center pt  ">
            <div className=" w-full text-center m-auto flex justify-center mt-15 md:mt-30   ">
                <div className=" absolute z-5 lg:w-100 lg:h-20 flex flex-col justify-center items-center  text-center translate-x-0 -translate-y-4 md:translate-x-4 md:translate-y-4 mt-5">
                    <h3 className=" relativemt-5 text-white lg:text-2xl font-medium sm:text-lg z-20 ">O que você quer criar hoje?</h3>
                    <button className="relative bg-[#5C0469] w-50 h-11 text-[13px] -translate-y-4 lg:w-50 lg:h-13 px-5 py-2 rounded-lg text-white mt-5 md:translate-y-0 ">
                        <img src={carta} alt="Coracao com flecha" className="inline-block mr-2 w-8 " />
                        Carta de Amor
                    </button>
                </div>
                <div className="relative  m-auto min-h-screen w-full flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center pt-10   ">
                    <div className="relative custom-gradient w-8/10 h-80 mt-2 md:ml-9 max-w-130
                     max-h-90 rounded-2xl flex justify-center items-center text-center md:rotate-6 lg:left-20 lg:w-200 lg:h-100 ">
                        <div className="bg-[#F0DEFF] w-8/10 h-65 rounded-2xl flex flex-col justify-center items-center lg:text-justify lg:justify-center">
                            <h3 className="text-2xl text-[#000] font-medium ">Para minha princesa</h3>
                            <p className="text-[11px] p-2 md:p-4 l font-medium lg:text-[13px]   text-[#000] "> Nos seus braços, encontro paz e felicidade, querida. Você é meu apoio,  minha alegria e meu amor verdadeiro, simplesmente a namorada perfeita!  Eu lhe agradeço, não só hoje, mas sempre, por cada momento incrível que  compartilhamos, por saber que não estou só, que ao seu lado eu pertenço e tudo é vida neste mundo. Sem você eu jamais iria descobrir quão bela  pode ser a vida. Te amo mais do que você pode imaginar. </p>
                        </div>
                    </div>
                    <div className="mt-10 max-w-[600px] mx-auto lg:flex lg:justify-between lg:max-w-[800px] p-5 ">
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
                            <Link to="/declaracoes/cartas/capa" className="relative
                         py-7 flex flex-col items-center justify-center lg:flex-1/2 bg-gradient-to-r from-blue-500 to-purple-600 h-13  md:py-4 w-50 lg:h- rounded-3xl text-[#ffff] font-bold mt-4 ">
                                Criar Minha Carta
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </ section>
    )
}

export default Carta