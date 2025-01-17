import Header2 from "@/components/Header2";
import Herocon from "../contact/hero";
import Myhero from "./myhero";
import Register from "@/components/Register";
import Fcenter from "@/components/f_center";
import Footer from "@/components/footer";

export default function My_account(){
    return(
        <main>
             <Header2/>
             <Myhero/>
             <Register/>
             <Fcenter/>
             <Footer/>
            
        </main>
    )
}