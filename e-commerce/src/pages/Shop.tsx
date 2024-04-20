import Hero from "@/components/Hero"
import Popular from "@/components/popular/Popular";
import Offers from "@/components/offers/Offers";
import Newcollections from "@/components/newcollections/Newcollections";
import Newsletter from "@/components/newsletter/Newsletter";

const Shop = () => {
  return (
    <div className="container mx-auto flex justify-center items-center md:flex-col">
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollections/>
      <Newsletter/>
    </div>
  )
}

export default Shop
