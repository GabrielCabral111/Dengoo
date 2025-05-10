import { useState } from "react";
import { Link } from "react-router";

const CartasConteudo = () => {
    const [titulo, setTitulo] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [dataEspecial, setDataEspecial] = useState("");

    return (
        <div className="min-h-screen relative flex items-center justify-center bg-[url('./pages/declaracoes/images/bg-produtos.svg')] bg-cover">
            <div className="flex flex-col md:flex-row rounded-[2rem] overflow-hidden shadow-xl w-full max-w-4xl bg-[#F4E7FF]">
                <div className="w-full md:w-1/2 bg-gradient-to-b from-[#FAF6ED] to-[#D3B4E2] p-6 flex flex-col items-center justify-center rounded-b-[2rem] md:rounded-r-none md:rounded-l-[2rem] text-center text-[#2D004D]">
                    <h2 className="text-2xl font-bold mb-4">{titulo || "Para minha princesa"}</h2>
                    <hr className="w-1/2 border-[#2D004D] mb-4" />
                    <p className="mb-4 whitespace-pre-wrap">{mensagem || "Nos seus braços, encontro paz e felicidade, querida. Você é meu apoio,  minha alegria e meu amor verdadeiro, simplesmente a namorada perfeita!  Eu lhe agradeço, não só hoje, mas sempre, por cada momento incrível que  compartilhamos, por saber que não estou só, que ao seu lado eu pertenço e tudo é vida neste mundo. Sem você eu jamais iria descobrir quão bela  pode ser a vida. Te amo mais do que você pode imaginar. "}</p>
                    <p className="text-sm italic">{dataEspecial}</p>
                </div>

                <div className="w-full md:w-1/2 p-6 bg-[#F4E7FF] flex flex-col gap-4 text-[#2D004D]">
                    <div>
                        <label className="block font-semibold mb-1">Título</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded-md bg-[#E5CFFF] outline-none"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Mensagem especial</label>
                        <textarea
                            rows={4}
                            className="w-full p-2 rounded-md bg-[#E5CFFF] outline-none resize-none"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Data Especial</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded-md bg-[#E5CFFF] outline-none"
                            value={dataEspecial}
                            onChange={(e) => setDataEspecial(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4">
                        <Link to="/declaracoes/cartas/capa" className="mt-4 bg-[#1f1f1f] text-white px-6 py-2 rounded-full w-fit self-end hover:bg-[#111111] transition cursor-pointer">
                            Voltar
                        </Link>

                        <Link to="/declaracoes/cartas/precos"className="mt-4 bg-[#2D004D] text-white px-6 py-2 rounded-full w-fit self-end hover:bg-[#4A0070] transition cursor-pointer">
                            Comprar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartasConteudo