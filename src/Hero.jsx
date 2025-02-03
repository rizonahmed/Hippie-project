import logo from './assets/logo.png'
const Hero = () => {
    return (
        <div className="w-full h-[97vh] main-bg">
            <div className="hero-bg w-full h-[97vh]">

                <div className="w-10/12 mx-auto pt-10 flex  justify-between items-center">
                    <div>
                        <img src={logo} alt="Hippie Logo" />
                    </div>
                    <div>
                        <ul className="flex ju gap-6">
                            <li className="bg-white/20 backdrop-blur-2xl px-6 pb-4 pt-3 cursor-pointer  rounded-2xl text-2xl font-semibold text-white">About </li>
                            <li className="bg-white/20 backdrop-blur-2xl px-6 pb-4 pt-3 cursor-pointer  rounded-2xl text-2xl font-semibold text-white">Tokenomics </li>
                            <li className="bg-white/20 backdrop-blur-2xl px-6 pb-4 pt-3 cursor-pointer  rounded-2xl text-2xl font-semibold text-white">How to Buy </li>
                           
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;