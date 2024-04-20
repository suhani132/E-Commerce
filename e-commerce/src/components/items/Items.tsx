import { Link } from "react-router-dom";

interface Props{
  id: number;
  name: string;
  image: string;
  new_price: number;
  old_price: number;
}


const Items = (props:Props) => {
  return (
    <div className='items' >
     <Link to={ `/Product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /> </Link>
      <p>{props.name}</p>
      <div className='item-prices flex gap-20'>
      <div className='new_price text-gray-700 font-normal '>
        ${props.new_price}
      </div>
      <div className='old_price text-gray-500 font-normal line-through'>
        ${props.old_price}
      </div>
         
      </div>
    </div>
  )
}

export default Items
