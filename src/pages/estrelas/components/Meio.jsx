import Star from '../images/star1.png'
import Card from '../images/id-card1.png'
import Gift from '../images/gift1.png'
import QR from '../images/qr-code1.png'
import Certificado from '../images/certificadoP.png'
import Linha from '../images/Line6.png'
import Olho from '../images/olho.png'
import Relogio from '../images/relogio.png'
import Reciclar from '../images/reciclar.png'
import Compartilhar from '../images/compartilhar.png'
import { useNavigate } from 'react-router-dom';

function Meio() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/estrelas/nomear');
  };

  return (
    <div className="relative">
      {/* First Section */}
      <section className="relative min-h-[300px] sm:min-h-[400px] bg-[linear-gradient(to_bottom,rgba(0,9,71)_0%,#140C50_40%,rgba(25,63,123,0.9)_100%)] text-amber-50 flex flex-col items-center pb-10 sm:pb-20">
        <div className='relative w-full flex justify-center pt-8 sm:pt-12 px-4'>
          <p className="text-center text-xl sm:text-3xl md:text-4xl max-w-[90%] leading-tight">
            Declare seu amor nas estrelas: <br className="hidden sm:block"/> 
            Registre um brilho em nosso universo
          </p>
        </div>
        
        <div className='relative w-full flex justify-center px-4 mt-8 sm:mt-12'>
          <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center w-full max-w-[90%] sm:max-w-[80%] gap-4 sm:gap-6 md:gap-8">
            {[
              { color: "bg-[#E3476B]", icon: Star, text: "ESCOLHA" },
              { color: "bg-[#401265]", icon: Card, text: "REGISTRO" },
              { color: "bg-[#7E2B3F]", icon: Gift, text: "PRESENTE" },
              { color: "bg-[#401265]", icon: QR, text: "VISUALIZAR" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`${item.color} w-full max-w-[120px] sm:max-w-[136px] h-[100px] sm:h-[136px] flex flex-col items-center justify-center rounded-[10px] hover:scale-105 transition-transform duration-300 shadow-md`}
              >
                <img className='h-8 w-8 sm:h-10 sm:w-10 mb-2' src={item.icon} alt={item.text.toLowerCase()} />
                <p className="text-xs sm:text-sm md:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='relative w-full flex justify-center px-4 mt-10 sm:mt-16'>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-[90%] sm:max-w-[80%] gap-6 sm:gap-8 md:gap-12">
            <div className='flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[55%] mt-6 md:mt-0'>
              <p className='text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed'>
                Registre um brilho eterno e presenteie com um símbolo único. Seu presente inclui um certificado personalizado e ficha informativa da estrela escolhida.
              </p>
              <button 
                onClick={handleNavigation} 
                className='
                  w-36 sm:w-40 h-10 mt-6 sm:mt-8
                  bg-[linear-gradient(to_right,#080047_0%,#1326CB_50%,#1883FE_100%)] 
                  rounded-[127px] font-bold text-sm sm:text-base
                  hover:bg-[linear-gradient(to_right,#E3476B_0%,#401265_50%,#7E2B3F_100%)]
                  hover:text-white
                  transition-all duration-300
                  transform hover:scale-105
                  shadow-lg hover:shadow-xl hover:shadow-[#401265]/50
                '
              >
                Registrar
              </button>
            </div>
            
            <div className='w-full md:w-[45%] flex justify-center'>
              <img 
                className='w-full max-w-[220px] sm:max-w-[280px] md:max-w-none md:w-auto md:h-[300px] lg:h-[400px] object-contain rounded-lg' 
                src={Certificado} 
                alt="Certificado de registro estelar" 
              />
            </div>
          </div>
        </div>
        
        <div className='w-full flex justify-center mt-12 sm:mt-16 px-4'>
          <div className='w-[90%] h-px bg-gradient-to-r from-transparent via-amber-50/30 to-transparent'></div>
        </div>
      </section>

      {/* Second Section */}
      <section className='flex flex-col justify-center items-center relative text-amber-50 bg-[linear-gradient(to_bottom,rgba(25,63,123,0.9)_0%,rgba(0,20,71,0.8)_5%,#040047_20%,#080047_80%,rgba(17,9,105,0.9)_100%)] min-h-[600px] sm:min-h-[800px] py-10 sm:py-20'>
        <p className='relative text-2xl sm:text-4xl font-bold text-center px-4'>
          Descubra a combinação <br className="hidden sm:block"/> com a estrela ideal 
        </p>
        
        <div className='mt-8 sm:mt-12 font-bold flex flex-row justify-center items-center w-40 sm:w-60 md:w-80 h-8 sm:h-10 text-sm sm:text-xl gap-2'>
          <div className='bg-[#E3476B] h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 flex justify-center items-center rounded-[10px] shadow-md'>
            <img className='h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6' src={Star} alt="estrela" />
          </div>
          Combinação
        </div>
        
        <section className='relative flex flex-col lg:flex-row gap-6 sm:gap-8 p-4 mt-8 sm:mt-12 w-full max-w-[90%] sm:max-w-[80%]'>
          <div className='flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2'>
            {[
              { icon: Olho, text: "Descubra sua estrela" },
              { icon: Relogio, text: "Veja na Hora" },
              { icon: Reciclar, text: "Faça sua Combinação" },
              { icon: Compartilhar, text: "Compartilhe a qualquer momento" }
            ].map((item, index) => (
              <div key={index} className='flex flex-row items-center gap-3 sm:gap-4'>
                <img className='h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16' src={item.icon} alt={item.text.toLowerCase()} />
                <p className='text-sm sm:text-lg md:text-xl'>{item.text}</p>
              </div>
            ))}
          </div>

          <div className='bg-[#1E2690] rounded-[20px] sm:rounded-[30px] h-auto w-full lg:w-1/2 p-4 sm:p-6 flex flex-col items-center mt-6 sm:mt-8 gap-4 sm:gap-6 shadow-xl'>
            <div className='bg-[#0B1938] mt-4 sm:mt-6 font-bold rounded-[10px] w-full max-w-[240px] sm:max-w-[300px] h-8 sm:h-10 flex items-center justify-center text-sm sm:text-base'>
              Nome do seu Dengo
            </div>
            <div className='bg-[#0B1938] border border-gray-300 flex flex-row w-full max-w-[280px] sm:max-w-[360px] h-24 sm:h-32 md:h-40 rounded-[10px] justify-between p-4'>
              <div className='flex flex-col items-start justify-center'>
                <p className='text-xs sm:text-sm md:text-base'>Estrela ideal:</p>
                <p className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold'>Antares</p>
              </div>
              <div className="w-px bg-gray-400 h-12 sm:h-16 md:h-20 my-auto"></div>
              <div className='flex flex-col justify-center items-end'>
                <p className='text-xs sm:text-sm md:text-base'>Combinação:</p>
                <p className='text-3xl sm:text-4xl md:text-5xl font-bold'>99%</p>
              </div>
            </div>
          </div>
        </section>

        <button 
          onClick={handleNavigation} 
          className='
            mt-8 sm:mt-12
            bg-[linear-gradient(to_right,#0F2A98_0%,#1326CB_50%,#1883FE_100%)] 
            w-36 sm:w-40 h-10 font-bold rounded-[20px] text-sm sm:text-base
            transition-all duration-500 ease-in-out
            hover:bg-[linear-gradient(to_right,#9d0c43_0%,#6b1b7a_30%,#1e2690_70%,#1883FE_100%)]
            hover:shadow-[0_0_15px_5px_rgba(157,12,67,0.5)]
            hover:text-white
            relative overflow-hidden
            group
            shadow-lg
          '
        >
          <span className='relative z-10'>Descobrir</span>
          <span className='
              absolute inset-0
              bg-[radial-gradient(circle_at_center,#ff4d4d_0%,transparent_70%)]
              opacity-0
              group-hover:opacity-40
              transition-opacity duration-700
          '></span>
        </button>

        <img 
          className='w-full h-px mt-16 sm:mt-20 absolute bottom-0' 
          src={Linha} 
          alt="linha decorativa" 
        />
      </section>
    </div>
  );
}

export default Meio;