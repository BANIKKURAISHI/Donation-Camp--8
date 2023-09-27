
const Background = () => {
    const Img={
        backgroundImage: 'url("/images/slideshowImage-489.jpg")',
        opacity:.10,
        height:800,
        marginTop:-450,
        
        
    }
       
    return (
        <div className="relative">
            <h2 className=" text-black text-4xl   text-center  md:mx-20    lg:-mx-[500px] ">I Grow By Helping People In Need  </h2>
             <div style={Img} className=" bg-no-repeat w-[380px] md:w-[1200px] -mx-48  h-[500px] lg:w-[1800px] " > 
             
            </div>
           

        </div>
    );
};

export default Background;