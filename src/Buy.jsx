import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import buy from "../src/assets/HOW TO BUY.png";
import money from "./assets/money.png";
import Footer from "./Footer"; // Assuming you have a Footer component

const Buy = () => {
  const [xValue, setXValue] = useState(0);
  const [isXL, setIsXL] = useState(window.innerWidth >= 1280); // xl breakpoint = 1280px

  useEffect(() => {
    const updateXValue = () => {
      const width = window.innerWidth;
      setIsXL(width >= 1280); // Update isXL state

      if (width < 576) {
        setXValue(-300);
      } else if (width < 1024) {
        setXValue(-100);
      } else if (width < 1280) {
        setXValue(150);
      } else {
        setXValue(700);
      }
    };

    updateXValue();
    window.addEventListener("resize", updateXValue);

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
      className="bg-[#FBC42E] z-10 p -mt-8 sm:-mt-12 md:-mt-20 lg:-mt-26 custom-text overflow-x-hidden"
    >
      {/* Buy Section */}
      <div className="pt-36">
        <img className="mx-auto w-9/12 md:w-auto mt-14 mb-9" src={buy} alt="Buy Section" />
      </div>

      {/* Steps Section */}
      <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 p-6">
        {[
          { step: "Get a Solana Wallet", text: "We recommend Phantom, Solflare, or any wallet that won’t rug you." },
          { step: "Load That Bad Boy", text: "Buy some SOL from your favorite exchange and load it up in your wallet." },
          { step: "Hit Up Jupiter or raydium", text: "Go to Jupiter or Raydium, type in HIPPIE, and swap that SOL for some next-level meme magic." },
          { step: "Welcome to HIPPIE Army", text: "You’re a proud holder of the most hyped memecoin galaxy. " },
        ].map((item, index) => (
          <div key={index} className="px-8 py-6 bg-white border rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-[#8B64FA] pt-5 pb-5">{item.step}</h2>
            <p className="mt-2 text-black text-lg">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Money Animation Section */}
      <div>
        {isXL ? (
          /** ✅ Large Screen (xl and above) */
          <div className="mt-16 2xl:mt-32 relative">
            <div className="money-bg relative overflow-x-clip">
              <motion.img
                initial={{ x: xValue, opacity: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="mx-auto ml-0 lg:min-w-[80%] relative -top-44 xl:-top-56 2xl:-top-64"
                src={money}
                alt="Money Image"
              />
            </div>
          </div>
        ) : (
          /** ✅ Small & Medium Screen (below xl) */
          <div className="w-11/12 mx-auto  mt-16 2xl:mt-32">
            <div className="money-bg relative  -top-38 overflow-x- scale-150 mt-56">
              <motion.img
                initial={{ x: 100, opacity: 1 }}
                whileInView={{ x: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="mx-auto ml-0 lg:min-w-[80%] relative -top-20 xl:-top-56 2xl:-top-64"
                src={money}
                alt="Money Image"
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Buy;
