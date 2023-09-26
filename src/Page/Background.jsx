
const Background = () => {
    const Img={
        backgroundImage: 'url("./public/images/slideshowImage-489.jpg")',
        opacity:.10}
    return (
        <div>
            <div style={Img} className="bg-White w-[390px] p-6 mx-auto md:w-[600px] lg:w-[1900px] h-[800px] ">
            </div>
        </div>
    );
};

export default Background;