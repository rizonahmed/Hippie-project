import logo from './assets/logo.png'
import Banner from './Banner';
import layer from './assets/layer.png'
const Hero = () => {
    return (
        <div className="w-full min-h-auto max-h-auto main-bg">
            <div className="hero-bg  w-full h-full ">


                {/* nav startt here   */}
                <div className="w-10/12 mx-auto pt-10 flex  justify-between items-center">
                    <div>
                        <img src={logo} alt="Hippie Logo" />
                    </div>
                    <div>
                        <ul className="flex ju gap-6">
                            <li className="bg-white/20 backdrop-blur-2xl px-6 pb-4 pt-3 cursor-pointer  rounded-2xl  xl:text-2xl md:font-semibold text-white"><a href="#about"> About</a> </li>
                            <li className="bg-white/20 backdrop-blur-2xl px-6 pb-4 pt-3 cursor-pointer  rounded-2xl text-2xl font-semibold text-white"><a href="#tokenmics"> Tokenomics</a>  </li>
                            <li className="bg-white/20 backdrop-blur-2xl px-6 pb-4 pt-3 cursor-pointer  rounded-2xl text-2xl font-semibold text-white"><a href="#buy"> How to Buy</a> </li>
                           
                        </ul>
                    </div>
                </div>
                {/* nav end here  */}

                <Banner></Banner>


            <div className='w-full  '>
                <img
                className='w-full -mt-7  sm:-mt-14 md:-mt- xl:-mt-20 2xl:-mt-24 '
                src={layer} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Hero;