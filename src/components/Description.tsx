import Image from "next/image"
export default function Description(){
    return(
        <main className="w-full mt-3  max-w-screen-2xl mx-auto">
            <hr />
              <div className="flex justify-center items-center gap-7 mt-5">
                  <span>Description</span>
                  <span className="text-[#9F9F9F]">Additional Information</span>
                  <span  className="text-[#9F9F9F]">Reviews [5]</span>
              </div>

              <div className="text-xs sm:px-40 mt-7 text-[#9F9F9F] px-2">
                  <p >Embodying the raw, wayward spirit of rock ‘n’ roll,
                     the Kilburn portable active stereo speaker takes the 
                     unmistakable look and sound of Marshall, unplugs the chords, 
                     and takes the show on the road.</p>
                      
                  <p className="mt-4 sm:mt-7">Weighing in under 7 pounds, the Kilburn is a lightweight 
                    piece of vintage styled engineering. Setting the bar as one of 
                    the loudest speakers in its class, the Kilburn is a compact, stout-hearted 
                    hero with a well-balanced audio which boasts a clear midrange and extended highs
                    for a sound that is both articulate and pronounced. The analogue knobs allow you
                     to fine tune the controls to your personal preferences while the guitar-influenced
                     leather strap enables easy and stylish travel.</p>
              </div>
              
              {/* image parant div */}
                <div className="flex justify-center w-full h-60">
                <div className="flex justify-center items-center w-full h-[200] gap-5 mt-7 px-2 sm:px-0">   
              <div className="w-[450px] bg-[#FFF9E5]">
                   <Image src={"/images/ds.png"} width={500} height={500} alt="pic"></Image>
              </div>
              <div  className="w-[450px] bg-[#FFF9E5]">
              <Image src={"/images/ds.png"} width={500} height={500} alt="pic"></Image>
              </div>
              </div>

                </div>
        </main>
    )
}