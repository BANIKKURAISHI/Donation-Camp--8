
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Donation2 = () => {
   const gives=useLoaderData()
   const {id}=useParams()
   const newId=parseInt(id)
 // console.log(id,gives)
   const give =gives.find( give=>give.id===newId)
  // console.log(give)
   const {picture,title,description,price,buttonBgColor}=give

    const buttonHandler=()=>{
      toast("Wow so easy!")


    }


    return (
      <div>
              <div className="relative max-w-6xl mx-auto">
             
              <img src={picture} className="w-full h-96"   alt="Shoes" />
              <div className="absolute w-full bg-slate-500" >
              <button onClick={buttonHandler} className="btn mx-8" style={{backgroundColor:buttonBgColor}}>Donate {price}</button>
              </div>
              </div>
              <div className="card-body m-6 max-w-6xl mx-auto">
              <h1 className="text-5xl font-semibold"> {title}</h1>
              <h2 className="text-2xl font-medium">{description}</h2>
              </div>
              <ToastContainer />
      </div>   
      
        
    );
};

export default Donation2;