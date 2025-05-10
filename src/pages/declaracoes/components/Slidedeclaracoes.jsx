import React, { useState, useEffect } from 'react';


const Slidedeclaracoes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = [
    { id: 1, bg: "bg-[url('pages/declaracoes/images/promocarta.jpg')] bg-cover", text: '' },
    { id: 2, bg: "bg-[url('pages/declaracoes/images/Promopedido.jpg')] bg-cover", text: '' },
    { id: 3, bg: "bg-[url('pages/declaracoes/images/playlist.png')] bg-cover", text: '' },
  ];

  const autoplayInterval = 5000;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  return (
    <section className="relative bg-gradient-to-b from-[#750B34] via-[#862C4E] to-[#4E1129] flex flex-col items-center justify-center  lg:max-h-230 min-h-screen overflow-hidden" >

      <div className=" relative flex flex-col justify-center items-center mb-2 md:mb-3 lg:mt-90">
        <h1  className="text-[23px] text-center md:text-3xl lg:text-4xl lg:mt-5 font-bold text-white">Agora, que tal falarmos de...</h1>
        <h2 className="text-[23px] text-center md:text-2xl lg:text-3xl font-bold text-white">💕Amor💕</h2>
      </div>
      <div className="w-full max-w-6xl flex flex-col items-center space-y-8 md:space-y-12 lg:pl-50 ">
        <div 
          className="relative w-full h-64 md:h-80 lg:w-150 lg:top-25 lg:-left-100 overflow-hidden rounded-xl shadow-lg lg:-translate-y-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          
          <div 
            className="flex h-full transition-transform duration-300"
            style={{ 
              width: `${slides.length * 100}%`,
              transform: `translateX(-${(currentSlide * 100) / slides.length}%)`
            }}
          >
            {slides.map((slide) => (
              <div 
                key={slide.id}
                className={`flex-shrink-0 h-full ${slide.bg} flex items-center justify-center p-8`}
                style={{ width: `${100 / slides.length}%` }}
              >
                <h3 className="text-2xl font-bold">{slide.text}</h3>
              </div>
            ))}
          </div>
       
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all z-10 text-xl"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all z-10 text-xl"
          >
            &gt;
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-2xl 
         rounded-2xl p-6 lg:pr-45 lg:mr-20 text-center  lg:w-350 lg:h-100 lg:-top-75 lg:left-95">
          <h1 className="text-3xl md:text-4xl  xl:text-[47px] font-bold text-white" id="slide-declaracoes">
          Declare o seu amor

          </h1>
          <p className="text-base md:text-lg text-[#EAEAEA] mt-4
          lg:mt-10 lg:text-[20px] xl:text-[21px] lg:font-medium" > 
           Nesta sessão, você pode expressar como ama alguém do seu jeito. Amor em todos os sentidos! Dedique uma carta para um amigo querido, pessa seu amado(a) em namoro, ou até mesmo, dedique uma playlist inteira com músicas que descrevam seus sentimentos por alguém especial!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Slidedeclaracoes;