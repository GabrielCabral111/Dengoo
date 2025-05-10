import React, { useState } from 'react';
import { Link } from "react-router";

export default function MusicaInterativa() {
  const [musica, setMusica] = useState('');
  const [playlist, setPlaylist] = useState([]);

  const adicionarMusica = () => {
    if (musica.trim() !== '') {
      setPlaylist([...playlist, musica]);
      setMusica('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      adicionarMusica();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('./pages/declaracoes/images/bg-produtos.svg')] bg-cover p-4">
      <div className="flex flex-col md:flex-row bg-[#f3e3ff] rounded-[40px] p-8 shadow-md w-full max-w-5xl gap-6">

        {/* Player Lado esquerdo */}
        <div className="w-full md:w-1/2 bg-gradient-to-b from-[#de95bd] to-[#e0cbe3] rounded-[30px] p-6">
          <div className="bg-gray-700 rounded-xl p-4">
            <div className="flex justify-between mb-4">
              <button className="text-white text-xl">{'<'}</button>
              <div className="bg-gray-300 w-32 h-24 rounded-lg" />
              <button className="text-white text-xl">{'>'}</button>
            </div>

            {/* Playlist dinâmica */}
            <div className="flex flex-col gap-3 mt-4">
              {playlist.map((nome, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white bg-opacity-80 p-3 rounded-xl shadow hover:scale-105 transition-transform duration-200"
                >
                  <div className="w-6 h-6 bg-[#270047] rounded-md" />
                  <span className="text-[#270047] font-semibold text-sm truncate">{nome}</span>
                </div>
              ))}
            </div>

            {/* Controles */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="w-1/2 h-1 bg-white rounded-full" />
              <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center">{'▶'}</button>
              <div className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Lado direito: Campo de entrada */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
          <label className="text-[#270047] font-bold text-lg">Coloque sua música</label>
          <input
            type="text"
            value={musica}
            onChange={(e) => setMusica(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite o nome da música e pressione Enter"
            className="bg-[#e5d6f3] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7932D2] transition"
          />
          <div className="flex gap-4 mt-4">
            <Link to="/declaracoes" className="bg-[#270047] text-white py-2 px-6 rounded-lg font-bold">Voltar</Link>
            <Link to="/declaracoes/precos/playlist" onClick={adicionarMusica} className="bg-[#270047] text-white py-2 px-6 rounded-lg font-bold">
              Próximo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

