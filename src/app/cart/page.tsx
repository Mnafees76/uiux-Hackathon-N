import Cart_T from "@/components/c_hero";
import Cart from "@/app/cart_p/cart_table";
import Fcenter from "@/components/f_center";
import Footer from "@/components/footer";
import Header2 from "@/components/Header2";

export default function cart(){
    return(
        <div>
             <Header2/>
             <Cart_T/>
             <Cart/>
             <Fcenter/>
             <Footer/>
        </div>
    )
}