import Facebook from "../images/icon-face.svg";
import Instagram from "../images/icon-insta.svg";
import Linkedin from "../images/icon-linkedin.svg";

const Contato = () => {
    return (
        <section className="mt-20 py-16">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full lg:w-1/2">
                    <h3 className="text-xl font-semibold text-white mb-6">Envie uma Mensagem:</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-300 mb-1" htmlFor="name">Nome</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Seu nome"
                                className="w-full bg-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-300 mb-1" htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="seuemail@exemplo.com"
                                className="w-full bg-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-300 mb-1" htmlFor="message">Mensagem</label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Digite a sua mensagem"
                                className="w-full bg-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg px-6 py-2 transition-colors duration-200"
                        >
                            Enviar
                        </button>
                    </form>
                </div>

                <div className="text-center lg:text-left w-full lg:w-1/2 text-white">
                    <h2 className="text-2xl sm:text-4xl font-medium">
                        Fale com a <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-pink-600 to-purple-500">gente</span>
                    </h2>
                    <p className="mt-4 text-gray-300">
                        Tem algo no coração? Uma dúvida, sugestão ou só vontade de compartilhar sua história?<br />
                        Estamos aqui para ouvir você!
                    </p>

                    <div className="mt-8 flex justify-center lg:justify-start gap-7">
                        <a href="#" className="p-3 bg-pink-900 rounded-lg duration-200 hover:scale-105">
                            <img src={Facebook} alt="Facebook" className="cursor-pointer w-10" />
                        </a>
                        <a href="#" className="p-3 bg-pink-900 rounded-lg duration-200 hover:scale-105">
                            <img src={Instagram} alt="Instagram" className="cursor-pointer w-10" />

                        </a>
                        <a href="#" className="p-3 bg-pink-900 rounded-lg duration-200 hover:scale-105">
                            <img src={Linkedin} alt="Linkedin" className="cursor-pointer w-10" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contato