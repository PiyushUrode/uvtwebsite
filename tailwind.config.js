/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        popup: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.9" },
        },
      },
      animation: {
        popup: "popup 1s ease-in-out infinite",
        "popup-twice": "popup 2s ease-in 2",
        "popup-once": "popup 2s ease-in 1",
      },

      fontFamily: {
        Ethnocentric: ["'Ethnocentric'"], // Define Istok_Web for headings

        Montserrat: ["'Montserrat'"], // Define Quantico for paragraphs
      },

      screens: {
        zIndex: {
          60: "60",
          9999: "9999", // Custom high z-index value
        },
        screens: {
          // Reuse Tailwind's default breakpoints
          am: "400px",
          sm: "550px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },


      
      borderImage: {

        
        "custom-gradient1":
          "linear-gradient(180deg, #6D4CFF 0%, #00C6FF 100%);",

        "custom-gradient2":
          "linear-gradient(90deg, rgba(1,108,140,1) 0%, rgba(1,56,73,1) 50%, rgba(0,0,0,1) 100%);",
      },
      backgroundImage: {
        "text-custom-gradient": "radial-gradient(33.53% 33.53% at 33.53% 50%, #FFFFFF 0%, #FFC300 100%)",
        "button-custom-gradient": "linear-gradient(90deg, #EABA1D 0%, #FFFFFF 48.4%, #EABA1D 100%)",
        "red-custom-gradient": "radial-gradient(109.8% 109.8% at 0% 7.5%, #FFDD70 0%, #FFC300 32.9%, #C29400 61.9%, #453804 100%)",
        
        "usecase-gradient2": "linear-gradient(180deg, #000000 0%, #FFC300 44.5%, #000000 100%)",
    
        "usecase-gradient3": "linear-gradient(90deg, #000000 0%, #FFC300 44.5%, #FFC300 100%)",
    
        "usecase-gradient4": "linear-gradient(180deg, #FFC300 0%, #FFC300 100%)", // Making it a solid color gradient
    
        "usecase-gradient5": "linear-gradient(180deg, #FFC300 44.5%, #000000 100%)",
    },
    
      backgroundSize: {
        "200%": "200% 100%",
      },

      scrollbar: {
        width: {
          thin: "1px",
        },

        color: {
          track: "bg-gray-200",
          thumb: "bg-blue-500",
          hover: "bg-blue-700",
        },
      },

      boxShadow: {
        "custom-drop": "0px 0px 15px #ffffff",
        "custom-drop2": "inset 0px -1px 20px 3px #ffffff;",
        "custom-inner": "inset 0px 0px 5px 5px 0.5  #ffffff", // Inner shadow
        "custom-purple": "0px 0px 25px 23px rgba(255, 161, 0, 1)",
        "custom-token": "0px 0px 20px 11px rgba(255, 237, 73, 1)",
        "inner-custom": "inset 0 0 18px #ffffff",
      },
    },
  },
  plugins: [import("tailwind-scrollbar")],
};
