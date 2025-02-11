export default function OurValues() {
  return (
    <main>
      <div className="w-full mt-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center">Our Values</h1>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 mt-5">
          <div className="bg-yellow-50 w-full md:w-72 lg:w-80 h-auto p-6 rounded-lg shadow-md">
            <h1 className="text-center font-bold text-lg">Integrity</h1>
            <p className="text-center text-sm mt-2">
              We uphold the highest standards of honesty and transparency in everything we do.
            </p>
          </div>
          <div className="bg-yellow-50 w-full md:w-72 lg:w-80 h-auto p-6 rounded-lg shadow-md">
            <h1 className="text-center font-bold text-lg">Innovation</h1>
            <p className="text-center text-sm mt-2">
              We embrace creativity and seek to continuously improve through innovative solutions.
            </p>
          </div>
          <div className="bg-yellow-50 w-full md:w-72 lg:w-80 h-auto p-6 rounded-lg shadow-md">
            <h1 className="text-center font-bold text-lg">Excellence</h1>
            <p className="text-center text-sm mt-2">
              We strive to exceed expectations and deliver outstanding results.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}