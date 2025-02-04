import { useEffect, useState } from 'react';
import heroimg from './assets/heroimg.png';
import hippie from './assets/HIPPIE.png';
import x from './assets/x.png';
import tele from './assets/tele.png';
import bnb from './assets/bnb.png';
import eagle from './assets/eagle.png';
import animation from './assets/animation.json';

import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from 'lottie-react';

const Banner = () => {
    const [copied, setCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [block, setBlock] = useState(false);

    const handleCopy = () => {
        const textToCopy = document.getElementById("copyText");
        textToCopy.select();
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });

        AOS.refresh();
    }, []);

    return (
        <div className="w-10/12 mx-auto">
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className=''>
                    <div className='pt-20 xl:pt-32'>
                        <img
                            className={`hover-scale w-[75%] ${isHovered ? "animate-forward" : "animate-reverse"
                                }`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            src={hippie} alt="hippie"
                        />
                    </div>
                    <p className='text-2xl lg:text-xl xl:text-2xl text-white pt-10 custom-text' data-aos="fade-left">
                        A hippie rejects mainstream values for a lifestyle centered on peace, love, freedom, and non-materialism.
                    </p>

                    {/* Copy Input Field */}
                    <div className='flex items-center justify-center lg:justify-start space-x-2 pt-2 xl:pt-6 w-full' data-aos="zoom-in">
                        <div className='w-full bg-white p-4 rounded-md shadow-md'>
                            <div className='flex items-center space-x-2'>
                                <input
                                    id="copyText"
                                    type="text"
                                    value="CA: Cr59XUhFh7XFYdpivbfNprsReryjVVKSf9Af6XhLjkYJ"
                                    readOnly
                                    className='p-2 outline-none rounded-md md:text-lg text-[#6E45D1] font-bold w-full'
                                />
                                <button
                                    onClick={handleCopy}
                                    className='bg-[#6E45D1] custom-text text-white font-bold text-xl hover:bg-amber-300 hover:text-black px-6 rounded-xl py-3 cursor-pointer'
                                >
                                    {copied ? "Copied!" : "Copy"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image Section */}
                <div className=' mt-6 relative'
                >
                    <img
                        data-aos="zoom-in"
                        className="transform transition duration-300 hover:scale-103"
                        src={heroimg}
                        alt="heroimg"
                        onMouseEnter={() => setBlock(true)}
                        onMouseLeave={() => setBlock(false)}
                    />

                    <div className='grid gap-y-2 absolute right-0 lg:-right-12 3xl:right-0 top-20 sm:top:40'>
                        <a href="#" target='_blank' data-aos="fade-right">
                            <img className='w-14 box' src={eagle} alt="" />
                        </a>
                        <a href="#" target='_blank' data-aos="fade-right" data-aos-delay="200">
                            <img className='w-14 box' src={bnb} alt="" />
                        </a>
                        <a href="#" target='_blank' data-aos="fade-right" data-aos-delay="400">
                            <img className='w-14 box' src={x} alt="" />
                        </a>
                        <a href="#" target='_blank' data-aos="fade-right" data-aos-delay="600">
                            <img className='w-14 box' src={tele} alt="" />
                        </a>
                    </div>

                  
                    {
                        block ?
                            <div className={`absolute top-10 right-56 z-50  `}>
                                <Lottie
                                    animationData={animation}
                                    loop={true}
                                    className={`w-32 z-50 rotate-20  `}
                                    data-aos="fade-down"
                                />
                            </div> : ''

                    }




                </div>
            </div>
        </div>
    );
};

export default Banner;
