//import { useEffect, useState } from "react";
import Background from "./Background";
//import { useLoaderData } from "react-router-dom";

const Banner = () => {
 return (
        <div className="  lg:max-w-8xl -mx-10 my-[440px]">
            <Background ></Background>
           
            <div className="absolute flex flex-row border-2 rounded-lg border-state-400 mx-6 w-80 text-center  md:mx-16  lg:mx-[500px] -my-80">
            
            <input type="text" placeholder="Search....." className="p-3 lg:p-5 flex-grow outline-none " />
            <input type="submit" value="Search" className="rounded-e-lg bg-red-500 lg:p-4 w-1/3" />
            </div>
                
            </div>
               

        

        
                    

    
            
            
 
    );
};


export default Banner;