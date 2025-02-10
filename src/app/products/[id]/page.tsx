"use client";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import Header2 from "@/components/Header2";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import Description from "@/components/Description";
import RelatedProducts from "@/components/Related Products";
import Footer from "@/components/footer";
import { BreadcrumbDemo } from "@/components/breadcrumb";
import { useRouter } from "next/router";
import { title } from "process";
import { SetStateAction, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { Button } from "@/components/ui/button";
import { addtoCart } from "@/app/store/features/cart";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Item } from "@radix-ui/react-dropdown-menu";
import Addtocarttosity from "@/components/addtocarttosity";

interface IProduct {
  title: string;
  price: number|string;
  id: number;
  img_url: string;
  rating?: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  color:string[];
  qty:number;
  size:string[];
  discount?:number
}

let products: IProduct[] = [
  {
    title: "Trenton modular sofa_3",
    price:  25000.00,
    id: 1,
    img_url: "/imags/P3.png",
    img1: "/imags/p3.png",
    img2: "/imags/p3.png",
    img3: "/imags/p3.png",
    img4: "/imags/p3.png",
    img5: "/imags/p3.png",
    color: ["#816DAF","#000000","#CDBA7B"],
    size: ["L","Xl","XS"],
    qty: 1,
    
    
  },
  {
    title: "Granite dining table with dining chair",
    price:  25000.00,
    id: 2,
    img_url: "/imags/P4.png",
    img1: "/imags/P4.png",
    img2: "/imags/P4.png",
    img3: "/imags/P4.png",
    img4: "/imags/P4.png",
    img5: "/imags/P4.png",
    color: ["#816DAF","#000000","#CDBA7B"],
    size: ["L","Xl","XS"],
    qty: 1,
  },
  {
    title: "Outdoor bar table and stool",
    price: 25000.00,
    id: 3,
    img_url: "/images/P5.png",
    img1: "/images/P5.png",
    img2: "/images/P5.png",
    img3: "/images/P5.png",
    img4: "/images/P5.png",
    img5: "/images/P5.png",
    color: ["#816DAF","#000000","#CDBA7B"],
      size: ["L","Xl","XS"],
      qty: 1,
  },
  {
    title: "Plain console with teak mirror",
    price:  2500000,
    id: 4,
    img_url: "/imags/P6.png",
    img1: "/images/P6.png",
    img2: "/images/P6.png",
    img3: "/images/P6.png",
    img4: "/images/P6.png",
    img5: "/images/P6.png",
    color: ["#816DAF","#000000","#CDBA7B"],
      size: ["L","Xl","XS"],
      qty: 1,
  },
  {
    title: "Grain coffee table",
    price: 15000.00,
    id: 5,
    img_url: "/images/s.5.png",
    img1: "/images/s.5.png",
    img2: "/images/s.5.png",
    img3: "/images/s.5.png",
    img4: "/images/s.5.png",
    img5: "/images/s.5.png",
    color: ["#816DAF","#000000","#CDBA7B"],
    size: ["L","Xl","XS"],
    qty: 1,
  },
  {
    title: "Kent coffee table",
    price: 225000.00,
    id: 6,
    img_url: "/images/s6.png",
    img1: "/images/s6.png",
    img2: "/images/s6.png",
    img3: "/images/s6.png",
    img4: "/images/s6.png",
    img5: "/images/s6.png",
    color: ["#816DAF","#000000","#CDBA7B"],
    size: ["L","Xl","XS"],
    qty: 1,
  },

  {
    title: "Round coffee table_color 2",
    price:  251000.00,
    id: 7,
    img_url: "/images/s7.png",
    img1: "/images/s7.png",
    img2: "/images/s7.png",
    img3: "/images/s7.png",
    img4: "/images/s7.png",
    img5: "/images/s7.png",
    color: ["#816DAF","#000000","#CDBA7B"],
      size: ["L","Xl","XS"],
      qty: 1,
  },
  {
    title: "Reclaimed teak coffee table",
    price: 25200.00,
    id: 8,
    img_url: "/images/s8.png",
    img1: "/images/s8.png",
    img2: "/images/s8.png",
    img3: "/images/s8.png",
    img4: "/images/s8.png",
    img5: "/images/s8.png",
    color: ["#816DAF","#000000","#CDBA7B"],
    size: ["L","Xl","XS"],
    qty: 1,
  },
  {
    title: "Plain console_",
    price: 258200.00,
    id: 9,
    img_url: "/imags/s9.png",
    img1: "/images/s9.png",
    img2: "/images/s9.png",
    img3: "/images/s9.png",
    img4: "/images/s9.png",
    img5: "/images/s9.png",
    color: ["#816DAF","#000000","#CDBA7B"],
      size: ["L","Xl","XS"],
      qty: 1,
  },
  {
    title: "Reclaimed teak Sideboard",
    img1: "/images/s10.png",
    img2: "/images/s10.png",
    img3: "/images/s10.png",
    img4: "/images/s10.png",
    img5: "/images/s10.png",
    price: 20000.00,
    id: 10,
    img_url: "/imags/s10.png",
    color: ["#816DAF","#000000","#CDBA7B"],
      size: ["L","Xl","XS"],
      qty: 1,
  },
  {
    title: "SJP_0825 ",
    price: 200000.00,
    id: 11,
    img_url: "/imags/s11.png",
    img1: "/images/s11.png",
    img2: "/images/s11.png",
    img3: "/images/s11.png",
    img4: "/images/s11.png",
    img5: "/images/s11.png",
    color: ["#816DAF","#000000","#CDBA7B"],
      size: ["L","Xl","XS"],
      qty: 1,
  },
  {
    title: "Bella chair and table",
    price:  100000.00,
    id: 12,
    img_url: "/images/s12.png",
    img1: "/images/s12.png",
    img2: "/images/s12.png",
    img3: "/images/s12.png",
    img4: "/images/s12.png",
    img5: "/images/s12.png",
    color: ["#816DAF","#000000","#CDBA7B"],
      size: ["L","Xl","XS"],
      qty: 1,
  },
  {
    title: "Granite square side table",
    price: 258800.00,
    id: 13,
    img_url: "/images/s13.png",
    img1: "/imags/s13.png",
    img2: "/images/s13.png",
    img3: "/images/s13.png",
    img4: "/images/s13.png",
    img5: "/images/s13.png",
    color: ["#816DAF","#000000","#CDBA7B"],
      size: ["L","Xl","XS"],
      qty: 1,
  },
  {
    title: "Asgaard sofa",
    price:  250000.00,
    id: 14,
    img_url: "/images/s14.png",
    img1: "/images/s14.png",
    img2: "/images/s14.png",
    img3: "/images/s14.png",
    img4: "/images/s14.png",
    img5: "/images/s14.png",
    color: ["#816DAF","#000000","#CDBA7B"],
      size: ["L","Xl","XS"],
      qty: 1,
  },
  {
    title: "Maya sofa three seater",
    price:  11500000,
    id: 15,
    img_url: "/images/s15.png",
    img1: "/images/s15.png",
    img2: "/images/s15.png",
    img3: "/images/s15.png",
    img4: "/images/s15.png",
    img5: "/images/s15.png",
    color: ["#816DAF","#000000","#CDBA7B"],
      size: ["L","Xl","XS"],
      qty: 1,
  },
  {
    title: "Outdoor sofa set",
    price:  244000.00,
    id: 16,
    img_url: "/images/s16.png",
    img1: "/images/s16.png",
    img2: "/images/s16.png",
    img3: "/images/s16.png",
    img4: "/images/s16.png",
    img5: "/images/s16.png",
    color: ["#816DAF","#000000","#CDBA7B"],
      size: ["L","Xl","XS"],
      qty: 1,
  },
];
let star = [
  <IoIosStar key={1} />,
  <IoIosStar key={2} />,
  <IoIosStar key={3}/>,
  <IoIosStar key={4}/>,
  <FaStarHalf key={5}/>,
];

export default function Product_Details() {
  
  

  const params = useParams();
  const id = params.id;
  const item = products.find((item) => item.id === Number(id));
  const dispatch = useAppDispatch();
  const [cartItem, setcartItem] = useState({
    // const[cartItem,setcartItem]= useState({
    

    id: item?.id,
    title: item?.title,
    image: item?.img1,
    price: item?.price,
    color: item?.color[0],
    size:   item?.size[0],
    qty:    item?.qty,
  });


  /// yah pe item ko hata ke product likho
  if (!item) {
    return <h1>product not found</h1>;
  }

  return (
    <div className=" max-w-screen-2xl mx-auto">
      <Header2 />
      <BreadcrumbDemo />
      <div className="w-full flex flex-col sm:flex-row justify-evenly pl-2 sm:pl-0 mt-5 ">
        {/* left images */}
        <div className="w-full flex sm:flex-col sm:w-[152px] space-x-2 sm:space-y-4 ml-0 sm:ml-4">
          <div className="flex justify-center items-center w-[90px] sm:w-[70px] sm:h-[70px] h-[90px] bg-[#FFF9E5] rounded ml-0 sm:ml-2">
            <Image
              src={item.img1}
              className="flex justify-center items-center w-[80px]  sm:w-[70px] h-[90px] sm:h-[70px]"
              alt="product"
              width={70}
              height={70}
            ></Image>
          </div>
          <div className="flex justify-center items-center w-[90px] sm:w-[70px] h-[90px] sm:h-[75px] bg-[#FFF9E5] rounded">
            <Image
              src={item.img2}
              className="flex justify-center items-center w-[80px]  sm:w-[70px] h-[80px] sm:h-[70px] ml-2 sm:ml-0"
              alt="product"
              width={70}
              height={70}
            ></Image>
          </div>
          <div className="flex justify-center items-center w-[90px] sm:w-[70px] h-[90px] sm:h-[75px] bg-[#FFF9E5] rounded">
            <Image
              src={item.img3}
              className="flex justify-center items-center w-[80px]  sm:w-[70px] h-[80px] sm:h-[70px] ml-2 sm:ml-0"
              alt="product"
              width={70}
              height={70}
            ></Image>
          </div>
          <div className="flex justify-center items-center w-[90px] sm:w-[70px] h-[90px] sm:h-[75px] bg-[#FFF9E5] rounded">
            <Image
              src={item.img4}
              className="flex justify-center items-center w-[80px]  sm:w-full h-[80px] sm:h-full ml-1 sm:ml-0"
              alt="product"
              width={70}
              height={70}
            ></Image>
          </div>
        </div>

        {/* //big image */}
        <div className="flex justify-center items-center w-full sm:w-[444px] h-[400px] bg-[#FFF9E5] mt-3 sm:mt-3">
          <Image
            src={item.img1}
            alt="product"
            className="flex justify-center items-center w-[500px] sm:w-[400px] h-[300px] sm:h-[400px]"
            width={400}
            height={400}
          ></Image>
        </div>
        {/* right text */}
        <div className="w-full sm:w-[600px] h-[500px] ml-2 sm:ml-14 mt-3">
          <h1 className="font-bold text-2xl">{item.title}</h1>
          <span className="text-[#9F9F9F]">{item.price}</span>
          <div className="flex text-yellow-500 mt-2">
  <span className="flex mt-1">
    {star.map((icon, index) => (
      <span key={index}>{icon}</span>
    ))}
  </span>
  <div className="w-0.5 h-5 ml-2 bg-[#9F9F9F] mb-2"></div>
  <span className="ml-5 text-[#9F9F9F]">5 Customer Review</span>
</div>

          <p className="text-xs text-[#000000] w-[355px] mt-2">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <h2 className="text-[#9F9F9F] mt-3 text-xs">Size</h2>
          <div className="flex space-x-3 mt-3 text-xs"key={item.id}>
          {item.size.map((item, id) => (
  <button 
    key={id} 
    onClick={() => setcartItem({ ...cartItem, size: item })} 
    className="border-2 border-gray-200 rounded w-[25px] h-[25px] focus:outline-none bg-[#FBEBB5] text-[#000000] active:bg-black active:text-white focus:bg-black focus:text-white"
  >
    {item}
  </button>
))}

            
            
          </div>
          <h2 className="text-[#9F9F9F] mt-3 text-xs">color</h2>
          <div className="flex space-x-3 mt-3">
            {item.color.map((item,id)=>(
                <Button key={id} onClick={()=>setcartItem({...cartItem,color:item})} className="w-[30px] h-[35px] bg-[#816DAF] rounded-full border-2 active:border-black focus:border-black" style={{backgroundColor:item}}></Button>
              
            ))}
          
          </div>
          <div className="flex justify-start items-center text-xs">
            <div className="flex justify-center items-center w-24 h-6 outline outline-offset-1 outline-1 rounded-md  mt-4 text-[#9F9F9F]">
              <div className=" flex justify-center items-center space-x-2">
                 <Button onClick={()=>(setcartItem({...cartItem,qty:item.qty<=1?1:--item.qty}))} className="bg-white w-6 h-6 text-[#000000] hover:text-white" >
                 <FaMinus />
                  </Button> 
                <h2>{item.qty}</h2>
                <Button onClick={()=> setcartItem({...cartItem,qty:++item.qty})} className="bg-white w-6 h-6 text-[#000000] hover:text-white" >
                  <FaPlus/>
                </Button>
              </div>
            </div>
             <div className=" ml-7">
              {/* <button
                onClick={() => dispatch(addtoCart(cartItem))}
                className=" mt-4 text-center px-3  py-2 text-xs text-[#000000] outline outline-offset-1 outline-1 rounded-sm ml-3 active:hover:bg-black active:text-white"
              >
               
              
              </button> */}
                {/* <button onClick={() => dispatch(addtoCart(cartItem))}>
                 
              </button> */}
              <Addtocarttosity  cartItem={cartItem}/>
            </div> 
          </div>

          <hr className="w-full sm:w-96 -h-0.5 bg-[#D9D9D9] mt-10 " />
          <div className="flex w-full h-[160px]   text-xs text-[#9F9F9F] space-x-2 mt-5">
            {/* left side text */}

            <div className="  space-y-2">
              <div>
                <span>SKU</span>
              </div>
              <div>
                <span>Category</span>
              </div>

              <div>
                <span>Tags</span>
              </div>

              <div>
                <span>Share</span>
              </div>
            </div>
            {/* left side text */}
            <div className=" space-y-2">
              <div>
                <span className="">: SS001</span>
              </div>

              <div>
                <span> : Sofas</span>
              </div>

              <div>
                <span>: Sofa, Chair, Home, Shop</span>
              </div>

              <div className="">
                <div className=" text-[#000000] flex space-x-2 ">
                  {" "}
                  <FaFacebook /> <IoLogoLinkedin /> <AiFillTwitterCircle />
                  <div className=" h-5 mb-2">
                    <CiHeart className="ml-36 text-2xl mb-3 text-[#FF0000]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Description/>
      <RelatedProducts />
      <Footer />
    </div>
  );
}
