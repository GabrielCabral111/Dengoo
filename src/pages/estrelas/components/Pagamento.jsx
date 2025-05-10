
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";


export default function CartaDeAmor() {

  const [stars, setStars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const generateStars = () => {
      const starCount = window.innerWidth < 768 ? 15 : 30; // More stars for cosmic effect
      const newStars = Array.from({ length: starCount }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + "%", 
        delay: Math.random() * 5 + "s", 
        duration: 15 + Math.random() * 20 + "s", // Longer duration for celestial movement
        opacity: 0.2 + Math.random() * 0.8,
        type: ["★", "✦", "✧", "✶", "✺", "✹", "☆", "✩"][Math.floor(Math.random() * 8)],
        size: `${0.3 + Math.random() * 1.5}rem`,
        twinkle: Math.random() > 0.7 // Some stars will twinkle
      }));
      setStars(newStars);
    };

    generateStars();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
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

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Payment processing logic here
    navigate('/estrelas/QR');
  };

  
  const handlePaymentSubmit2 = (e) => {
    e.preventDefault();
    // Payment processing logic here
    navigate('/estrelas/Certificado');
  };

  useEffect(() => {
    // 1. Função original adaptada para React
    const criarEstrela = () => {
      const estrela = document.createElement("div");
      estrela.className = "star";
      estrela.style.left = Math.random() * window.innerWidth + "px";
      estrela.style.fontSize = "12px";
      estrela.style.animationDuration = `${2 + Math.random() * 3}s`;
      document.body.appendChild(estrela);


      setTimeout(() => {
        estrela.remove();
      }, 5000);
    };

    // 2. Intervalo para criar estrelas
    const intervalo = setInterval(criarEstrela, 50);

    // 3. Limpeza ao desmontar o componente
    return () => {
      clearInterval(intervalo);
      document.querySelectorAll('.star').forEach(estrela => estrela.remove());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[url('./pages/estrelas/images/background-stars.png')] bg-[#030D29]  overflow-hidden flex items-center justify-center p-4">
      <style>
        {`
.star {
  position: absolute;
  top: -20px;
  color: #fff;
  font-size: 24px;
  line-height: 1;
  animation: animate 5s linear forwards;
  /* Otimização de performance */
  will-change: transform, opacity;
  pointer-events: none;
}

.star::before {
  content: "★"; /* Símbolo de estrela Unicode */
  display: block;
  text-shadow: 
    0 0 5px #fff,
    0 0 10px rgba(255,255,255,0.8),
    0 0 15px rgba(255,255,255,0.6),
    0 0 20px rgba(255,255,255,0.4),
    0 0 30px rgba(255,255,255,0.2);
}

@keyframes animate {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}

@media (max-width: 600px) {
  .star { 
    font-size: 12px !important; 
  }
  .star::before {
    text-shadow: 
      0 0 3px #fff,
      0 0 6px rgba(255,255,255,0.8),
      0 0 9px rgba(255,255,255,0.6);
  }
}
        `}
      </style>
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute text-amber-50 ${star.twinkle ? 'animate-twinkle' : 'animate-float'} z-0`}
          style={{
            left: star.left,
            bottom: '-5%',
            animationDelay: star.delay,
            animationDuration: star.duration,
            fontSize: star.size,
            opacity: star.opacity,
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.8))',
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          {star.type}
        </div>
      ))}





      <div className="bg-[#132650] rounded-3xl p-6 max-w-4xl w-full text-white flex flex-col md:flex-row gap-6  items-center justify-center z-5">
        <div
          className="w-full md:w-1/2 h-80 bg-cover  rounded-xl bg-[url('pages/estrelas/images/certificadoB.png')]  bg-center"
          
        ></div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <p className="text-sm text-white mb-2">🔴 31 pessoas estão presenteando alguém neste momento!</p>
            <h2 className="text-xl font-bold mb-2 text-white">Compre seu Produto Dengoo</h2>
            <div className="flex mb-2 text-yellow-400">
              {Array(5).fill("★").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <p className="text-2xl font-bold mb-4 text-white">R$139,97</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {opcoesPagamento.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setFormaPagamento(item)}
                  className={`px-2 py-1 rounded text-xs border transition-all duration-300 ${
                    formaPagamento === item
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
            <button onClick={handlePaymentSubmit2} className="mt-4 bg-[#1f1f1f] text-white px-6 py-2 rounded-full w-fit self-end hover:bg-[#111111] transition cursor-pointer"> Voltar </button>
                          
            <button onClick={handlePaymentSubmit} className="mt-4 bg-[#2D004D] text-white px-6 py-2 rounded-full w-fit self-end hover:bg-[#4A0070] transition cursor-pointer">Comprar</button>
                          

          </div>
        </div>
      </div>
    </div>
  );
}
