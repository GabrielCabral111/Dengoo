import React, { useState } from 'react';
import { Link } from 'react-router';

export default function PedidoGaleria() {
  const [titulo, setTitulo] = useState('');
  const [mensagemEspecial, setMensagemEspecial] = useState('');
  const [imagens, setImagens] = useState([
    { src: null, legenda: '' },
    { src: null, legenda: '' },
    { src: null, legenda: '' }
  ]);

  const handleFileChange = (index, file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const novaLista = [...imagens];
      novaLista[index].src = reader.result;
      setImagens(novaLista);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleLegendaChange = (index, value) => {
    const novaLista = [...imagens];
    novaLista[index].legenda = value;
    setImagens(novaLista);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#c5accc] items-center justify-center p-6 bg-[url('./pages/declaracoes/images/bg-produtos.svg')] bg-cover">

      <div className="flex flex-col md:flex-row bg-[#af99c0] rounded-[40px] p-8 shadow-md w-full max-w-5xl gap-6" >
        {/* Área da carta */}
        <div className="bg-gradient-to-b from-[#fffef3] to-[#e5d6f3] rounded-[40px] shadow-md p-6 w-full md:w-1/2 max-w-lg">
          <h2 className="text-lg md:text-xl font-bold text-[#270047] text-center mb-4">{titulo || 'Minha vida é mais feliz ao seu lado'}</h2>
          <div className="grid grid-cols-2 gap-4 justify-items-center items-center">
            {imagens.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                {item.src ? (
                  <img
                    src={item.src}
                    alt={`img-${i}`}
                    className="w-28 h-28 object-cover rounded shadow-md"
                  />
                ) : (
                  <label className="w-28 h-28 flex items-center justify-center bg-gray-200 rounded cursor-pointer shadow-inner">
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleFileChange(i, e.target.files[0])}
                    />
                    📷
                  </label>
                )}
                <input
                  type="text"
                  placeholder="Digite aqui..."
                  value={item.legenda}
                  onChange={(e) => handleLegendaChange(i, e.target.value)}
                  className="mt-2 text-sm text-center px-2 py-1 bg-white rounded border border-gray-300 w-full"
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-center text-[#270047]">{mensagemEspecial}</p>
        </div>
        {/* Formulário */}
        <div className="bg-[#f3e3ff] rounded-[40px] shadow-md p-8 w-full md:w-1/2 max-w-md mt-8 md:mt-0 md:ml-6">
          <label className="block text-[#270047] font-bold mb-1">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full bg-[#e5d6f3] p-3 rounded-lg mb-4 focus:outline-none"
          />
          <label className="block text-[#270047] font-bold mb-1">Mensagem especial</label>
          <textarea
            value={mensagemEspecial}
            onChange={(e) => setMensagemEspecial(e.target.value)}
            className="w-full bg-[#e5d6f3] p-3 rounded-lg h-28 resize-none focus:outline-none"
            placeholder="Clique na imagem para adicionar uma breve legenda!"
          />

          <div className="flex gap-4 mt-5">
            <Link to="/declaracoes/pedido/conteudo" className="mt-4 bg-[#1f1f1f] text-white px-6 py-2 rounded-full w-fit self-end hover:bg-[#111111] transition cursor-pointer">
              Voltar
            </Link>

            <Link to="/declaracoes/precos/pedidos" className="mt-4 bg-[#2D004D] text-white px-6 py-2 rounded-full w-fit self-end hover:bg-[#4A0070] transition cursor-pointer">
            Comprar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
