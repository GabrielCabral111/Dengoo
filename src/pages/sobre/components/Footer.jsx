import Logo from "../images/logo.svg";
import Instagram from "../images/icon-insta.svg";
import Facebook from "../images/icon-face.svg";
import Linkedin from "../images/icon-linkedin.svg";

export default function Footer() {
    return (
        <footer className="bg-[#030816] mt-32 sm:mt-40 lg:mt-52">
            <div className="p-10 py-14 max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Logo Dengoo" className="w-40 sm:w-52 lg:w-60" />
                </div>

                <div className="text-center mt-5 text-white text-md sm:text-lg lg:text-xl">
                    <p>© 2025 Dengoo.</p>
                    <p>Todos os direitos reservados.</p>
                </div>

                <div className="mt-5 flex gap-3">
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
