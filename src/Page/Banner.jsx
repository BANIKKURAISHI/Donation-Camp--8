import Background from "./Background";


const Banner = () => {

             
             
  
    return (
        <div className="relative mx-auto shadow-xl">
            <div>
            <Background></Background>
            </div>
          
           <div className="text-center mx-auto absolute items-center font-bold md:-my52   lg:mx-[550px]  -my-[550px] "  >
                <div  >
                 <h2 className=" text-black text-3xl  md:text-4xl  lg:text-5xl">I Grow By Helping People In Need  </h2>
                    <div className="border-2 w-[160px] mx-auto  rounded-xl flex justify-between md:w-[300] lg:w-[520px] h-16  my-20">
                    <input type="text" className=" w-4/4  rounded-xl p-1 lg:p-3 " placeholder="Search......" />
                    <button className="bg-red-500 p-4 w-2/4 rounded-e-xl  text-center text-white lg:w-1/4 ">Search</button>
                 </div>
                 </div>
             </div>
            <div>
            
            </div>
 </div>
    );
};

export default Banner;