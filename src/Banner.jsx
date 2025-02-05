import { useEffect, useState } from 'react';
import heroimg from './assets/heroimg.png';
import hippie from './assets/HIPPIE.png';
import x from './assets/x.png';
import tele from './assets/tele.png';
import bnb from './assets/bnb.png';
import eagle from './assets/eagle.png';
import youtube from './assets/youtube.png';
import tiktok from './assets/tiktok.png'
import animation from './assets/hvr.gif';

import AOS from "aos";
import "aos/dist/aos.css";
import { IoLogoInstagram } from 'react-icons/io';

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
                            className={` w-[75%] ${isHovered ? "animate-forward" : "animate-reverse"
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
                        className="transform transition duration-400 hover:scale-107"
                        src={heroimg}
                        alt="heroimg"
                        onMouseEnter={() => setBlock(true)}
                        onMouseLeave={() => setBlock(false)}
                    />

                    <div className='grid gap-y-2 absolute right-0 lg:-right-12 3xl:right-0 top-0 xl:top-10 2xl:top-16  sm:top:40'>
                        <a href="#" target='_blank' data-aos="fade-right">
                            <img className='w-8  sm:w-14 box' src={eagle} alt="" />
                        </a>
                        <a href="#" target='_blank' data-aos="fade-right" data-aos-delay="50">
                            <img className='w-8  sm:w-14 box' src={bnb} alt="" />
                        </a>
                        <a href="https://x.com/hippieonsolona?s=21" target='_blank' data-aos="fade-right" data-aos-delay="100">
                            <img className='w-8  sm:w-14 box' src={x} alt="" />
                        </a>
                        <a href="https://t.me/+PWMrbj3qPeVkOWJh" target='_blank' data-aos="fade-right" data-aos-delay="200">
                            <img className='w-8  sm:w-14 box' src={tele} alt="" />
                        </a>

                        <a href="https://youtube.com/@hippieofdubai?si=evXR068xUg0SZb5P" target='_blank' data-aos="fade-right" data-aos-delay="300">
                            <img className='w-8  sm:w-14 box' src={youtube} alt="" />
                        </a>

                        <a href="https://www.tiktok.com/@hippieofdubai?_t=ZM-8tZzMFYInAb&_r=1" target='_blank' data-aos="fade-right" data-aos-delay="400">
                            <img className='w-8  sm:w-14 box ' src={tiktok} alt="" />
                        </a>
                        <a className='w-8  sm:w-14 box bg-black  rounded-lg md:rounded-xl py-2' href="https://www.instagram.com/hippieofdubai?igsh=MXF4eDFxdXBseXpuNQ%3D%3D&utm_source=qr" data-aos="fade-right" data-aos-delay="400" target='_blank'> <IoLogoInstagram className='font-extrabold  md:text-4xl text-[#FBC42E]'></IoLogoInstagram></a>
                    </div>

                  
                    {
                        block ?
                            <div className={`absolute top-3 md:top-5  2xl:top-10 2xl:right-36 right-10 md:right-10 z-50  `}>
                               <img
                               className={`w-56 z-50 rotate-20  `}
                                    data-aos="fade-down"
                               src={animation} alt="" />
                            </div> : ''

                    }




                </div>
            </div>
        </div>
    );
};

export default Banner;
