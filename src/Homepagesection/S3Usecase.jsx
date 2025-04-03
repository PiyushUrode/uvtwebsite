// import "../Homepagesection/Usecase.css"
import UsecaseSlider from "../MainComponent/UsecaseSlider.jsx"



  const SliderComponent = () => {
    return (
    <> 
  <div
              className="flex flex-col  items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-[#000000] py-10 "
              id="usecase"
            >
              <div className="w-full max-w-5xl">
              
                <h2 className="font-semibold bg-text-custom-gradient  text-base  bg-clip-text text-transparent mt-4 ">
                  Use Cases
                </h2>
                <div className="flex justify-center ">
                  <p className="text-[#ffffff] font-bold md:text-xl leading-relaxed w-full md:max-w-[80%] max-w-full  text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
                  Immersive VR/AR Cinema Experience
                  </p>
                </div>
              </div>


              <UsecaseSlider />
            </div>
   
      </>
    );
  };



  export default SliderComponent;
