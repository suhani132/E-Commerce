import data_product from "@/assets/data";
import Items from "../items/Items";

interface ItemProps {
  id: number;
  name: string;
  new_price: number;
  old_price: number;
  image: string;
}

const Popular: React.FC = () => {
  return (
    <div className='popular flex flex-col items-center gap-5 bg-pink-50'>
      <h1 className='text-gray-900 text-2xl font-semibold mt-5'>POPULAR IN WOMEN</h1>
      
      <div className='popular_item flex mt-3 gap-10  '>
        {data_product.map((item: ItemProps, index: number) => (
            <Items key={index} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default Popular