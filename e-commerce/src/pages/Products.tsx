import Breadcrum from "@/components/breadcrum/Breadcrum";
import ProductDisplay from "@/components/productdisplay/ProductDisplay";
import { ShopContext } from "@/context/Shopcontext"
import { useContext } from "react";
import { useParams } from "react-router-dom";

interface Product{
  id: Number;
}
interface Props {
  all_product: Product[];
}

const Products:React.FC = () => {
  const {all_product} = useContext(ShopContext);
  const {ProductId} =useParams();

  const Product = all_product.find((e) => e.id === Number(ProductId));
  return (
    <div>
      { Product && < Breadcrum Product = {Product}/>}
      { Product && <ProductDisplay Product = {Product}/>}
    </div>
  )
}

export default Products
