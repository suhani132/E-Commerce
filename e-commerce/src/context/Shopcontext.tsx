import { createContext, PropsWithChildren } from "react";
import all_product from "@/assets/all_product";

interface IShopContext {
  all_product: typeof all_product;
}

export const ShopContext = createContext<IShopContext>({ all_product: [] });

const ShopContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;