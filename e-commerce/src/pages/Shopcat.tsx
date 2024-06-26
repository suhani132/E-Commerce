import React from "react";
import { ShopContext } from "@/context/Shopcontext";
import { useContext } from "react";
import dropdown_icon from "@/assets/dropdown_icon.png";
import Items from "@/components/items/Items";

export interface IShopcatProps {
  banner: string;
  category: string;
}

export interface IProduct {
  id: number;
  name: string;
  new_price: number;
  old_price: number;
  image: string;
  category: string;
}

const Shopcat: React.FC<IShopcatProps> = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="container flex flex-col justify-center items-center mx-auto  ">
      <img src={props.banner} alt="" />
      <div className="flex justify-between text-lg ">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="flex flex-row">
          <p className="w-fit cursor-pointer p-2 border-b-2 rounded-2xl border-gray-400 bg-slate-200">Sort by<img src={dropdown_icon} alt="" />
          </p>
          
        </div>
      </div>
      <div className="shopcat-products gap-4 grid  grid-cols-2 md:grid-cols-4">
        {all_product.map((item: IProduct, index: number) => {
          if (props.category === item.category) {
            return (
              <Items
                key={index}
                id={item.id}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                image={item.image}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex">
        <p className="border-b-2 rounded-2xl border-gray-400 w-fit bg-slate-200 p-2 cursor-pointer">
          {" "}
          Explore More{" "}
        </p>
      </div>
    </div>
  );
};

export default Shopcat;
