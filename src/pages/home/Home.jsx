import "./styles.css";

import Gradient from "./images/Gradient.svg";

import Header from "./components/Cabecalho";
import Introducao from "./components/Introducao";
import Produtos from "./components/Produtos";
import ComoFunciona from "./components/ComoFunciona";
import ComecarAgora from "./components/ComecarAgora";
import Footer from "./components/Footer";

const Home = () => {
    return (
        <div className="bg-[#151515]">
            <div className="bg-cover bg-no-repeat bg-center bg-[linear-gradient(to_bottom,#041233_0%,#241E7B_50%,#151515_100%)] after:content-[''] after:absolute after:top-0 after:left-0 after:z-10 after:w-screen after:bg-[url('./pages/home/images/background-stars.svg')] after:bg-cover after:bg-no-repeat after:bg-center after:opacity-50 h-screen after:h-screen">
                <Header />
                <Introducao />
            </div>
            <Produtos />
            <ComoFunciona />
            <ComecarAgora />
            <Footer />
        </div>
    )
}

export default Home