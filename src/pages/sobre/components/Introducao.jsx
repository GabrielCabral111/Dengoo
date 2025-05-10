import Missao from "../images/missao-icon.svg";
import Visao from "../images/visao-icon.svg";
import Valores from "../images/valores-icon.svg";

const Introducao = () => {
    return (
        <section className="mt-20 max-w-[1300px] mx-auto">
            <div className="text-center max-w-lg mx-auto sm:max-w-xl">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-white to-[#A3A3A3] bg-clip-text text-transparent ">Missão, Visão e Valores</h2>
                <div className="mx-auto my-5 sm:my-6 h-[3px] w-64 bg-[linear-gradient(to_right,_rgba(28,77,126,0)_0%,_rgba(28,77,126,1)_46%,_rgba(51,139,228,0)_100%)]"></div>
                <p className="text-[#EAEAEA] text-sm px-5 sm:text-lg">
                    Estes são os princípios fundamentais que impulsionam nosso trabalho e definem quem somos.
                </p>
            </div>

            <div className="mt-20 px-6 flex flex-col gap-10 lg:flex-row">
                <div className="bg-[#5A2F68] border-t-4 flex-1/3 border-[#B290BD] rounded-md p-6 text-white max-w-lg mx-auto">
                    <img src={Missao} alt="Missão" />
                    <h3 className="text-2xl mt-4 sm:text-3xl">Missão</h3>
                    <p className="mt-2 text-sm">Fortalecer os laços afetivos entre pessoas por meio de experiências significativas, emocionantes e personalizadas.</p>
                </div>

                <div className="bg-[#204060] border-t-4 flex-1/3 border-[#6399BA] rounded-md p-6 text-white max-w-lg mx-auto">
                    <img src={Visao} alt="VIsao" />
                    <h3 className="text-2xl mt-4 sm:text-3xl">Visão</h3>
                    <p className="mt-2 text-sm">Ser referência no uso da tecnologia para aproximar pessoas e transformar relações afetivas em experiências memoráveis, no Brasil e no mundo.</p>
                </div>

                <div className="bg-[#7B1940] border-t-4 flex-1/3 border-[#C37091] rounded-md p-6 text-white max-w-lg mx-auto">
                    <img src={Valores} alt="Valores" />
                    <h3 className="text-2xl mt-4 sm:text-3xl">Valores</h3>
                    <p className="mt-2 text-sm">Valorizamos cada história como única. Com empatia, autenticidade e sensibilidade. Entregamos experiências que fortalecem laços  de verdade.</p>
                </div>
            </div>
        </section>
    )
}

export default Introducao