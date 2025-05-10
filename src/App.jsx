import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Estrelas from "./pages/estrelas/Estrelas";
import Socorro from './pages/estrelas/components/Galaxia'
import Nomear from "./pages/estrelas/components/Nomear";
import Pagamento from "./pages/estrelas/components/Pagamento";
import Certificado from "./pages/estrelas/components/Certificado";
import Finaliza from './pages/estrelas/components/Finaliza.jsx';
import CompraFeita from './pages/estrelas/components/CompraFeita.jsx'
import Estrelinha from "./pages/estrelas/components/Estrelinha.jsx";

import Home from "./pages/home/Home";


import Sobre from "./pages/sobre/Sobre";


import Declaracoes from "./pages/declaracoes/Declaracoes.jsx";
import Slider from "./pages/declaracoes/components/Slidedeclaracoes.jsx";

import CartasCapa from "./pages/declaracoes/carta/CartasCapa.jsx";
import CartasConteudo from "./pages/declaracoes/carta/CartasConteudo.jsx";
import PrecosCarta from "./pages/declaracoes/pagamentos/PrecosCarta.jsx";

import CompraCarta from "./pages/declaracoes/pagamentos/CompraCarta.jsx";

import PrecosPedidos from "./pages/declaracoes/pagamentos/PrecosPedido.jsx";
import CompraPedidos from "./pages/declaracoes/pagamentos/CompraPedidos.jsx";

import PrecosPlaylist from "./pages/declaracoes/pagamentos/PrecosPlaylist.jsx";
import CompraPlaylist from "./pages/declaracoes/pagamentos/CompraPlaylist.jsx";

import PlaylistPage from "./pages/declaracoes/PlaylistPage.jsx";
import PedidoCapa from "./pages/declaracoes/pedido/PedidoCapa.jsx";
import PedidoConteudo from "./pages/declaracoes/pedido/PedidoConteudo.jsx";
import PedidoGaleria from "./pages/declaracoes/pedido/PedidoGaleria.jsx";

import PlaylistProduto from "./pages/declaracoes/produtos/PlaylistProduto.jsx";


function App() {

	return (
		<>
			<BrowserRouter>
                <Routes>
					{/* Rotas para a home */}

                    <Route path='/' element={<Home />} />


					{/* Rotas para o sobre  */}

                    <Route path='/sobrer' element={<Sobre />} />



					{/* Rotas para as declarações  */}

                    <Route path='/declaracoes' element={<Declaracoes />} />
                    <Route path='/declaracoes/comeco' element={<Slider />} />


                    <Route path='/declaracoes/precos/pedidos' element={<PrecosPedidos />} />

                    <Route path='/declaracoes/precos/playlist' element={<PrecosPlaylist />} />
                    <Route path='/declaracoes/compra/playlist' element={<CompraPlaylist />} />
                    <Route path='/declaracoes/playlist' element={<PlaylistPage  />} />
                    

                    <Route path='/declaracoes/produtos' element={<PlaylistProduto />} />


                    <Route path='/declaracoes/cartas/capa' element={<CartasCapa />} />
                    <Route path='/declaracoes/cartas/conteudo' element={<CartasConteudo />} />
                    <Route path='/declaracoes/cartas/precos' element={<PrecosCarta />} />
                    <Route path='/declaracoes/cartas/compra' element={<CompraCarta />} />

                
                    <Route path='/declaracoes/pedido/capa' element={<PedidoCapa />} />
                    <Route path='/declaracoes/pedido/conteudo' element={<PedidoConteudo />} />
                    <Route path='/declaracoes/pedido/galeria' element={<PedidoGaleria />} />                    
                    <Route path='/declaracoes/compra/pedidos' element={<CompraPedidos />} />



					<Route path='/estrelas' element={<Estrelas/>}/>
                    <Route path="/estrelas/galaxy" element={<Socorro />} />
                    <Route path="/estrelas/nomear" element={<Nomear />} />
                    <Route path="/estrelas/paga" element={<Pagamento />} />
                    <Route path="/estrelas/Cadente" element={<Estrelinha />} />
                    <Route path="/estrelas/Certificado" element={<Certificado />} />
                    <Route path="/estrelas/Finaliza" element={<Finaliza />} />
                    <Route path="/estrelas/QR" element={<CompraFeita />} />



                    {/* <Route path='/estrelas' element={<Componente Principal Da Estrelas />} /> */}
                    {/* <Route path='/estrelas:produtos' element={<Rota de produtos das estrelas />} /> */}


					{/* Rotas para as túnel  */}

                    {/* <Route path='/tunel' element={<Componente Principal Da Tunel />} /> */}
                    {/* <Route path='/tunel:produtos' element={<Rota de produtos do túnel />} /> */}
                </Routes>
            </BrowserRouter>
		</>
	)
}

export default App
