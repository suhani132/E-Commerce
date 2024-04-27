import React, { useContext } from "react";
import star_icon from "@/assets/star_icon.png";
import stardull_icon from "@/assets/star_dull_icon.png";
import { ShopContext } from "@/context/Shopcontext";

interface Product {
  id: number;
  image: string;
  name: string;
  old_price: number;
  new_price: number;
}
interface props {
  Product: Product;
}
const ProductDisplay: React.FC<props> = ({ Product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="container flex items-center justify-center mx-auto gap-5 flex-col md:flex-row">
      <div className="ProductDisplay-left   md:flex md:flex-row md:justify-center md:items-center md:gap-2">
        <div className="grid grid-cols-4 md:flex md:flex-col md:h-fit md:items-end gap-2">
          <img src={Product.image} alt="" className="w-1/3"/>
          <img src={Product.image} alt="" className="w-1/3"/>
          <img src={Product.image} alt="" className="w-1/3"/>
          <img src={Product.image} alt="" className="w-1/3"/>
        </div>
      <div className="main-img h-full w-full">
        <img src={Product.image} alt="" />
      </div>
      </div>
      <div className="ProductDisplay-right flex flex-col h-full w-full md:w-1/2 ">
        <h1 className="text-2xl font-medium text-gray-800">{Product.name}</h1>
        <div className="star flex items-center gap-4 my-3">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={stardull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="prices flex gap-5">
          <div className="old_price text-gray-500 line-through">
            {" "}
            ${Product.old_price}
          </div>
          <div className="new_price text-red-400">${Product.new_price} </div>
        </div>
        <div className="">
          A lightweight, usually knitted, pullover shirt, close-fitting with a
          round neckline and short sleeves, worn as a undershirt or an outer
          garment.
        </div>
        <div className="size my-8 text-gray-900">
          <h1 className="font-medium text-lg my-6">Select a Size</h1>
          <div className="right-size flex gap-9 ">
            <div className="border-2 py-1 px-2 cursor-pointer border-gray-300 bg-slate-50">
              S
            </div>
            <div className="border-2 py-1 px-2 cursor-pointer border-gray-300 bg-slate-50">
              M
            </div>
            <div className="border-2 py-1 px-2 cursor-pointer border-gray-300 bg-slate-50">
              L
            </div>
            <div className="border-2 py-1 px-2 cursor-pointer border-gray-300 bg-slate-50">
              XL
            </div>
            <div className="border-2 py-1 px-2 cursor-pointer border-gray-300 bg-slate-50">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(Product.id);
          }}
          className="min-w-fit py-2 px-1 bg-red-800 text-white"
        >
          ADD TO CART
        </button>
        <p className="category mt-8">
          <span className="font-semibold">Category:</span>Women, T-Shirt,
          Crop-Top
        </p>
        <p className="tags mt-2">
          <span className="font-semibold">Tags:</span>Mordern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
