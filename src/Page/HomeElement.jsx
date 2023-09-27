import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const HomeElement = ({value}) => {
    const {picture,title,category,categoryBgColor,textColor,cardBgColor,id}=value
    return (
   


        <Link to={`/donation/${id}`}>
            <button>
            
             <div>
            <div className='card card-compact  w-80 h-[350px] shadow-xl' style={{backgroundColor:cardBgColor ,color:textColor  }}>
            <figure style={{width:320, height:240 ,}} ><img className='w-80'  src={picture}  alt="logo" /></figure>
            <div className="card-body flex mx-2 my-5 ">
            <h2 className='p-3 rounded-lg w-24 flex-grow' style={{backgroundColor:categoryBgColor}}>{category}</h2>
            <p className='text-2xl text-start' >{title}</p>
            </div>
            </div>
        </div>
        </button>
        </Link>
      
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