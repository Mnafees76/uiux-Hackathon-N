import Image from "next/image";
import Link from "next/link";

interface IProduct {
  title: string;
  price: string;
  id: number;
  img_url: string;
}

let products: IProduct[] = [
  {
    title: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    id: 1,
    img_url: "/images/P3.png", // Changed to lowercase
  },
  {
    title: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    id: 2,
    img_url: "/images/p4.png",
  },
  {
    title: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    id: 3,
    img_url: "/images/p5.png",
  },
  {
    title: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    id: 4,
    img_url: "/images/p6.png",
  },
];

export default function Products() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-center font-bold text-2xl pt-5">Top Picks For You</h1>
      <p className="text-center text-xs mt-3 text-[#9F9F9F]">
        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
      </p>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {products.map((data) => (
            <div key={data.id} className="flex flex-col items-center">
              <Link href={`/products/${data.id}`}>
                <div className="w-[230px] h-[230px] bg-[#FFFFFF] overflow-hidden">
                  <Image
                    src={data.img_url}
                    alt={data.title}
                    className="w-full h-full object-cover"
                    width={230}
                    height={230}
                    unoptimized={true} // Fix for Next.js Image optimization issue
                  />
                </div>
              </Link>
              <p className="text-xs mt-3 w-36">{data.title}</p>
              <p className="text-sm font-semibold">{data.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <button className="underline underline-offset-4 font-semibold">View More</button>
        </div>
      </div>
    </div>
  );
}
