
import Checkout_hero from "@/components/Checkout_hero";
import Checkout_form from "@/components/Checkout_info";
import Footer from "@/components/footer";
import Header2 from "@/components/Header2";
import Cfter from "../contact/cf";

export default function Checkout(){
  return(
    <div>
       <Header2/>
      <Checkout_hero/>
      <Checkout_form/>
      <Cfter/>
      <Footer/>
     
       
        
    </div>
  )
}