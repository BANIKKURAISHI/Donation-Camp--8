import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
   
    const [MenuOpen, setMenuOpen] = useState(false);

    const newMenu = () => {
      setMenuOpen(!MenuOpen);

    }
       

    
    return (
        <div className="max-w-7xl -mx-3 md:mx-10 gap-auto lg:mx-[400px] my-10">
           
        
            {/* <div className="flex   lg:justify-between  p-20  max-w-7xl mx-60">
            <div >
            <img src="https://i.ibb.co/KXWYFZt/Logo.png" className="w-60" alt="Logo" />
            </div>
           
          <div className=" text-3xl -mx-52">
          <NavLink
             to="/"
              className={({ isActive, isPending ,}) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Home</NavLink>
         <NavLink
             to='/donation/'
             className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Donation</NavLink>
         <NavLink
             to="/statistics"
             className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Statistics</NavLink>
         </div> */}


<div className="navbar max-w-7xl bg-base-100">

  <div className="flex  flex-row gap-7 text-center navbar-center  ">
    
    <div className="dropdown text-2xl">
      <label onClick={newMenu} tabIndex={0} className="btn btn-ghost  lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
   
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
      <div className=" flex flex-col justify-around text-xl p-5">
          <NavLink
             to="/"
              className={({ isActive, isPending ,}) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Home</NavLink>
         <NavLink
             to='/donation/'
             className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Donation</NavLink>
         <NavLink
             to="/statistics"
             className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Statistics</NavLink>
         </div>

      </ul>
    </div>
    <a className="normal-case text-xl">
    <div className="justify-end -mx-6"  >
            <img src="https://i.ibb.co/KXWYFZt/Logo.png" className="w-60" alt="Logo" />
            </div>
    </a>
  </div>
  
  <div className="navbar-end hidden  lg:flex">
    <ul className="menu menu-horizontal px-1">
    <div className=" text-3xl -mx-52">
          <NavLink
             to="/"
              className={({ isActive, isPending ,}) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Home</NavLink>
         <NavLink
             to='/donation/'
             className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Donation</NavLink>
         <NavLink
             to="/statistics"
             className={({ isActive, isPending }) =>
             isPending ? "pending" : isActive ? "text-red-500 underline mx-2" : "mx-2" }>Statistics</NavLink>
         </div>
      
    </ul>
  
</div>
</div>
</div>
    )}


export default Navbar;