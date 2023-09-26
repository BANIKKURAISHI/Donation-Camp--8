import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "../../Page/Home";

import Error from "../../Page/Error";

import Donation2 from "../../Page/donation2";
import Donation from "../../Page/Donation";
import Statistics from "../../Page/Statistics";







const myCreateRoute=createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:

      [
      


      {
               path:'/',
               element:<Home></Home>,
               loader:()=>fetch('/Data.json/'),
      },

      {
        path:'//donation/:id',
        element:<Donation2></Donation2>,
        loader:()=>fetch('/Data.json/')
      },
   
      {
        path:'/donation/',
        element:<Donation></Donation>,
        loader:()=>fetch('../Data.json/')
      },
      {
        path:'/statistics/',
        element:<Statistics></Statistics>,
        loader:()=>fetch('../Data.json/')
      }
    
    ]
       




    
    
   }] );

  





  export default myCreateRoute;