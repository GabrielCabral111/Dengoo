import Logo from "../images/logo.png";
import Instagram from "../images/instagram.svg";
import Facebook from "../images/facebook.svg";
import Linkedin from "../images/linkedin.svg";

export default function Footer() {
    return (
        <footer className="bg-[#00030a] m-0 ">
            <div className="p-10 py-1 max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Logo Dengoo" className="w-40 sm:w-52 lg:w-60" />
                </div>

                <div className="text-center mt-5 text-white text-md sm:text-lg lg:text-xl">
                    <p>© 2025 Dengoo.</p>
                    <p>Todos os direitos reservados.</p>
                </div>


                <div className="mt-5 flex gap-3 pb-5 md:pb-0">
                    <div  className="bg-[#0F172A] p-2 sm:p-3 rounded-full">
                        <img src={Instagram} alt="" className="w-6 h-6 sm:w-8 sm:h-8 " />
                    </div>

                    <div  className="bg-[#0F172A] p-2 sm:p-3 rounded-full">
                        <img src={Facebook} alt="" className="w-6 h-6 sm:w-8 sm:h-8 " />
                    </div>

                    <div  className="bg-[#0F172A] p-2 sm:p-3 rounded-full">
                        <img src={Linkedin} alt="" className="w-6 h-6 sm:w-8 sm:h-8 " />
                    </div>
                </div>
            </div>
        </footer>
    );
}

