import "./styles.css"

import Header from "./components/Cabecalho";
import Introducao from "./components/Introducao";
import Equipe from "./components/Equipe";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

const Sobre = () => {
    return (
        <div className="bg-[#060520]">
            <Header />
            <Introducao />
            <Equipe />
            <Contato />
            <Footer />
        </div>
    )
}

export default Sobre