import Modelo from "../images/icon-modelo.svg";
import Personalize from "../images/icon-personalize.svg";
import Compartilhe from "../images/icon-compartilhe.svg";

const ComoFunciona = () => {
    return (
        <section className="mt-32 px-6 max-w-[1300px] mx-auto sm:mt-40 lg:mt-52">
            <h2 className="text-center text-white text-3xl font-medium sm:text-4xl md:text-5xl">Como funciona</h2>

            <div className="flex flex-col gap-20 mt-10 lg:flex-row lg:gap-16">
                <div className="bg-gradient-to-t from-[#674474] to-[#151515] rounded-xl rounded-t-none text-center py-8 max-w-[600px] w-full mx-auto">
                    <div className="flex items-center justify-center bg-[#4F235E] w-max rounded-xl mx-auto p-5">
                        <img src={Modelo} alt="Modelo" />
                    </div>

                    <h3 className="text-2xl font-medium text-white mt-5 sm:text-3xl">Escolha um modelo</h3>
                    <p className="text-white max-w-[180px] mx-auto text-md mt-2 sm:text-lg">Selecione o modelo que desejar</p>
                </div>

                <div className="bg-gradient-to-t from-[#1F3A73] to-[#151515] rounded-xl rounded-t-none text-center py-8 max-w-[600px] w-full mx-auto">
                    <div className="flex items-center justify-center bg-[#081F51] w-max rounded-xl mx-auto p-5">
                        <img src={Personalize} alt="Personalize" />
                    </div>

                    <h3 className="text-2xl font-medium text-white mt-5 sm:text-3xl">Personalize</h3>
                    <p className="text-white max-w-[180px] mx-auto text-md mt-2 sm:text-lg">Adicione suas memórias</p>
                </div>

                <div className="bg-gradient-to-t from-[#7B1940] to-[#151515] rounded-xl rounded-t-none text-center py-8 max-w-[600px] w-full mx-auto">
                    <div className="flex items-center justify-center bg-[#4C0C25] w-max rounded-xl mx-auto p-5">
                        <img src={Compartilhe} alt="Compartilhe" />
                    </div>

                    <h3 className="text-2xl font-medium text-white mt-5 sm:text-3xl">Compartilhe</h3>
                    <p className="text-white max-w-[180px] mx-auto text-md mt-2 sm:text-lg">Envie para alguém especial </p>
                </div>
            </div>
        </section>
    )
}

export default ComoFunciona