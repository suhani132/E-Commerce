import React from 'react'
import data_product from '@/assets/data'
import Items from '../items/Items';

interface ItemProps {
    id: number;
    name: string;
    new_price: number;
    old_price: number;
    image: string;
}

const RelatedProducts: React.FC = () => {
  return (
    <div className='RelatedProduct container flex flex-col items-center'>
      <h1 className='border-b-2 border-gray-600 text-3xl font-semibold'>Related Products</h1>
      <div className='RelatedProduct-item flex my-10 gap-4'>
           {data_product.map((item: ItemProps, index: number)=>{
              return <Items key={index} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image}/>
     })}
      </div>
    </div>

  )
}

export default RelatedProducts
