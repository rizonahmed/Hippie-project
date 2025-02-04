import logo from './assets/logo.png'
import Banner from './Banner';
import layer from './assets/layer.png'
const Hero = () => {
    return (
        <div className="custom-text  w-full min-h-auto max-h-auto main-bg">
            <div className="hero-bg  w-full h-full ">


                {/* nav startt here   */}
                <nav className="w-10/12 mx-auto pt-6 flex flex-wrap justify-between items-center">
                    {/* Logo */}
                    <div>
                        <img src={logo} alt="Hippie Logo" className="w-24 sm:w-28 md:w-32 lg:w-40" />
                    </div>

                    {/* Navigation Menu */}
                    <div>
                        <ul className="flex flex-wrap gap-3 sm:gap-4 md:gap-6">
                            <li className="bg-white/20 backdrop-blur-2xl px-3 sm:px-4 md:px-6 py-3 sm:py-2 md:py-3 lg:py-3 lg:pb-4 cursor-pointer rounded-lg text-xs sm:text-sm md:text-lg lg:text-2xl  text-white">
                                <a href="#about">About</a>
                            </li>
                            <li className="bg-white/20 backdrop-blur-2xl px-3 sm:px-4 md:px-6 py-3 sm:py-2 md:py-3 lg:py-3 lg:pb-4 cursor-pointer rounded-lg text-xs sm:text-sm md:text-lg lg:text-2xl  text-white">
                                <a href="#tokenmics">Tokenomics</a>
                            </li>
                            <li className="bg-white/20 backdrop-blur-2xl px-3 sm:px-4 md:px-6 py-3 sm:py-2 md:py-3 lg:py-3 lg:pb-4 cursor-pointer rounded-lg text-xs sm:text-sm md:text-lg lg:text-2xl  text-white">
                                <a href="#buy">How to Buy</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* nav end here  */}

                <Banner></Banner>


                <div className='w-full z-10 '>
                    <img
                        className='w-full -mt-6 relative z-50 sm:-mt-10 lg:-mt-14 xl:-mt-20 2xl:-mt-24 '
                        src={layer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;