import React from "react";
import star_icon from "@/assets/star_icon.png";
import stardull_icon from "@/assets/star_dull_icon.png";

interface Product{
    image:string,
    name:string,
    old_price:number,
    new_price:number,
}
interface props {
    Product: Product
}
const ProductDisplay: React.FC<props> =({Product}) => {
  return (
    <div className="container">
      <div className="ProductDisplay-left">
        <div className="ProductDisplay-img">
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
          <img src={Product.image} alt="" />
        </div>
        <div className="main-img">
          <img src={Product.image} alt="" />
        </div>
      </div>
      <div className="ProductDisplay-right">
        <h1>{Product.name}</h1>
        <div className="star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={stardull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="prices">
          <div className="old_price"> ${Product.old_price}</div>
          <div className="new_price">${Product.new_price} </div>
        </div>
        <div className="descp">
          A lightweight, usually knitted, pullover shirt, close-fitting with a
          round neckline and short sleeves, worn as a undershirt or an outer
          garment.
        </div>
        <div className="size">
            <h1>Select a Size</h1>
            <div className="right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>                
            </div>
        </div>
        <button>ADD TO CART</button>
        <p className="category"><span>Category:</span>Women, T-Shirt, Crop-Top</p>
        <p className="tags"><span>Tags:</span>Mordern, Latest</p>

      </div>
    </div>
  );
};

export default ProductDisplay;
