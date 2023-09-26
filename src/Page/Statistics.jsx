
import { useLoaderData} from "react-router-dom";
import { getDonate } from "../Components/LocaStorage/LocaStogage";
import { useEffect, useState } from "react";
import { Cell, PieChart, ResponsiveContainer,Pie  } from "recharts";
//import { } from "react-chartjs-2";





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

  const data =[
          { name:"Total Donation",value:remainingDonation},
          { name:"Your Donation",value:totalDonate}
  ]
  const COLORS = ['#006400','#FF0000'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


  
  return(
    <div className="max-w-7xl mx-auto h-[300px] border-2 border-red-500">
      {/* <h1>Total remaining:{remainingDonation}</h1> */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
  </ResponsiveContainer>
    </div>
  )
}



        


   
 
export default Statistics;