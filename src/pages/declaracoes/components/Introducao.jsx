const Introducao = () => {
    return (
        <section className="mt-20 relative z-10 w-full max-w-[340px] sm:mt-10 mx-auto text-center
        md:max-w-[490px] md:mt-10 lg:max-w-[750px] lg:mt-10">
            <div className="relative w-10/10 h-10/10 bg-[#862c4e9d] flex flex-col justify-center items-center rounded-2xl">
                <h1 className="text-5xl font-medium text-white sm:text-4xl md:text-5xl lg:text-7xl lg:leading-20">Declaração de amor</h1>
                <p className="text-md sm:text-lg lg:text-2xl text-[#EAEAEA] mt-4 mx-auto lg:mt-7 lg:max-w-[500px]">Expresse seu sentimentos de diversas maneiras para quem você ama! </p>
            </div>

            <button
                className="mt-8 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
            >
                <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4C0F98_0%,#5713CB_50%,#9318FE_100%)]"
                >
                </span>
                <a href="#slide-declaracoes"
                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 sm:text-lg font-medium text-white backdrop-blur-3xl gap-2 undefined"
                >
                    Começar agora
                </a>
            </button>

        </section>
    )
}

export default Introducao