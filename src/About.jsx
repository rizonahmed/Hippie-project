import about from './assets/ABOUT.png';
import aboutImg from './assets/aboutimg.png';
import Tokenomics from './Tokenomics';
import layer2 from './assets/layer2.png'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';


const About = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e; setPosition({
            x: (clientX / window.innerWidth) * 50 - 50, y: (clientY / window.innerHeight) * 50 - 50,
        });
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
        <div>
            <div id='about' className="bg-[#8B64FA] h-full w-full -mt-1 pb-20 ">

                <div className='lg:w-10/12 mx-auto lg:pt-16 flex flex-col-reverse lg:flex-row'>
                    <div className='w-full lg:w-6/12 flex justify-center mx-auto' onMouseMove={handleMouseMove}>
                        <img
                            className='abouts 2xl:w-[70%] transition-transform duration-200'
                            src={aboutImg}
                            alt=""
                            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
                        />
                    </div>

                    <div className='text-center lg:w-6/12'>
                        <div>
                            <img
                                data-aos="zoom-in"
                                className='pt-20 mx-auto w-6/12 md:w-auto'
                                src={about}
                                alt=""
                            />
                            <p
                                data-aos="zoom-in"
                                className='pt-8 mx-auto  text-white px-5 lg:px-0 lg:text-xl xl:text-3xl custom-text'
                            >
                                Hippie is a revolutionary movement on the Solana blockchain, designed to bring together like-minded individuals who are ready to embrace a new era of love, oneness, and collective growth. In a world increasingly defined by fear, greed, and money, Hippie aims to shift the narrative towards generosity, connection, and higher consciousness.
                            </p>
                        </div>
                    </div>
                </div>


                <Tokenomics></Tokenomics>



            </div>
            <div className='w-full bg-[#8B64FA] '>
                <img
                    className='w-full  bg-[#8B64FA]'
                    src={layer2} alt="" />
            </div>

        </div>
    );
};

export default About;