import Fcenter from "@/components/f_center";
import Footer from "@/components/footer";
import Header2 from "@/components/Header2";
import Navebar from "@/components/navebar";
import Hero from "@/components/shop_hero";
import Image from "next/image";
import Link from "next/link";

interface IProduct {
  title: string;
  price: string|number;
  id: number;
  img_url: string;
  
}

let products: IProduct[] = [
  {
    title: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    id: 1,
    img_url: "/images/P3.png",
    
  },
  {
    title: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    id: 2,
    img_url: "/images/P4.png",
  },
  {
    title: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    id: 3,
    img_url: "/images/P5.png",
  },
  {
    title: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    id: 4,
    img_url: "/images/P6.png",
  },
  {
    title: "Grain coffee table",
    price: "Rs. 15,000.00",
    id: 5,
    img_url: "/images/s.5.png",
  },
  {
    title: "Kent coffee table",
    price: " Rs. 225,000.00",
    id: 6,
    img_url: "/images/s6.png",
  },
  {
    title: "Round coffee table_color 2",
    price: "Rs. 251,000.00",
    id: 7,
    img_url: "/images/s7.png",
  },
  {
    title: "Reclaimed teak coffee table",
    price: "Rs. 25,200.00",
    id: 8,
    img_url: "/images/s8.png",
  },
  {
    title: "Plain console_",
    price: "Rs. 258,200.00",
    id: 9,
    img_url: "/images/s9.png",
  },
  {
    title: "Reclaimed teak Sideboard",
    price: "Rs. 20,000.00",
    id: 10,
    img_url: "/images/s10.png",
  },
  {
    title: "SJP_0825 ",
    price: "Rs. 200,000.00",
    id: 11,
    img_url: "/images/s11.png",
  },
  {
    title: "Bella chair and table",
    price: "Rs. Rs. 100,000.00",
    id: 12,
    img_url: "/images/s12.png",
  },
  {
    title: "Granite square side table",
    price: "Rs. 258,800.00",
    id: 13,
    img_url: "/images/s13.png",
  },
  {
    title: "Asgaard sofa",
    price: "Rs. 250,000.00",
    id: 14,
    img_url: "/images/s14.png",
  },
  {
    title: "Maya sofa three seater",
    price: "Rs. 115,000.00",
    id: 15,
    img_url: "/images/s15.png",
  },
  {
    title: "Outdoor sofa set",
    price: "Rs. 244,000.00",
    id: 16,
    img_url: "/images/s16.png",
  },
  
];

export default function Shop() {
  return (
     <>
        <Header2/>
        <Hero/>
        <Navebar/>
        
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
     
      
         <div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {products.map((data) => {
          return (
            <div key={data.id} className="flex flex-col items-center">
             <Link href={`products/${data.id}`}>
             <div className="w-[230px] h-[230px] bg-[#FFFFFF] overflow-hidden">
                <Image
                  src={data.img_url}
                  alt={data.title}
                  className="w-full h-full"
                  width={100}
                  height={100}
                />
              </div>
             </Link>
               
              <p className="text-xs mt-3 w-36">{data.title}</p>
              <p className="-ml-12 text-sm font-semibold">{data.price}</p>
           
            </div>
            
          );
        })}
      </div>
      

         </div>
         <div className="flex justify-center items-center mt-20 gap-5 mb-8">
           <div className="flex justify-center items-center text-xs w-8 h-8 rounded hover:bg-yellow-500 coursor cursor-pointer bg-[#FBEBB5]">
            <h1>1</h1>
           </div>
           <div className="flex justify-center items-center text-xs w-8 h-8 rounded hover:bg-yellow-500 coursor cursor-pointer bg-[#FFF9E5]">
            <h1>2</h1>
           </div>
           <div className="flex justify-center items-center text-xs w-8 h-8 rounded hover:bg-yellow-500 coursor cursor-pointer bg-[#FFF9E5]">
            <h1>2</h1>
           </div>
           <div className="flex justify-center items-center text-xs w-12 h-8 rounded hover:bg-yellow-500 coursor cursor-pointer bg-[#FFF9E5]">
            <h1>Next</h1>
           </div>
           
            

      </div>

    </div>
    <Fcenter/>
    <Footer/>
    </>
  );
}
