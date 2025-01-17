 
export default function Footer() {
  return (
    <main className="w-full bg-[#FFFFFF] px-4  max-w-screen-2xl mx-auto">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Address Section */}
        <div className="text-xs pt-10 text-[#9F9F9F]">
          <p>
            400 University Drive Suite 200 Coral Gables,
            <br />
            <span className="text-[#9F9F9F]">FL 33134 USA</span>
          </p>
        </div>

        {/* Links Section */}
        <div className="pt-10">
          <h1 className="text-[#9F9F9F] font-medium">Links</h1>
          <ul className="mt-4 space-y-2">
            <li className="text-xs">Home</li>
            <li className="text-xs">Shop</li>
            <li className="text-xs">About</li>
            <li className="text-xs">Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="pt-10">
          <h1 className="text-[#9F9F9F] font-medium">Help</h1>
          <ul className="mt-4 space-y-2">
            <li className="text-xs">Payment Options</li>
            <li className="text-xs">Returns</li>
            <li className="text-xs">Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="pt-10">
          <h1 className="text-[#9F9F9F] font-medium text-xs">Newsletter</h1>
          <div className="mt-4">
            <span className="text-xs underline underline-offset-1 text-[#9F9F9F]">
              Enter Your Email Address
              <span
                style={{ marginLeft: "8px" }}
                className="text-xs underline underline-offset-1 text-[#000000]"
              >
                SUBSCRIBE
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full border-t border-[#E5E5E5] mt-10">
        <p className="text-center py-5 text-xs text-[#9F9F9F]">
          2022 Meubel House. All rights reserved.
        </p>
      </div>
    </main>
  );
}
