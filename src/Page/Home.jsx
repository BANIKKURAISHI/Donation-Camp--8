import { useLoaderData } from "react-router-dom";
import HomeElement from "./HomeElement";


const Home = () => {
   const data=useLoaderData()
 
   
   
   console.log(data)
    return (
        <div >
           
            <div className="grid mx-auto md:grid-cols-2   lg:grid-cols-4 gap-20 max-w-7xl ">
                {
                    data.map((home)=><HomeElement key={home.id} value={home}></HomeElement>)
                }
            </div>
          
        </div>
    );
};

export default Home;