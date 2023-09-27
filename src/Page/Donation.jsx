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
            
            <ul className="  grid mx-8 md:grid-cols-1  lg:grid-cols-2 gap-10">
                {
                    values.slice(0,valueLength).map(value=><li key={value.id}>
                         <div className="card-side card w-4/5 shadow-xl rounded-xl  " style={{backgroundColor:value.cardBgColor,color:value.textColor}}>
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
            <div className={valueLength > values.length  && 'hidden'}>
            <button onClick={()=>setValueLength(values.length)} className="text-2xl bg-green-600 mx-[6vh] md:mx-[6vh]  lg:mx-[57vh]  my-20 p-4 text-white font-semibold rounded-xl ">See all</button>
            </div>
          </div>
          
        
    );
};

export default Donation;


