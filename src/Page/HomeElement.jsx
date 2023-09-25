import PropTypes from 'prop-types';
const HomeElement = ({value}) => {
    const {picture,title,category,categoryBgColor,textColor,cardBgColor}=value
    return (
        <div >
            <div className='card card-compact w-80 shadow-xl' style={{backgroundColor:cardBgColor ,color:textColor  }}>
            <figure><img className='w-80' src={picture}  alt="logo" /></figure>
            <div className="card-body mx-2 my-5">
            <h2 className='p-3 rounded-lg w-24' style={{backgroundColor:categoryBgColor}}>{category}</h2>
            <p className='mx-1 text-2xl' >{title}</p>
            </div>
            </div>
        </div>
    );
};

HomeElement.propTypes={
    value:PropTypes.object
}

export default HomeElement;

//style={{color:textColor,backgroundColor:cardBgColor,width:320}}

//<div className="card-body m-4">
//<h2 className="card-title" style={{backgroundColor:categoryBgColor}}>{category}</h2>
//<p>{title}</p>