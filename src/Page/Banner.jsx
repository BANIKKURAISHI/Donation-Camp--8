import Background from "./Background";


const Banner = () => {

             
             
  
    return (
        <div className="relative mx-auto shadow-xl">
            <div>
            <Background></Background>
            </div>
          
           <div className="text-center absolute items-center font-bold -my-[550px] mx-[550px] "  >
                <div  >
                 <h2 className="text-5xl text-black ">I Grow By Helping People In Need  </h2>
                    <div className="border-2 w-[520px] h-16  mx-auto my-20 rounded-xl flex justify-between">
                    <input type="text" className="w-4/4 p-3 rounded-xl" placeholder="Search......" />
                    <button className="bg-red-500 p-4 w-1/4 rounded-e-xl  text-center text-white ">Search</button>
                 </div>
                 </div>
             </div>
            <div>
            
            </div>
 </div>
    );
};

export default Banner;