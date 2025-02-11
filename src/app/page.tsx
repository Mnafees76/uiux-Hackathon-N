import Header from "@/components/Header";
import Hearo from "@/components/Hearo";


import Products from "./products/page";
import Mprod from "@/components/Mprod";
import Asgaardsofa from "@/components/Asgaard sofa";
import Footer from "@/components/footer";
import OurBlogs from "@/components/Our Blogs";
import OurInstagram from "@/components/Our Instagram";



export default function Home() {
  return (
    <main >
           <Header/>
         <Hearo/>
        
         <Mprod/>
         <Products/>
         <Asgaardsofa/>
         <OurBlogs/>
         <OurInstagram/>
         <Footer/>    
        
       
         
      
    </main>
  );
}
