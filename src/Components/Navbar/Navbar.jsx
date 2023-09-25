import { NavLink } from "react-router-dom";
const Navbar = () => {
   
        
       

    
    return (
        <div>
           
        
            <div className="flex   lg:justify-between  p-20  max-w-7xl mx-60 opacity-100 ">
            <div >
            <img src="https://i.ibb.co/KXWYFZt/Logo.png" className="w-60" alt="Logo" />
            </div>
           
          <div className=" text-3xl -mx-52">
          <NavLink
             to="/"
             className={({ isActive, isPending ,}) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Home</NavLink>
         <NavLink
             to="/home"
             className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Donation</NavLink>
         <NavLink
             to="/home"
             className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Statistics</NavLink>
         </div>
         </div>

         <div className="text-center items-center font-bold ">
                 <h2 className="text-5xl text-black">I Grow By Helping People In Need  </h2>
                    <div className="border-2 w-[520px] h-16 text-2xl mx-auto my-20 rounded-xl flex justify-between">
                    <input type="text" className="w-2/4 p-3 rounded-xl" placeholder="Search..." />
                    <button className="bg-red-400 p-4 rounded-xl text-center  ">Search</button>
                    </div>
                 
                 </div>



         <div  style={{backgroundImage:"url('./public/images/slideshowImage-489.jpg')",
           height:700 ,width:2000,backgroundSize:'cover', marginBottom:100,opacity:0.10}}className="shadow-xl -my-[500px] shadow-2xl"  > 
             
           </div>



                
     
      
           
                

            </div>
          
         
    );
};

export default Navbar;