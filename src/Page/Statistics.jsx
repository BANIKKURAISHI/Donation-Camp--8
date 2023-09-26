
import { useLoaderData} from "react-router-dom";
import { getDonate } from "../Components/LocaStorage/LocaStogage";
import { useEffect, useState } from "react";
import { PieChart } from "recharts";
import { Pie } from "react-chartjs-2";



const Statistics = () => {
  const loadData= useLoaderData()
  const newLoadData=parseInt(loadData.length)
  const [values,setValues]=useState([])
  const totalDonate=values.length

  useEffect(()=>{
    const DonateId=getDonate()
    
    if(loadData.length > 0){
        const donateApplied =[]
       for (const id of DonateId){
        const applied=loadData.find(applied => applied.id === id)
        if(applied){
            donateApplied.push(applied)
        }
       }
       setValues(donateApplied)
       // console.log(donates,donateApplied,DonateId)
    }
    
   },[loadData])

  const remainingDonation =newLoadData-totalDonate

  const calculate =[
          { name:"Total Donation",value:remainingDonation},
          { name:"Your Donation",value:totalDonate}
  ]


  return(
    <div>
       <h1>This is remaing value :{remainingDonation }</h1>
    </div>
  )
}



        


   
 
export default Statistics;