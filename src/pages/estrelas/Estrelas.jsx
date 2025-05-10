import './styles.css'
import Header from "./components/Header"
import Inicio from './components/Inicio'
import Meio from './components/Meio'
import Final from './components/Final'
import Footer from './components/Footer'


function Estrelas(){
    return(
        <div className="bg-cover bg-no-repeat bg-center bg-[linear-gradient(to_bottom,#2C1669_0%,#291A68_50%,#2B1668_100%)] h-screen after:content-[''] after:absolute after:top-0 after:left-0 after:z-10 after:w-screen after:h-screen after:bg-[url('./pages/home/images/background-stars.svg')] after:bg-cover after:bg-no-repeat after:bg-center after:opacity-50">
            <Header />
            <Inicio />
            <Meio />
            <Final />
            <Footer />
        </div>
    )
}

export default Estrelas