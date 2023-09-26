
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveDonate } from "../Components/LocaStorage/LocaStogage";

const Donation2 = () => {
   const gives=useLoaderData()
   const {id}=useParams()
   const newId=parseInt(id)
 // console.log(id,gives)
   const give =gives.find( give=>give.id===newId)
  // console.log(give)
   const {picture,title,description,price,buttonBgColor}=give

    const buttonHandler=()=>{
      saveDonate(newId)
      toast("Wow so easy!")


    }


    return (
      <div>
              <div className="relative max-w-6xl mx-auto ">
             
              <img src={picture} className="w-full h-[450px]"   alt="Shoes" />
              <div className="absolute w-full p-6 bg-black opacity-50 -my-24" >
              <button onClick={buttonHandler} className="btn mx-8 opacity-150" style={{backgroundColor:buttonBgColor}}>Donate {price}</button>
              </div>
              </div>
              <div className="card-body  max-w-6xl mx-[350px] -my-8 justify-start">
              <h1 className="text-4xl font-semibold my-4"> {title}</h1>
              <h2 className="text-md font-medium">{description}</h2>
              </div>
              <ToastContainer />
      </div>   
      
        
    );
};

export default Donation2;