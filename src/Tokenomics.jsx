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
            <div className="flex justify-center py-8">
                <img src={tokenmics} alt="Tokenomics" className="w-3/4 md:w-1/2" />
            </div>

            {/* Tokenomics Content */}
            <div className="w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-6">
                
                {/* Mobile Layout - Rotate image goes to bottom */}
                <div className="flex flex-col items-center gap-6 lg:hidden">
                    <div className="flex flex-col gap-4">
                        <img src={one} alt="Tokenomics 1" className="w-full max-w-sm mx-auto" />
                        <img src={two} alt="Tokenomics 2" className="w-full max-w-sm mx-auto" />
                        <img src={three} alt="Tokenomics 3" className="w-full max-w-sm mx-auto" />
                        <img src={four} alt="Tokenomics 4" className="w-full max-w-sm mx-auto" />
                    </div>
                    {/* Rotate Image - Now at Bottom */}
                    <img src={rotate} alt="Rotate" className="w-[250px] sm:w-[300px] md:w-[400px]" />
                </div>

                {/* Large Screen Layout - Rotate Image in Middle */}
                <div className="hidden lg:flex items-center justify-center gap-10">
                    {/* Left Side */}
                    <div className="flex flex-row lg:flex-col gap-6">
                        <img src={one} alt="Tokenomics 1" className="w-full max-w-sm mx-auto" />
                        <img src={three} alt="Tokenomics 3" className="w-full max-w-sm mx-auto" />
                    </div>

                    {/* Center Rotate Image */}
                    <div className="flex justify-center items-center">
                        <img 
                            src={rotate} 
                            alt="Rotate" 
                            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] rote" 
                        />
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-6">
                        <img src={two} alt="Tokenomics 2" className="w-full max-w-sm mx-auto" />
                        <img src={four} alt="Tokenomics 4" className="w-full max-w-sm mx-auto" />
                    </div>
                </div>

            </div>

           
        </div>
    );
};

export default Tokenomics;