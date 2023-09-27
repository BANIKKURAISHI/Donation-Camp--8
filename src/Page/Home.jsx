import { useLoaderData,} from "react-router-dom";
import HomeElement from "./HomeElement";
import Banner from "./Banner";









const Home = () => {
   const data=useLoaderData()



 return (
        <div className="max-w-7xl mx-10 md:mx-60 my-20 gap-20   lg:mx-auto " >
              <Banner></Banner>
          
            <div className="grid grid-cols-1 -mx-4 md:grid-cols-3 gap-20 lg:grid-cols-4  -my-[400px]   ">
                {
                    data.map((home)=><HomeElement key={home.id} value={home}></HomeElement>)
                }
            </div>
          
        </div>
    );
};

export default Home;