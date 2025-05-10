import React, { useState } from 'react';
import { Link } from "react-router";

export default function PedidoConteudo() {
  const [titulo, setTitulo] = useState('Que maravilha');
  const [mensagem, setMensagem] = useState('Você acabou de me fazer a pessoa mais feliz do mundo! Mal posso esperar para começarmos essa jornada juntos.');
  const [emoji, setEmoji] = useState('🎉');
  const [cor, setCor] = useState('bg-purple-200');

  const opcoes = [
    { emoji: '🎉', cor: 'bg-purple-200' },
    { emoji: '💜', cor: 'bg-purple-500 text-white' },
    { emoji: '💗', cor: 'bg-pink-300 text-white' },
  ];

  const handleEmojiClick = ({ emoji, cor }) => {
    setEmoji(emoji);
    setCor(cor);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#d5cbd8] p-6 bg-[url('./pages/declaracoes/images/bg-produtos.svg')] bg-cover">
      <div className="flex flex-col md:flex-row bg-[#f3e3ff] rounded-[40px] p-8 shadow-md w-full max-w-5xl gap-8">

        {/* Card à esquerda */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className={`${cor} w-full text-center rounded-xl p-6 shadow-md transition-all duration-300`}>
            <div className="text-4xl mb-4">{emoji}</div>
            <h2 className="text-2xl font-bold mb-2">{titulo || 'Seu título aqui'}</h2>
            <p className="text-sm">{mensagem || 'Sua mensagem aparecerá aqui...'}</p>
          </div>
        </div>

        {/* Formulário à direita */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          <label className="text-[#270047] font-bold">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="bg-[#e5d6f3] p-3 rounded-lg focus:outline-none"
          />

          <label className="text-[#270047] font-bold">Mensagem especial</label>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="bg-[#e5d6f3] p-3 rounded-lg focus:outline-none resize-none h-24"
          />

          <label className="text-[#270047] font-bold mt-2">Emoji</label>
          <div className="flex gap-3 mt-2">
            {opcoes.map((op, i) => (
              <button
                key={i}
                onClick={() => handleEmojiClick(op)}
                className={`p-2 rounded-lg text-2xl border-2 ${emoji === op.emoji ? 'border-[#270047]' : 'border-transparent'
                  }`}
              >
                {op.emoji}
              </button>
            ))}
          </div>

          <div className="flex gap-4 mt-5">
            <Link to="/declaracoes/pedido/capa" className="mt-4 bg-[#1f1f1f] text-white px-6 py-2 rounded-full w-fit self-end hover:bg-[#111111] transition cursor-pointer">
              Voltar
            </Link>

            <Link to="/declaracoes/pedido/galeria" className="mt-4 bg-[#2D004D] text-white px-6 py-2 rounded-full w-fit self-end hover:bg-[#4A0070] transition cursor-pointer">
              Avançar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
