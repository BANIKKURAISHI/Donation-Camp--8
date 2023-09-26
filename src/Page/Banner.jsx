import Background from "./Background";


const Banner = () => {

             
             
  
    return (
        <div>
           <Background></Background>
           <div className="text-center items-center font-bold -my-[500px]"  >
                <div  >
                 <h2 className="text-5xl text-black ">I Grow By Helping People In Need  </h2>
                    <div className="border-2 w-[520px] h-16 text-2xl mx-auto my-20 rounded-xl flex justify-between">
                    <input type="text" className="w-2/4 p-3 rounded-xl" placeholder="Search..." />
                    <button className="bg-red-400 p-4 rounded-xl text-center  ">Search</button>
                 
                    </div>
                  </div>

        </div>
        
           
             
             


             


        </div>
    );
};

export default Banner;