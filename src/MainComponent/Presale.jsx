import React from 'react';
import Uvt from "../assets/PRESALE/Uvt.png";
import card1 from "../assets/PRESALE/card1.png";
import card2 from "../assets/PRESALE/card2.png";
import card3 from "../assets/PRESALE/card3.png";
import card4 from "../assets/PRESALE/card4.png";
import card5 from "../assets/PRESALE/card5.png";
import card6 from "../assets/PRESALE/card6.png";
import card7 from "../assets/PRESALE/card7.png";
import step1icon from "../assets/PRESALE/step1icon.png"
import step2icon from "../assets/PRESALE/step2icon.png"
import step3icon from "../assets/PRESALE/step3icon.png"
import step4icon from "../assets/PRESALE/step5icon.png"


const Presale = () => {
  const value = 300.34;
  const maxValue = 500;
  const percentage = (value / maxValue) * 100;
 
  return (
    <>  
    <section className='w-full max-w-full  presalebackgroundimg '>  
    <div className='flex flex-col md:flex-row  text-white px-6 lg:px-16 py-5 md:py-16 rounded-lg max-w-7xl mx-auto '>
      {/* Left Section */}
      <div className='flex flex-col w-full justify-center  align-middle md:w-1/2 px-4 md:px-8'>
        <h5 className='text-3xl md:text-4xl text-white font-extrabold mb-4 leading-tight'
        style={{
          WebkitTextStroke: "1px text-[#fffff] ",  // Corrected camelCase   #ffc40083
          WebkitTextFillColor: "#fffff", //   Optional: Makes inner text transparent
          textShadow: "2px 8px black"     
        }}
        >UVT CINEMA Token Presale – Secure Your Spot Early!</h5>
        <p className='text-white mb-6 text-sm md:text-base'>
          Join the UVT CINEMA Token presale and be part of the future of metaverse entertainment. Get early access, exclusive rewards, and investment opportunities. Secure your UVT tokens today and shape the digital cinema revolution!
        </p>
        <div className='flex gap-4'>
          <button className=' text-black px-5 py-2 rounded-md font-bold text-sm md:text-base'
          style={{background: "radial-gradient(130.8% 130.8% at 0% 7.5%, #FFDD70 0%, #FFC300 32.9%, #C29400 61.9%, #453804 100%)" 
          }}
          >Buy Now</button>
          <button className='border border-gray-400 text-yellow-400 px-5 py-2 rounded-md text-sm md:text-base'>Refer Now</button>
        </div>
      </div>
      
      {/* Right Section */}
      <div className='flex flex-col w-full md:w-1/2 bg-black rounded-lg mt-8 md:mt-0'>
        <div className='flex justify-between items-center bg-[#2C2C2C] p-4 rounded-md mb-6'>
            <p className='text-gray-400 text-sm md:text-base'>Current Batch</p>
            <p className='text-white font-bold text-sm md:text-base'>BATCH 1</p>
        </div>
        
        <div className='bg-black px-6 py-6 flex flex-col gap-3 rounded-xl'>
            <div className='bg-[#2C2C2C] p-6 rounded-lg'>
                <div className='flex justify-between items-center mb-6'>
                    <div className='text-center'>
                        <h5 className='text-gray-400 text-xs md:text-sm'>Total Coin Sales USD</h5>
                        <h5 className='text-white font-bold text-sm md:text-lg'>$15,756,435.59</h5>
                    </div>
                    <div className='w-[1px] h-12 border border-[#8D8D8D]'></div>
                    <div className='text-center'>
                        <h5 className='text-gray-400 text-xs md:text-sm'>Total Coins Sold</h5>
                        <h5 className='text-white font-bold text-sm md:text-lg'>7,208,727,308</h5>
                    </div>
                </div>
                
                <div className="relative w-full max-w-[500px] h-[40px] bg-black rounded-full flex items-center p-1 shadow-md border border-gray-700">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full"
                        style={{ width: `${percentage}%` }}
                    ></div>
                    <div className="relative z-10 flex justify-between w-full px-4 text-white font-semibold text-sm">
                        <span className='text-[10px] sm:text-[10px] md:text-md ' >Remaining {value}M</span>
                    </div>
                    <div
                        className="absolute left-1/2 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full border-2 border-white shadow-inner shadow-md shadow-[#0000007d]"
                        style={{ background: "linear-gradient(180deg, #EABA1D 21.9%, #000000 100%)" }}
                    >
                        <div className='w-4 h-4 bg-white shadow-inner shadow-md shadow-[#0000007d] left-1 top-1 absolute rounded-full'></div>
                    </div>
                </div>
                
                <div className='flex justify-between my-4 text-xs md:text-sm'>
                    <h5 className='text-gray-300'>0.0045 USDT = 1 UVT</h5>
                    <h5 className='text-gray-300'>Next Batch: 0.005</h5>
                </div>
          
            
            <div 
                className="flex justify-between  w-full gap-2 mb-6 py-1 rounded-lg" 
                style={{ background: "linear-gradient(90deg, #000000 18.9%, #EABA1D 100%)" }}
            >
                <button className="text-white px-5 py-2 rounded-md font-bold text-sm md:text-base">
                    Buy Token
                </button>
                <img src={Uvt} alt="UVT Token" className="w-8 h-8 md:w-10 md:h-10" />
            </div>

            </div>
            
            <div className='flex justify-center gap-4 flex-wrap mb-6'>
                {[card1, card2, card3, card4, card5, card6, card7].map((card, index) => (
                    <img key={index} src={card} alt={`card${index + 1}`} className='w-8 h-8 md:w-10 md:h-8 ' />
                ))}
            </div>
            
            <div className='flex gap-2 text-gray-300 text-xs md:text-sm justify-center'>
                <h5>Do you have any referral code?</h5>
                <h5 className='text-yellow-400'>Yes</h5>
            </div>
        </div>
    </div> 
    </div>

{/* next down section */}
    <div className="flex flex-col w-full justify-center items-center ">
  <div className="w-full flex flex-col justify-center items-center text-center">
    <h5 className="font-semibold bg-text-custom-gradient text-base bg-clip-text text-transparent mt-4">
      How to buy
    </h5>
    <div className="flex justify-center">
      <p className="text-[#ffffff] font-bold md:text-xl leading-relaxed w-full md:max-w-[100%] max-w-full text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
        How to Buy UVT CINEMA Token – Quick & Easy Guide
      </p>
    </div>
  </div>


  <div className="flex flex-row flex-wrap gap-5 justify-center items-center w-full p-5 py-20">
      {/* Section 1 */}
      <div className="flex flex-col items-center text-center">
        <div 
          className="flex flex-col justify-center items-center p-5 relative text-white gap-5"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 40%, 100% 99%, 0 100%, 0% 40%)",
            background: "#1B1B1B",
            height: "220px",
            width: "300px",
            border: "2px solid black"
          }}
        >
          <img src={step1icon} alt="" className='w-10' />
          <p className='text-[15px] font-bold'>UVTCINEMA.io</p>
          <p className='text-[10px]'>Visit UVTCINEMA.IO and click on the “Buy Token” button on the homepage.</p>
        </div>
        <div 
          className="flex flex-col justify-center step1 items-center p-5 relative text-white"
          style={{
            clipPath: "polygon(100% 0, 0 0, 50% 100%)",
            
            height: "150px",
            width: "300px",
            border: "2px solid black"
          }}
        >
<p

className="text-[30px]  font-extrabold text-black leading-tight md:leading-relaxed"
style={{
  WebkitTextStroke: "1px text-[#2b2929] ",  // Corrected camelCase   #ffc40083
  WebkitTextFillColor: "#FFC300", //   Optional: Makes inner text transparent
  textShadow: "2px 5px #ffc40083"     
}}
>
Step1
</p>
        </div>
      </div>


      {/* Section 2 */}
      <div className="flex flex-col  items-center text-center ">
    
      <div 
          className="flex flex-col step2 justify-center items-center p-5 relative text-white"
          style={{
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
           
            height: "200px",
            width: "300px",
            border: "2px solid black"
          }}
        >
<p

className="text-[30px]  font-extrabold text-black leading-tight md:leading-relaxed"
style={{
  WebkitTextStroke: "1px text-[#2b2929] ",  // Corrected camelCase   #ffc40083
  WebkitTextFillColor: "#FFC300", //   Optional: Makes inner text transparent
  textShadow: "2px 5px #ffc40083"     
}}
>
Step2
</p>
        </div>
    
    
        <div 
          className="flex flex-col  justify-center items-center p-5 relative text-white gap-5"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            background: "#1B1B1B",
            height: "220px",
            width: "300px",
            border: "2px solid black"
          }}
        >
          <p className='text-[15px] font-bold'>Connect Wallet</p>
          <p className='text-[10px]'>Connect your MetaMask wallet or Trust Wallet to the platform and make sure you have USDT(Tether) in your wallet.</p>
          <img src={step2icon} alt="" className='w-10' />
        </div>
    
      </div>

      {/* Section 3 */}
      <div className="flex flex-col items-center text-center">
        <div 
          className="flex flex-col justify-center items-center p-5 relative text-white gap-5"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 40%, 100% 99%, 0 100%, 0% 40%)",
            background: "#1B1B1B",
            height: "220px",
            width: "300px",
            border: "2px solid black"
          }}
        >
          <img src={step3icon} alt="" className='w-10' />
          <p className='text-[15px] font-bold'>Authorize Transaction </p>
          <p className='text-[10px]'>Enter the amount of USDT you wish to use for purchasing UVT Cinema token and click on “APPROVE” to authorize the transaction.</p>
        </div>
        <div 
          className="flex flex-col justify-center step1 items-center p-5 relative text-white"
          style={{
            clipPath: "polygon(100% 0, 0 0, 50% 100%)",
            
            height: "150px",
            width: "300px",
            border: "2px solid black"
          }}
        >
<p

className="text-[30px]  font-extrabold text-black leading-tight md:leading-relaxed"
style={{
  WebkitTextStroke: "1px text-[#2b2929] ",  // Corrected camelCase   #ffc40083
  WebkitTextFillColor: "#FFC300", //   Optional: Makes inner text transparent
  textShadow: "2px 5px #ffc40083"     
}}
>
Step3
</p>
        </div>
      </div>


      {/* section 4 */}
      <div className="flex flex-col items-center text-center ">
    
    <div 
        className="flex flex-col step4 justify-center items-center p-5 relative text-white"
        style={{
          clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
       
          height: "200px",
          width: "250px",
          border: "2px solid black"
        }}
      >


<p

  className="text-[30px]  font-extrabold text-black leading-tight md:leading-relaxed"
  style={{
    WebkitTextStroke: "1px text-[#2b2929] ",  // Corrected camelCase   #ffc40083
    WebkitTextFillColor: "#FFC300", //   Optional: Makes inner text transparent
    textShadow: "2px 5px #ffc40083"     
  }}
>
Step4
</p>
      </div>
  
  
      <div 
        className="flex flex-col justify-center items-center p-5 relative text-white relative "
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          background: "#1B1B1B",
          height: "200px",
          width: "250px",

        }}
      >

        <p className='text-[15px] font-bold'>Finalize Purchase </p>
        <p className='text-[10px]'>Enter the approved USDT amount and click “BUY” to finalize the purchase.  Check your wallet to confirm the UVT Token transaction. </p>
        <img src={step4icon} alt=""  className='w-10'  />
      </div>
      
  
    </div>
    </div>



</div>
</section>

    </>
  );
};

export default Presale;