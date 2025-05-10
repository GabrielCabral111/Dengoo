import Facebook from "../images/icon-face.svg";
import Instagram from "../images/icon-insta.svg";
import Linkedin from "../images/icon-linkedin.svg";
import Gradient from "../images/gradient.svg"

const Equipe = () => {
    return (
        <section className="mt-32 lg:mt-40 bg-[#111035]">
            <img src={Gradient} alt="gradient" className="relative bottom-10 z-50 w-full"  />
            <div className="max-w-[1300px] mx-auto p-5">
                <div className="text-center max-w-lg mx-auto sm:max-w-xl">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-white to-[#A3A3A3] bg-clip-text text-transparent ">Equipe Dengoo</h2>
                    <div className="mx-auto my-5 sm:my-6 h-[3px] w-64 bg-[linear-gradient(to_right,_rgba(135,96,130,0)_0%,_#875e96_46%,_rgba(135,96,130,0)_100%)]"></div>
                </div>

                <div className="mt-20 grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-4 gap-14">
                    <div className="bg-gray-900 p-5 py-6 rounded-sm">
                        <div className="bg-[url('/src/pages/sobre/images/gabriel-de-alencar.jpg')] bg-cover bg-center h-52 w-52 mx-auto rounded-sm"></div>
                        <div className="mt-5">
                            <span className="text-center w-full inline-block text-lg text-white">Gabriel de Alencar</span>
                            <div className="flex gap-4 justify-center mt-2">
                                <img src={Instagram} alt="Instagram" className="cursor-pointer icon-rede-social" />
                                <img src={Linkedin} alt="Linkedin" className="cursor-pointer icon-rede-social" />
                                <img src={Facebook} alt="Facebook" className="cursor-pointer icon-rede-social" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 p-5 py-6 rounded-sm">
                        <div className="bg-[url('/src/pages/sobre/images/rafaela.jpg')] bg-cover bg-center h-52 w-52 mx-auto rounded-sm"></div>
                        <div className="mt-5">
                            <span className="text-center w-full inline-block text-lg text-white">Rafaela Leite</span>
                            <div className="flex gap-4 justify-center mt-2">
                                <img src={Instagram} alt="Instagram" className="cursor-pointer icon-rede-social" />
                                <img src={Linkedin} alt="Linkedin" className="cursor-pointer icon-rede-social" />
                                <img src={Facebook} alt="Facebook" className="cursor-pointer icon-rede-social" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 p-5 py-6 rounded-sm">
                        <div className="bg-[url('/src/pages/sobre/images/heverton.jpg')] bg-cover bg-center h-52 w-52 mx-auto rounded-sm"></div>
                        <div className="mt-5">
                            <span className="text-center w-full inline-block text-lg text-white">Heverton Nascimento</span>
                            <div className="flex gap-4 justify-center mt-2">
                                <img src={Instagram} alt="Instagram" className="cursor-pointer icon-rede-social" />
                                <img src={Linkedin} alt="Linkedin" className="cursor-pointer icon-rede-social" />
                                <img src={Facebook} alt="Facebook" className="cursor-pointer icon-rede-social" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 p-5 py-6 rounded-sm">
                        <div className="bg-[url('/src/pages/sobre/images/isabelle.jpg')] bg-cover bg-center h-52 w-52 mx-auto rounded-sm"></div>
                        <div className="mt-5">
                            <span className="text-center w-full inline-block text-lg text-white">Isabelle Gomes </span>
                            <div className="flex gap-4 justify-center mt-2">
                                <img src={Instagram} alt="Instagram" className="cursor-pointer icon-rede-social" />
                                <img src={Linkedin} alt="Linkedin" className="cursor-pointer icon-rede-social" />
                                <img src={Facebook} alt="Facebook" className="cursor-pointer icon-rede-social" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 p-5 py-6 rounded-sm">
                        <div className="bg-[url('/src/pages/sobre/images/talita.jpg')] bg-cover bg-center h-52 w-52 mx-auto rounded-sm"></div>
                        <div className="mt-5">
                            <span className="text-center w-full inline-block text-lg text-white">Talita Vitória</span>
                            <div className="flex gap-4 justify-center mt-2">
                                <img src={Instagram} alt="Instagram" className="cursor-pointer icon-rede-social" />
                                <img src={Linkedin} alt="Linkedin" className="cursor-pointer icon-rede-social" />
                                <img src={Facebook} alt="Facebook" className="cursor-pointer icon-rede-social" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 p-5 py-6 rounded-sm">
                        <div className="bg-[url('/src/pages/sobre/images/pedro.jpg')] bg-cover bg-center h-52 w-52 mx-auto rounded-sm"></div>
                        <div className="mt-5">
                            <span className="text-center w-full inline-block text-lg text-white">Pedro Miguel</span>
                            <div className="flex gap-4 justify-center mt-2">
                                <img src={Instagram} alt="Instagram" className="cursor-pointer icon-rede-social" />
                                <img src={Linkedin} alt="Linkedin" className="cursor-pointer icon-rede-social" />
                                <img src={Facebook} alt="Facebook" className="cursor-pointer icon-rede-social" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 p-5 py-6 rounded-sm">
                        <div className="bg-[url('/src/pages/sobre/images/felipe.jpg')] bg-cover bg-top h-52 w-52 mx-auto rounded-sm"></div>
                        <div className="mt-5">
                            <span className="text-center w-full inline-block text-lg text-white">Felipe Oliveira</span>
                            <div className="flex gap-4 justify-center mt-2">
                                <img src={Instagram} alt="Instagram" className="cursor-pointer icon-rede-social" />
                                <img src={Linkedin} alt="Linkedin" className="cursor-pointer icon-rede-social" />
                                <img src={Facebook} alt="Facebook" className="cursor-pointer icon-rede-social" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 p-5 py-6 rounded-sm">
                        <div className="bg-[url('/src/pages/sobre/images/cabral.jpg')] bg-cover bg-center bg-no-repeat h-52 w-52 mx-auto rounded-sm"></div>
                        <div className="mt-5">
                            <span className="text-center w-full inline-block text-lg text-white">Gabriel Cabral</span>
                            <div className="flex gap-4 justify-center mt-2">
                                <img src={Instagram} alt="Instagram" className="cursor-pointer icon-rede-social" />
                                <img src={Linkedin} alt="Linkedin" className="cursor-pointer icon-rede-social" />
                                <img src={Facebook} alt="Facebook" className="cursor-pointer icon-rede-social" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Gradient} alt="gradient" className="relative top-10 z-50 w-full rotate-180"  />
        </section>
    )
}

export default Equipe