import about from './assets/ABOUT.png';
import aboutImg from './assets/aboutimg.png';
import Tokenomics from './Tokenomics';
import layer2  from './assets/layer2.png'

const About = () => {
    return (
      <div>
          <div id='about' className="bg-[#8B64FA] h-full w-full -mt-1 pb-20 ">
             
             <div className='lg:w-10/12 mx-auto pt-16 flex  flex-col-reverse lg:flex-row'>
                <div className='w-10/12 flex justify-center '>
                    <img
                    className='xl:w-[80%] ' src={aboutImg} alt="" />
                </div>
                <div className='text-center'>
                    <div>
                    <img
                    className='pt-20 mx-auto w-' src={about} alt="" />
                    <p className='pt-8 text-white text-2xl custom-text'>Hippie is a revolutionary movement on the Solana <br /> blockchain, designed to bring together <br /> like-minded individuals who are ready to embrace a new era of love, oneness, and collective growth. <br /> In a world increasingly defined by fear, greed, and money, <br /> Hippie aims to shift the narrative towards generosity, connection, and higher consciousness.</p>
                    </div>

                </div>
             </div>

             <Tokenomics></Tokenomics>


             
        </div>
        <div className='w-full bg-[#8B64FA] '>
        <img
          className='w-full  '
          src={layer2} alt="" />
      </div>

      </div>
    );
};

export default About;