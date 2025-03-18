import Rotate from "./text-transform/Rotate";

const Slick = () => {
  return (
    <div className="relative bg-white px-3">
      <a href="#">
        <div className="">
          <img
            class="h-100  object-cover rounded-md"
            src="https://ctcsolutions.co.ke/wp-content/uploads/2024/06/Untitled-design-4.png"
            alt="Random image"
          />
          <div class="absolute z-10 inset-0 bg-gray-700 opacity-0 rounded-md mx-3"></div>
          <div className="absolute z-20 inset-0 flex items-center justify-center ">
            <button class="bg-gray-400 text-black text-xl sm:text-4xl md:text-6xl font-bold py-2 px-4 rounded-full z-50 bottom-10 mb-7 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 ">
              Shop Now
            </button>
          </div>
          <div class="absolute inset-0 flex items-center justify-center pt-10 mr-12 pr-12">
            <div class=" text-white text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] w-fit flex items-center jusitfy-center mx-auto gap-1.5 pt-12 pr-12 ">
              <Rotate />
            </div>
          </div>
        </div>
      </a>
    </div>
    // <div className="container relative bg-white px-5 " style={{backgroundColor:'white'}}>
    //     <img class="h-100  object-cover rounded-md" src="https://ctcsolutions.co.ke/wp-content/uploads/2024/06/Untitled-design-4.png" alt="Random image" />
    //     <div class="absolute inset-0 bg-gray-700 opacity-40 rounded-md"></div>
    //     <div class="absolute inset-0 flex items-center justify-center">
    //         <h2 class="text-black text-3xl font-bold pt-12">Get Lost in Mountains</h2>
    //     </div>

    // </div>

    // <div className="h-50 px-8 bg-white py-8" style={{backgroundImage: "url()"}}>
    //     <a href="#">
    //         <img src="https://ctcsolutions.co.ke/wp-content/uploads/2024/06/Untitled-design-4.png" />

    //     </a>
    //     <div >
    //         <a href="#">
    //              <RotateWords text="" words={[]} ></RotateWords>
    //         </a>
    //     </div>
    //    Shop now for <Rotate  />
    // </div>
  );
};
export default Slick;
