import buy from './assets/HOW TO BUY.png'
import money from './assets/money.png'
import Footer from './Footer';
const Buy = () => {
    
    return (
        <div id='buy' className='bg-[#FBC42E] z-10 -mt-8 sm:-mt-12 md:-mt-20 lg:-mt-26  custom-text'>
            <div className='pt-36'>
                <img
                    className='mx-auto w-9/12 md:w-auto  mt-14 mb-9'
                    src={buy} alt="" />
            </div>

            <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 p-6">
                <div className="px-8 py-6 bg-white border rounded-lg shadow-md">
                    <h2 className="text-4xl font-bold text-[#8B64FA] pt-5 pb-5">STEP 1:</h2>
                    <p className="mt-2 text-black  text-lg">Create a wallet on Solana - the first step to becoming part of the meme revolution with $DEGE!</p>
                </div>
                <div className="px-8 py-6 bg-white border rounded-lg shadow-md">
                    <h2 className="text-4xl font-bold text-[#8B64FA] pt-5 pb-5">STEP 2:</h2>
                    <p className="mt-2 text-black  text-lg">Fill up your SOL wallet - you cant jump on the crypto bandwagon without fuel.</p>
                </div>
                <div className="px-8 py-6 bg-white border rounded-lg shadow-md">
                    <h2 className="text-4xl font-bold text-[#8B64FA] pt-5 pb-5">STEP 3:</h2>
                    <p className="mt-2 text-black  text-lg">Trade SOL for $HIPPIE become part of the legendary tandem of Meme and his faithful dog</p>
                </div>
                <div className="px-8 py-6 bg-white border rounded-lg shadow-md">
                    <h2 className="text-4xl font-bold text-[#8B64FA] pt-5 pb-5">STEP 4:</h2>
                    <p className="mt-2 text-black  text-lg">You did it! With $HIPPIE in your hands your meme revolution is just beginning, hold on tight and be ready to take off!</p>
                </div>
            </div>

            <div>

                <div className='money-bg mt-14 relative'>
                <div>
                <img
                className='mx-auto'
                 src={money} alt="" />
                </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Buy;