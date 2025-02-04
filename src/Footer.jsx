import woof from './assets/woof.png';
import footer from './assets/footer.png';
import eagle2 from './assets/eagle2 (1).png';
import x2 from './assets/x2.png';
import tele2 from './assets/tele2.png';
import bnb2 from './assets/bnb2.png';

const Footer = () => {
  return (
    <div>
      <div className="my-10 w-10/12 mx-auto md:flex justify-evenly items-center">
        <div className="">
          <img
            className="w-[80%] mx-auto pt-10"
            src={woof}
            alt=""
          />
          <p className="mt-8 text-center md:text-xl lg:text-2xl 2xl:text-3xl">
            Join HIPPIE and we’ll build a strong community together!
          </p>
        </div>
        <div className="">
          <img
            className="w-full"
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
          <img
            className="bell-button shake-forward"
            src={tele2}
            alt="tele2"
          />
          <img
            className="shake-reverse"
            src={x2}
            alt="x2"
          />
          <img
            className="shake-forward"
            src={eagle2}
            alt="eagle2"
          />
          <img
            className="shake-reverse"
            src={bnb2}
            alt="bnb2"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
