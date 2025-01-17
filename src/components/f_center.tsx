export default function Fcenter() {
    return (
      <main className="bg-[#FAF4F4] max-w-screen-2xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-6 sm:gap-3 py-10">
          {/* Free Delivery */}
          <div className="w-full sm:w-[300px] md:w-[360px] h-[200px] pt-10 sm:pt-20 px-6 font-semibold text-center sm:text-left">
            <h1>Free Delivery</h1>
            <div className="w-full sm:w-56">
              <span className="text-xs text-[#9F9F9F]">
                For all orders over $50, consectetur adipim scing elit.
              </span>
            </div>
          </div>
  
          {/* 90 Days Return */}
          <div className="w-full sm:w-[300px] md:w-[360px] h-[200px] pt-10 sm:pt-20 px-6 font-semibold text-center sm:text-left">
            <h1>90 Days Return</h1>
            <div className="w-full sm:w-56">
              <span className="text-xs text-[#9F9F9F]">
                If goods have problems, consectetur adipim scing elit.
              </span>
            </div>
          </div>
  
          {/* Secure Payment */}
          <div className="w-full sm:w-[300px] md:w-[360px] h-[200px] pt-10 sm:pt-20 px-6 font-semibold text-center sm:text-left">
            <h1>Secure Payment</h1>
            <div className="w-full sm:w-52">
              <span className="text-xs text-[#9F9F9F]">
                100% secure payment, consectetur adipim scing elit.
              </span>
            </div>
          </div>
        </div>
      </main>
    );
  }
  