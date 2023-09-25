import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "../../Page/Home";

const myCreateRoute=createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[{
               path:'/',
               element:<Home></Home>,
               loader:()=>fetch('/Data.json/'),
      }]
    },
  ]);

  





  export default myCreateRoute;