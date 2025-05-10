import React from "react";
import qrCodeSrc from "../images/playlistprodu.png"
import { Link } from "react-router";


export default function PlaylistDownloadQR() {


  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrCodeSrc;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#4E1129_0%,#862C4E_50%,#750B34_100%)] flex flex-col items-center justify-center p-4">
      <div className="bg-[#c0a8c7] text-white rounded-xl p-6 flex flex-col md:flex-row items-center md:justify-between gap-4 max-w-[900px] w-full shadow-xl text-center">
        <div
          className="w-60 h-50 rounded bg-[url('pages/declaracoes/images/logopagamento.png')]  bg-center "

        ></div>

        <div className="text-center md:text-left flex-1 pt-9 justify-center items-center ">
          <h2 className="text-center text-black text-lg font-semibold mb-1 md:translate-x-5 md:translate-y-15">Agradecemos por comprar Carta conosco!</h2>
          <p className="text-sm text-black mb-4 text-center md:translate-x-4 md:translate-y-15 ">
            Aqui está o código do seu produto. <br />
            Agora é só presentear aquela pessoa especial!
          </p>

          <div className="flex flex-col items-center md:items-start">
            <img
              src={qrCodeSrc}
              alt="QR Code do produto"
              className="w-32 h-32 mb-2 translate-y-60 md:translate-x-105 md:-translate-y-9"
            />
            <a
              href="https://produtos-dengoo.vercel.app/Playlist/playlist.html"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white -translate-y-20 translate-x- py-2 px-4 rounded shadow text-center  md:translate-y-20.5  md:translate-x-31"
            >
              Produto
            </a>
            <Link to="/declaracoes"
              className="bg-blue-600 hover:bg-blue-700 text-white -translate-y-10 py-2 px-4 rounded shadow text-center md:translate-y-10.5 md:translate-x-113"
            >
              Sair
            </Link>
            <button
              onClick={handleDownload}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded shadow mb-2 translate-y-45  md:-translate-y-27 md:translate-x-107 "
            >
              Download
            </button>

          </div>
        </div>

        <div
          className="w-60 h-55 bg-center  md:-translate-y-10"

        ></div>
      </div>
    </div>
  );
}