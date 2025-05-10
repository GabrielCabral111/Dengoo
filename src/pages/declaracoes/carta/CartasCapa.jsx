import React, { useState } from 'react';
import { Link } from "react-router";

const heartOptions = [
  { color: '#A13F9D', bg: 'from-[#fbefff] to-[#dbc5e9]' },
  { color: '#C72A72', bg: 'from-[#fff0f6] to-[#f3cce0]' },
  { color: '#7932D2', bg: 'from-[#f0e5ff] to-[#ceb8f1]' },
  { color: '#F6619D', bg: 'from-[#ffe6f1] to-[#f6c9d9]' },
];

export default function PedidoCapa() {
  const [titulo, setTitulo] = useState('Um Declaraçao especial');
  const [botao, setBotao] = useState('Descubra...');
  const [coracaoIndex, setCoracaoIndex] = useState(0);

  const selectedHeart = heartOptions[coracaoIndex];

  return (
    <div className="p-4 min-h-screen relative flex items-center justify-center bg-[url('./pages/declaracoes/images/bg-produtos.svg')] bg-cover">
      <div className="flex flex-col md:flex-row bg-[#f3e3ff] rounded-[40px] p-4 md:p-8 shadow-md w-full max-w-5xl gap-8">

        {/* Lado esquerdo: Cartinha */}
        <div className={`w-full md:w-1/2 bg-gradient-to-b ${selectedHeart.bg} rounded-[30px] flex flex-col items-center justify-center p-6 transition-all duration-300`}>
          <div className="bg-white bg-opacity-40 p-6 rounded-2xl shadow-inner text-center w-full">
            <div className="text-4xl" style={{ color: selectedHeart.color }}>❤️</div>
            <h2 className="text-xl mt-4 text-black font-semibold">{titulo}</h2>
            <button
              className="mt-4 px-4 py-2 text-sm font-semibold rounded-full"
              style={{ backgroundColor: selectedHeart.color, color: 'white' }}
            >
              {botao}
            </button>
          </div>
        </div>

        {/* Lado direito: Formulário */}
        <div className="w-full md:w-1/2 px-0 md:px-8 flex flex-col justify-center gap-4">
          <label className="text-[#6b336b] font-semibold">Título</label>
          <input
            className="bg-[#e4d2f3] rounded-md p-2 focus:outline-none"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <label className="text-[#6b336b] font-semibold">Texto botão</label>
          <input
            className="bg-[#e4d2f3] rounded-md p-2 focus:outline-none"
            value={botao}
            onChange={(e) => setBotao(e.target.value)}
          />

          <label className="text-[#6b336b] font-semibold mt-2">Corações</label>
          <div className="flex gap-3 mt-1 flex-wrap">
            {heartOptions.map((option, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${coracaoIndex === index ? 'ring-4 ring-white scale-110' : ''
                  }`}
                onClick={() => setCoracaoIndex(index)}
                style={{ backgroundColor: option.color }}
              >
                ❤️
              </button>
            ))}
          </div>

          <div className="flex gap-4 mt-5">
            <Link to="/declaracoes" className="mt-4 bg-[#1f1f1f] text-white px-6 py-2 rounded-full w-fit self-end hover:bg-[#111111] transition cursor-pointer">
              Voltar
            </Link>

            <Link to="/declaracoes/cartas/conteudo" className="mt-4 bg-[#2D004D] text-white px-6 py-2 rounded-full w-fit self-end hover:bg-[#4A0070] transition cursor-pointer">
              Avançar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
