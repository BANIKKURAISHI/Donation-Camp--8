import { useLoaderData,} from "react-router-dom";
import HomeElement from "./HomeElement";
import Banner from "./Banner";





const Home = () => {
   const data=useLoaderData()



 return (
        <div >
           <Banner></Banner>
          
            <div className="grid mx-auto  md:grid-cols-2  lg:grid-cols-4 gap-20   max-w-7xl my-20">
                {
                    data.map((home)=><HomeElement key={home.id} value={home}></HomeElement>)
                }
            </div>
          
        </div>
    );
};

export default Home;