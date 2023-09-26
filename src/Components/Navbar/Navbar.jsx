import { NavLink } from "react-router-dom";


const Navbar = () => {
   
        
       

    
    return (
        <div className="">
           
        
            <div className="flex   lg:justify-between  p-20  max-w-7xl mx-60 opacity-100 ">
            <div >
            <img src="https://i.ibb.co/KXWYFZt/Logo.png" className="w-60" alt="Logo" />
            </div>
           
          <div className=" text-3xl -mx-52">
          <NavLink
             to=""
              className={({ isActive, isPending ,}) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Home</NavLink>
         <NavLink
             to='/donation/:id'
             className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Donation</NavLink>
         <NavLink
             to="/statistics"
             className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Statistics</NavLink>
         </div>
         
         </div>
      
       

                
     
      
           
                

            </div>
          
         
    );
};

export default Navbar;