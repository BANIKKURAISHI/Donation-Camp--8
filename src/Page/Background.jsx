
const Background = () => {
    const Img={
        backgroundImage: 'url("./public/images/slideshowImage-489.jpg")',
        width:1900,
        height:800,
        boxShadow:30,
        opacity:.10}
    return (
        <div>
            <div style={Img} className="bg-White w-full p-6 mx-auto ">
            </div>
        </div>
    );
};

export default Background;