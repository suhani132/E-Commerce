import new_collections from "@/assets/new_collections";
import Items from "../items/Items";
import { useState } from "react";

interface ItemProps {
    id: number;
    name: string;
    new_price: number;
    old_price: number;
    image: string;
}

// const [new_collection, setNew_collection] = useState([]);

const Newcollections: React.FC = () => {
  return (
    <div className='container  flex flex-col  my-5 items-center justify-center mx-auto bg-pink-50'>
      <h1 className="text-gray-900 text-2xl font-semibold ">NEW COLLECTIONS</h1>
      <div className='popular_item grid  grid-cols-2 md:grid-cols-4 gap-x-5'>
        {new_collections.map((item: ItemProps, index: number) => (
            <Items key={index} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default Newcollections
