import { createContext, PropsWithChildren, useState } from "react";
import all_product from "@/assets/all_product";

interface IShopContext {
  all_product: typeof all_product;
  cartItems: { [index: number]: number };
  setCartItems: React.Dispatch<React.SetStateAction<{ [index: number]: number }>>;
  addToCart: (itemid: number) => void;
  removeFromCart: (itemid: number) => void;
}

export const ShopContext = createContext<IShopContext>({
  all_product: [],
  cartItems: {},
  setCartItems: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});

const ShopContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cartItems, setCartItems] = useState(() => {
    const cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
      cart[index] = 0;
    }
    return cart;
  });

  
   
  const addToCart = (itemid: number) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemid: number) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };
  const contextValue = { all_product, cartItems, setCartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;