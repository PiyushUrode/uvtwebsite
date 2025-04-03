import  { useState,  memo } from "react";

import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import "../App.css"
const Presale = memo(function Presale() {
  const contractAddress = "0x628cA0F0e20fA75acc84F1131538B97E3023B1C5";
  const [copyStatus, setCopyStatus] = useState("");



  const handleCopy = () => {
    navigator.clipboard
      .writeText(contractAddress)
      .then(() => {
        toast.success("Copied to Clipboard! ✅"); // Toast notification
        setCopyStatus("Copied to Clipboard!");
        setTimeout(() => setCopyStatus(""), 2000); // Clears the message after 2 seconds
      })
      .catch(() => {
        toast.error("Copy failed ❌"); // Error toast
        setCopyStatus("Copy failed");
      });
  };

  return (
    <>
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}

/>

      <div className="flex flex-col text-center gap-2 align-middle items-center justify-center w-full px-5 py-10" id="contract">
      

        <div className="bg-button-custom-gradient  w-full sm:w-[90%] md:w-[80%] lg:w-[60%] p-0.5 rounded-3xl"
        style={{
          boxShadow: "0px 0px 33.8px 0px #FEBE0E33 inset",
          padding: "20px",
          background: "#000",
          borderRadius: "10px",
          color: "#fff",
        }}
        >
            <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-[#000000] py-1" id="usecase">
          <div className="w-full max-w-5xl">
            <h2 className="font-semibold bg-text-custom-gradient  bg-clip-text text-transparent mt-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl">
              Contract Address
            </h2>
            <div className="flex justify-center mt-4">
              <p className="text-[#CECECE] text-lg md:text-xl leading-relaxed w-full md:max-w-[100%] max-w-full ">
              Secure your UVT transactions with the official contract address              </p>
            </div>
          </div>
        </div>

          <div className="">
            <div className="bg-black rounded-3xl p-5 flex flex-col gap-2 items-center text-center justify-center overflow-x-hidden text-wrap">
            <p
  className="text-base sm:text-lg md:text-xl font-semibold w-full break-all px-2 leading-tight p-3 rounded-2xl text-center"
>
  {contractAddress}
</p>


              <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto">
                <button
                  className="relative rounded-xl px-16 md:px-16 py-5 text-sm md:text-base text-white bg-usecase-gradient2 hover:text-[#ddd] border-2 border-transparent"
                  onClick={handleCopy} // ✅ Fixed function call
                
                >
                  <span className="absolute inset-0 rounded-xl bg-usecase-gradient2 p-px flex items-center justify-center">
                    <span className="absolute inset-0 rounded-xl bg-black bg-usecase-gradient2 text-white flex items-center justify-center">
                      Copy Address
                    </span>
                  </span>
                </button>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Presale;
