export default function OurValues() {
    return (
      <main>
        <div className="w-full mt-10  max-w-screen-2xl mx-auto ">
          <h1 className="text-4xl font-bold text-center">Our Values</h1>
          <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-14 mx-3 mt-5 ">
            <div className="bg-yellow-50 w-full md:w-60 h-32 px-4 py-3  mr-3 sm:mr-0 ">
              <h1 className="text-center font-bold">Integrity</h1>
              <p className="text-center text-xs mt-2">
                We uphold the highest standards of honesty and transparency in everything we do.
              </p>
            </div>
            <div className="bg-yellow-50 w-full md:w-60 h-32 px-4 py-3   mr-3 sm:mr-0 ">
              <h1 className="text-center font-bold">Innovation</h1>
              <p className="text-center text-xs mt-2">
                We embrace creativity and seek to continuously improve through innovative solutions.
              </p>
            </div>
            <div className="bg-yellow-50 w-full md:w-60 h-32 px-4 py-3   mr-3 sm:mr-0 ">
              <h1 className="text-center font-bold">Excellence</h1>
              <p className="text-center text-xs mt-2">
                We strive to exceed expectations and deliver outstanding results.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
  