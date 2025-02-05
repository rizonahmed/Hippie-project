import woof from './assets/woof.png';
import footer from './assets/footer.png';
import eagle2 from './assets/eagle2 (1).png';
import x2 from './assets/x2.png';
import tele2 from './assets/tele2.png';
import bnb2 from './assets/bnb2.png';
import { useEffect } from 'react';
import tiktok2 from './assets/tiktok2.png'
import youtube2 from './assets/youtube2.png'

import AOS from "aos";
import "aos/dist/aos.css";
import { IoLogoInstagram } from 'react-icons/io';


const Footer = () => {

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
      <div className="my-10 w-10/12 mx-auto -mt-28 lg:-mt-28 md:flex justify-evenly items-center">
        <div
          className="">
          <img data-aos="zoom-in"
            className="w-[80%] mx-auto pt-10"
            src={woof}
            alt=""
          />
          <p
            data-aos="zoom-in"
            className="mt-8 text-center md:text-xl lg:text-2xl 2xl:text-3xl">
            Join HIPPIE and we’ll build a strong community together!
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="">
          <img
            className="w-full hover-move"
            src={footer}
            alt=""
          />
        </div>
      </div>

      <div className="md:w-10/12 mx-auto md:flex justify-between items-center py-10">
        <div>
          <p className="font-medium text-center">
            Copyright © 2025 HIPPIE. All rights reserved
          </p>
        </div>
        <div className="flex gap-2 justify-center mt-5 md:mt-0">
          
          <a href="https://t.me/+PWMrbj3qPeVkOWJh">
          <img
            className="  box cursor-pointer"
            src={tele2}
            alt="tele2"
          />
          </a>
          <a href="https://x.com/hippieonsolona?s=21">
          <img
            className=" box cursor-pointer"
            src={x2}
            alt="x2"
          />
          </a>
          <a href="">
          <img
            className="box  cursor-pointer"
            src={eagle2}
            alt="eagle2"
          />
          </a>
         <a href="">
         <img
            className=" box cursor-pointer"
            src={bnb2}
            alt="bnb2"
          />
         </a>
         <a href="https://youtube.com/@hippieofdubai?si=evXR068xUg0SZb5P">
         <img
            className=" box cursor-pointer"
            src={youtube2}
            alt="youtube"
          />
         </a>
          <a href="https://www.tiktok.com/@hippieofdubai?_t=ZM-8tZzMFYInAb&_r=1">
          <img
            className=" box cursor-pointer"
            src={tiktok2}
            alt="tiktok"
          />
          </a>
          <a className='w-12 box bg-[#6E45D1]  rounded-xl py-2 ' href="https://www.instagram.com/hippieofdubai?igsh=MXF4eDFxdXBseXpuNQ%3D%3D&utm_source=qr" target='_blank'> <IoLogoInstagram className='font-extrabold  text-2xl text-white '></IoLogoInstagram></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
