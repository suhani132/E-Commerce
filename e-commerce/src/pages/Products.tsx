import Breadcrum from "@/components/breadcrum/Breadcrum";
import DescriptionBox from "@/components/descrptionbox/DescriptionBox";
import ProductDisplay from "@/components/productdisplay/ProductDisplay";
import RelatedProducts from "@/components/relatedproducts/RelatedProducts";
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
    <div className=" flex flex-col min-h-screen flex-1">
      { Product && < Breadcrum Product = {Product}/>}
      { Product && <ProductDisplay Product = {Product}/>}
      { Product && <DescriptionBox />}
      { Product && <RelatedProducts />}

    </div>
  )
}

export default Products
