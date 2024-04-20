import arrow_icon from "@/assets/breadcrum_arrow.png";

interface Props {
  Product: {
    category: string;
    name: string;
  };
}

const Breadcrum: React.FC<Props> = ({ Product }) => {
  return (
    <div className="container flex my-10 font-medium text-gray-700 items-center gap-1 " >
       HOME  <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {Product.category} <img src={arrow_icon} alt="" /> {Product.name}
    </div>
  );
};

export default Breadcrum;