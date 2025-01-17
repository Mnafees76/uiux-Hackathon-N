import { StaticImageData } from "next/image";
export type product ={

        title: string;
        price: string;
        id: number;
        img_url: string;
        rating?: string;
        img1: string,
        img2: string,
        img3: string,
        img4: string,
        img5: string,
        color:string[],
        size:string[],
        qty:number;
        discount?: number
      }


export type cart={
    discount?: number;
    id:number,
    title:string,
    image:string ,
    price:number,
    qty:number
    img_url: string,
    uuid:number | string| undefined,
    color:string[],
    size:string,
    
    
    
}
