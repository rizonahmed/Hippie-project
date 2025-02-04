import { useState } from 'react';
import heroimg from './assets/heroimg.png';
import hippie from './assets/HIPPIE.png';
import x from './assets/x.png'
import tele from './assets/tele.png'
import bnb from './assets/bnb.png'
import eagle from './assets/eagle.png'
import love from './assets/love.png'

const Banner = () => {
    const [copied, setCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [logo, setLogo] = useState(false);


    const handleCopy = () => {
        const textToCopy = document.getElementById("copyText");
        textToCopy.select();
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    };

    return (
        <div className="w-10/12 mx-auto">
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className=' '>
                    <div className='pt-20 xl:pt-32 '>
                        <img
                            // className='w-[75%] hover-scale'
                            className={`hover-scale w-[75%]  ${
                                isHovered ? "animate-forward" : "animate-reverse"
                              }`}
                              onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)}
                            src={hippie} alt="hippie" />
                    </div>
                    <p className='text-2xl lg:text-xl xl:text-2xl: text-white pt-10 custom-text'>
                        A hippie rejects mainstream values for a lifestyle centered on peace, love, freedom, and non-materialism.
                    </p>
                    <input type="text" />

                    {/* Copy Input Field */}
                    <div className='flex items-center justify-center lg:justify-start space-x-2 pt-2 xl:pt-6 w-full'>
                        <div className='w-full bg-white p-4 rounded-md shadow-md'>
                            <div className='flex items-center space-x-2'>
                                <input
                                    id="copyText"
                                    type="text"
                                    value="CA: Cr59XUhFh7XFYdpivbfNprsReryjVVKSf9Af6XhLjkYJ"
                                    readOnly
                                    className='p-2 rounded-md md:text-lg text-[#6E45D1] font-bold w-full'
                                />
                                <button
                                    onClick={handleCopy}
                                    className='bg-[#6E45D1] custom-text  text-white font-bold text-xl hover:bg-amber-300 hover:text-black px-6 rounded-xl py-3 cursor-pointer'>
                                    {copied ? "Copied!" : "Copy"}
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='hero-container mt-6 relative'>
                    <img className='' src={heroimg} alt="heroimg" />


                    <div className='grid gap-y-2 absolute  right-0 lg:-right-12 3xl:right-0 top-20 sm:top:40'>
                        <a href="#" target='_blank'> <img 
                        className={`hover-scale  ${
                            logo ? "animate-forward" : "animate-reverse"
                          }`}
                          onMouseEnter={() => setLogo(true)}
                          onMouseLeave={() => setLogo(false)}
                        src={eagle} alt="" />
                        </a>
                        <a href="#" target='_blank'> <img src={bnb} alt="" />
                        </a>
                        <a href="#" target='_blank'>
                            <img src={x} alt="" />
                        </a>
                        <a href="#" target='_blank'>
                            <img src={tele} alt="" />
                        </a>
                    </div>
                    <img
                    className='love-image w-48 absolute  top-0 right-28'
                    src={love} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
