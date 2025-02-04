import rotate from './assets/rotate.png';
import one from './assets/Frame 12.png';
import two from './assets/Frame 13.png';
import three from './assets/Frame 14.png';
import four from './assets/Frame 15.png';
import tokenmics from './assets/tokenmics.png';

const Tokenomics = () => {
    return (
        <div id="tokenmics" className="flex flex-col items-center">
            {/* Tokenomics Heading */}
            <div className="flex justify-center pb-8 pt-8   xl:pt-8">
                <img src={tokenmics} alt="Tokenomics" className="w-3/4   " />
            </div>

            {/* Tokenomics Content */}
            <div className="w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-6">

                {/* Mobile Layout - Rotate image goes to bottom */}
                <div className="flex flex-col items-center gap-6 lg:hidden">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <img src={one} alt="Tokenomics 1" className="w-full max-w-[170px] sm:max-w-[250px]  md:max-w-[300px]" />
                        <img src={two} alt="Tokenomics 2" className="w-full max-w-[170px] sm:max-w-[250px]  md:max-w-[300px]" />
                        <img src={three} alt="Tokenomics 3" className="w-full max-w-[170px] sm:max-w-[250px]  md:max-w-[300px]"  />
                        <img src={four} alt="Tokenomics 4" className="w-full max-w-[170px] sm:max-w-[250px] md:max-w-[300px] " />
                    </div>
                    {/* Rotate Image - Now at Bottom */}
                    <img src={rotate} alt="Rotate" className="w-[350px] sm:w-[400px] md:w-[500px] rote" />
                </div>


                {/* Large Screen Layout - Rotate Image in Middle */}
                <div className="hidden lg:flex items-center justify-center gap-10 relative">
                    {/* Left Side */}
                    <div className="flex flex-row lg:flex-col gap-6">
                        <img src={one} alt="Tokenomics 1" className="w-full max-w-sm mx-auto  mb-20 z-10 rotate-hover" />
                        <img src={three} alt="Tokenomics 3" className="w-full lg:w-[230px] xl:w-[300px] 2xl:w-[320px] max-w-sm mx-auto absolute left-16 xl:left-16 2xl:left-30 z-10  bottom-10 rotate-hover" />
                    </div>

                    {/* Center Rotate Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={rotate}
                            alt="Rotate"
                            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[560px] rote"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-6">
                        <img src={two} alt="Tokenomics 2" className="w-full max-w-sm mx-auto mb-24 ml-10 z-10 rotate-hover "  />
                        <img src={four} alt="Tokenomics 4" className="w-full lg:w-[230px] xl:w-[300px] 2xl:w-[320px] max-w-sm mx-auto absolute right-7 xl:right-5 2xl:right-20 bottom-10 z-10 rotate-hover" />
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Tokenomics;