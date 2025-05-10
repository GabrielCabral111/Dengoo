import Estrela from "../images/produto-estrela.svg";
import Coracao from "../images/produto-declaracao.svg";
import Tunel from "../images/produto-tunel.svg";
import { Link } from "react-router";

const Produtos = () => {
    return (
        <section className="mt-20 relative z-10 px-6 flex flex-col gap-20 max-w-[1300px] mx-auto lg:px-10 lg:gap-32 lg:mt-32">
            <div className="flex flex-col items-center gap-8 lg:pl-12 text-center sm:gap-12 lg:flex-row lg:gap-[70px]">
                <div className="bg-[#2F2987] relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rotate-45 rounded-2xl">
                    <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                        <img
                            src={Estrela}
                            alt="Estrela"
                            className="w-11/12"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="text-xl sm:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-white to-[#A3A3A3] bg-clip-text text-transparent max-w-xs sm:max-w-sm lg:max-w-md lg:text-left">
                        Dedique uma Estrela Real a alguém especial
                    </p>
                    <Link to="/estrelas" className="text-center lg:text-center">
                        <button
                                className="mt-8 w-max relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                            >
                                <span
                                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                                >
                                </span>
                                <span
                                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 sm:text-lg font-medium text-white backdrop-blur-3xl gap-2 undefined"
                                >
                                    Conheça o produto
                                </span>
                            </button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-center lg:pr-12 gap-8 text-center sm:gap-12 lg:flex-row-reverse lg:gap-[40px]">
                <div className="bg-[#7B1940] relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 flex items-center justify-center rounded-3xl sm:rounded-4xl">
                    <img
                        src={Coracao}
                        alt="Coração"
                        className="w-9/12"
                    />
                </div>

                <div className="flex flex-col">
                    <p className="text-xl sm:text-3xl lg:text-4xl font-medium bg-gradient-to-l from-white to-[#A3A3A3] bg-clip-text text-transparent max-w-xs sm:max-w-sm lg:max-w-md lg:text-left">
                        Eternize seu sentimento em uma carta única
                    </p>

                    <Link to="/declaracoes"  className="text-center lg:text-center">
                        <button
                            className="mt-8 w-max relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                        >
                            <span
                                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                            >
                            </span>
                            <span
                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 sm:text-lg font-medium text-white backdrop-blur-3xl gap-2 undefined"
                            >
                                Conheça o produto
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Produtos