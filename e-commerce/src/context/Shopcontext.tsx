import { createContext, PropsWithChildren, useEffect, useState } from "react";
// import all_product from "@/assets/all_product";

interface IShopContext {
  all_product: typeof all_product;
  cartItems: { [index: number]: number };
  setCartItems: React.Dispatch<React.SetStateAction<{ [index: number]: number }>>;
  addToCart: (itemid: number) => void;
  removeFromCart: (itemid: number) => void;
  getTotalCartAmount:()=>number;
  getTotalItems: () => number;
}

export const ShopContext = createContext<IShopContext>({
  all_product: [],
  cartItems: {},
  setCartItems: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalCartAmount:()=>0,
  getTotalItems: () => 0,
});

const ShopContextProvider = ({ children }: PropsWithChildren<{}>) => {

  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
      cart[index] = 0;
    }
    return cart;
  });

  useEffect(()=>{
    fetch('http://localhost:4000/allproducts').then((response=>response.json()))
    .then((data)=>setAll_product(data))
  },[])
   
  const addToCart = (itemid: number) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemid: number) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };
  const getTotalCartAmount =(): number=>{
    let TotalAmount=0;
    for(const item in cartItems)
      {
        if(cartItems[item]>0)
          {
          let itemInfo = all_product.find((product)=>product.id===Number(item));
            TotalAmount+=itemInfo.new_price*cartItems[item];
          }
         
        }
        return TotalAmount;
      };
      const getTotalItem =(): number=>{
        let TotalItem = 0;
        for(const item in cartItems){
          if(cartItems[item]>0)
            {
              TotalItem += cartItems[item];
            }
        }
        return TotalItem;
      }
  const contextValue: IShopContext = {  getTotalItem, getTotalCartAmount, all_product, cartItems, setCartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;