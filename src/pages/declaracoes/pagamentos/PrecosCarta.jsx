import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function PrecosCarta() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      const heartCount = window.innerWidth < 768 ? 10 : 20;
      const newHearts = Array.from({ length: heartCount }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + "%",
        delay: Math.random() * 5 + "s",
        duration: 19 + Math.random() * 10 + "s",
        size: 0.3 + Math.random() * 0.7 + "rem",
        opacity: 0.3 + Math.random() * 0.7,
      }));
      setHearts(newHearts);
    };

    generateHearts();
    window.addEventListener("resize", generateHearts);
    return () => window.removeEventListener("resize", generateHearts);
  }, []);


  const [formaPagamento, setFormaPagamento] = useState("");
  const [cartao, setCartao] = useState({
    numero: "",
    nome: "",
    validade: "",
    cvv: "",
  });
  const [chavePix, setChavePix] = useState("123e4567-e89b-12d3-a456-426614174000");

  const opcoesPagamento = ["VISA", "MASTERCARD", "AMEX", "DISCOVER", "HYPERCARD", "PIX"];

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#4E1129_0%,#862C4E_50%,#750B34_100%)] flex items-center justify-center p-4">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-blue-900 animate-float z-0"
          style={{
            left: heart.left,
            bottom: '-5%',
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: 1 + Math.random() * 2 + "rem",
            opacity: heart.opacity,
          }}
        >
          {["💌", "💖", "💘", "💓"][heart.id % 4]}
        </div>
      ))}






      <div className="bg-[#c0a8c7] rounded-3xl p-6 max-w-4xl w-full text-white flex flex-col md:flex-row gap-6  items-center justify-center z-5">
        <div
          className="w-full md:w-1/2 h-80  rounded-xl bg-[url('pages/declaracoes/images/logopagamento.png')]  bg-center"

        ></div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <p className="text-sm text-red-900 mb-2">🔴 12 pessoas estão presenteando alguém neste momento!</p>
            <h2 className="text-xl font-bold mb-2 text-black">Compre seu Produto Dengoo</h2>
            <div className="flex mb-2 text-yellow-400">
              {Array(5).fill("★").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <p className="text-2xl font-bold mb-4 text-black">R$ 79,90</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {opcoesPagamento.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setFormaPagamento(item)}
                  className={`px-2 py-1 rounded text-xs border transition-all duration-300 ${formaPagamento === item
                      ? "bg-blue-500 text-white border-blue-600"
                      : "bg-black text-white border-gray-900 hover:bg-gray-500"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
            {formaPagamento && (
              <p className="text-sm font-bold text mb-4">Forma de pagamento selecionada: {formaPagamento}</p>
            )}

            {formaPagamento !== "PIX" && formaPagamento !== "" && (
              <div className="bg-gray-800 p-4 rounded-xl space-y-3">
                <input
                  type="text"
                  placeholder="Número do cartão"
                  value={cartao.numero}
                  onChange={(e) => setCartao({ ...cartao, numero: e.target.value })}
                  className="w-full p-2 rounded text-white "
                />
                <input
                  type="text"
                  placeholder="Nome impresso no cartão"
                  value={cartao.nome}
                  onChange={(e) => setCartao({ ...cartao, nome: e.target.value })}
                  className="w-full p-2 rounded text-white"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Validade (MM/AA)"
                    value={cartao.validade}
                    onChange={(e) => setCartao({ ...cartao, validade: e.target.value })}
                    className="w-1/2 p-2 rounded text-white"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    value={cartao.cvv}
                    onChange={(e) => setCartao({ ...cartao, cvv: e.target.value })}
                    className="w-1/2 p-2 rounded text-white"
                  />
                </div>
              </div>
            )}

            {formaPagamento === "PIX" && (
              <div className="bg-gray-700 p-4 rounded-xl space-y-2">
                <p className="text-sm">Escaneie o QR Code ou copie a chave Pix abaixo:</p>
                <div className="bg-white p-4 rounded text-black text-center">
                  <p className="break-all font-mono">{chavePix}</p>
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(chavePix)}
                  className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm"
                >
                  Copiar chave Pix
                </button>
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            <Link to="/declaracoes/cartas/conteudo" className="mt-4 bg-[#1f1f1f] text-white px-6 py-2 rounded-full w-fit self-end hover:bg-[#111111] transition cursor-pointer">
              Voltar
            </Link>
            <Link to="/declaracoes/cartas/compra" className="mt-4 bg-[#2D004D] text-white px-6 py-2 rounded-full w-fit self-end hover:bg-[#4A0070] transition cursor-pointer">
              Avançar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
