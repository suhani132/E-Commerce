import all_product from "@/assets/all_product";
import { ShopContext } from "@/context/Shopcontext";
import { useContext } from "react";
import remove_icon from "@/assets/cart_cross_icon.png";
interface E {
    id:number;
    name:string;
    image:string;
    new_price:number;
}

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems container">
      <div className="cartitems-format-main grid  grid-cols-6 border-2 items-center font-semibold gap-2 text-gray-700  ">
        <p >Products</p>
        <p >Title</p>
        <p >Price</p>
        <p>Quantity</p>
        <p >Total</p>
        <p>Remove</p>
      </div>
      {all_product.map((e: E) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cart-items-format grid  grid-cols-6 border-2 items-center font-normal text-base gap-2 text-gray-700">
                <img className="h-24" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="Quantity border-2 border-gray-200 px-2  w-fit">{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className="cursor-pointer ml-4"
                  src={remove_icon}
                   onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down my-10 flex justify-between">
        <div className="cartitems-total w-1/2">
            <h1 className="font-semibold text-2xl my-5">Cart Totals</h1>
            <div>
                <div className="cartitems-total-items justify-between flex border-b-2 border-gray-400  py-2">
                    <p>Subtotal</p>
                    <p>${0}</p>
                </div>
                <div className="cartitems-total-items justify-between flex border-b-2 border-gray-400  py-2 ">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <div className="cartitems-total-items justify-between flex border-b-2 border-gray-400 font-semibold font py-2 ">
                    <h3>Total</h3>
                    <h3>${0}</h3>
                </div>
            </div>
            <button className="cartitems-checkout border-2 bg-red-600 text-white w-fit py-2 px-2 mt-5">Proceed to Checkout</button>
        </div>
        <div className="cartitems-promocode my-10">
            <p className="text-gray-500 ">If you have a promo code, Enter it here</p>
            <div className="promo-box ">
                <input className="border-2 bg-slate-200  px-2 py-2" type="text" placeholder="Enter Promo Code" />
                <button className="border-2 bg-gray-900 text-white  px-2 py-2">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
