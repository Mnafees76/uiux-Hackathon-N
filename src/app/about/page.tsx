import Header2 from "@/components/Header2";

import Herob from "./hero";
import About_us from "./aboutus";
import OurValues from "@/components/Our Values";
import Journey from "@/components/Journey";
import Fcenter from "@/components/f_center";
import Footer from "@/components/footer";

export default function About(){
    return(
         <main>
              <Header2/>
              <Herob/>
              <About_us/>
              <OurValues/>
              <Journey/>
              <Fcenter/>
              <Footer/>
             
         </main>
    )
}