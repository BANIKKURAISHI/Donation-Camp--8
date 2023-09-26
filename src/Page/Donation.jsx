import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonate } from "../Components/LocaStorage/LocaStogage";


const Donation = () => {
   const donates=useLoaderData()

   const [values,setValues]=useState([])
   const [valueLength,setValueLength]=useState(4)

   useEffect(()=>{
    const DonateId=getDonate()
    
    if(donates.length > 0){
        const donateApplied =[]
       for (const id of DonateId){
        const applied=donates.find(applied => applied.id === id)
        if(applied){
            donateApplied.push(applied)
        }
       }
       setValues(donateApplied)
       // console.log(donates,donateApplied,DonateId)
    }
    
   },[donates])
 

    return (
        <div className="max-w-7xl mx-auto ">
            
            <ul className="  grid  lg:grid-cols-2 gap-10">
                {
                    values.slice(0,valueLength).map(value=><li key={value.id}>
                         <div className=" card w-4/5 shadow-xl rounded-xl lg:card-side " style={{backgroundColor:value.cardBgColor,color:value.textColor}}>
                            <img src={value.picture} className="rounded-s-xl w-2/5 " alt=""  />
                            <div className="mx-6 my-5">
                                <h1 className="text-xl w-1/3 rounded-md text-center p-2" style={{backgroundColor:value.categoryBgColor}}>{value.category}</h1>
                                <h1 className="text-xl text-black font-medium my-2"  >{value.title}</h1>
                                <h2 className="text-xl my-2" >{value.price}</h2>
                                <button className="btn text-white my-2" style={{backgroundColor:value.buttonBgColor}}>View Details</button>
                            </div>
                         </div>
                     
                    </li>)
                 }
          
            </ul>
            <button onClick={()=>setValueLength()} className="text-2xl bg-green-600 my-20 mx-[57vh] p-4 text-white font-semibold rounded-xl ">See all</button>
          </div>
          
        
    );
};

export default Donation;


{/* <div className="card w-2/5 h-80  lg:card-side bg-base-100 shadow-xl" style={{backgroundColor:cardBgColor,color:textColor}}>
                            <figure><img src={value.picture}alt="Album" className="w-96"/></figure>              <div className="card-body">
                            <h2 className="card-title" style={{backgroundColor:categoryBgColor}}>{category}</h2>             <h1>{title}</h1>             <h2>{price}</h2>
                            <div className="card-actions justify-start">
                            <button className="btn" style={{backgroundColor:buttonBgColor}}>View Details</button>
                             </div>
                             </div>
                             </div>  */}