import new_collections from "@/assets/new_collections";
import Items from "../items/Items";

interface ItemProps {
    id: number;
    name: string;
    new_price: number;
    old_price: number;
    image: string;
}


const Newcollections: React.FC = () => {
  return (
    <div className='container items-center mt-10 bg-pink-50'>
      <h1 className="text-gray-900 text-2xl font-semibold mt-5">NEW COLLECTIONS</h1>
      <div className='popular_item mt-3 gap-4 grid  grid-cols-4 '>
        {new_collections.map((item: ItemProps, index: number) => (
            <Items key={index} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default Newcollections
