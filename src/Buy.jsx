import { useEffect, useState } from "react";
import buy from "./assets/HOW TO BUY.png";
import money from "./assets/money.png";
import Footer from "./Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Buy = () => {
  const [xValue, setXValue] = useState(700); // Default (xl devices)

  useEffect(() => {
    const updateXValue = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setXValue(-300); // Extra Small (xs) devices (less negative shift)
      } else if (width < 1024) {
        setXValue(-100); // Small & Medium devices (less shift)
      } else if (width < 1280) {
        setXValue(150); // Large devices (right to left)
      } else {
        setXValue(700); // Extra Large (right to left)
      }
    };

    updateXValue(); // Set initial value
    window.addEventListener("resize", updateXValue); // Listen for screen resize

    return () => window.removeEventListener("resize", updateXValue);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    AOS.refresh();
  }, []);

  return (
    <div
      id="buy"
      className="bg-[#FBC42E] z-10 -mt-8 sm:-mt-12 md:-mt-20 lg:-mt-26 custom-text"
    >
      <div className="pt-36">
        <img className="mx-auto w-9/12 md:w-auto mt-14 mb-9" src={buy} alt="" />
      </div>

      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 p-6">
        <div className="px-8 py-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-[#8B64FA] pt-5 pb-5">
            STEP 1:
          </h2>
          <p className="mt-2 text-black text-lg">
            Create a wallet on Solana - the first step to becoming part of the
            meme revolution with $DEGE!
          </p>
        </div>
        <div className="px-8 py-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-[#8B64FA] pt-5 pb-5">
            STEP 2:
          </h2>
          <p className="mt-2 text-black text-lg">
            Fill up your SOL wallet - you cant jump on the crypto bandwagon
            without fuel.
          </p>
        </div>
        <div className="px-8 py-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-[#8B64FA] pt-5 pb-5">
            STEP 3:
          </h2>
          <p className="mt-2 text-black text-lg">
            Trade SOL for $HIPPIE become part of the legendary tandem of Meme
            and his faithful dog
          </p>
        </div>
        <div className="px-8 py-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-[#8B64FA] pt-5 pb-5">
            STEP 4:
          </h2>
          <p className="mt-2 text-black text-lg">
            You did it! With $HIPPIE in your hands your meme revolution is just
            beginning, hold on tight and be ready to take off!
          </p>
        </div>
      </div>

      <div>
        <div className="mt-16 2xl:mt-32 relative">
          <div className="money-bg relative overflow-x-clip">
            <motion.img
              initial={{ x: xValue, opacity: 1 }} // Responsive initial x
              whileInView={{ x: 0, opacity: 1 }} // Move to normal position on view
              viewport={{ once: false, amount: 0.5 }} // Trigger when 50% is visible
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="mx-auto ml-0 lg:min-w-[80%] relative -top-44 xl:-top-56 2xl:-top-64"
              src={money}
              alt="Money Image"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Buy;
