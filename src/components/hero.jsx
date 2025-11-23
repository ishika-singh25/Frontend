export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-grocify-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
          Stop Wasting Food.{" "}
          <span className="text-grocify-green">Start Saving Money.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Grocify is your easy-to-use, all-in-one platform for tracking food
          expiry dates and managing your household expenses. Organized living
          starts here.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="px-8 py-3 bg-grocify-green text-white font-semibold text-lg rounded-xl shadow-xl hover:bg-emerald-700 transition duration-300 transform hover:-translate-y-1"
          >
            Sign Up Now
          </a>

          <a
            href="#features"
            className="px-8 py-3 bg-white text-grocify-green border-2 border-grocify-green font-semibold text-lg rounded-xl shadow-md hover:bg-gray-100 transition duration-300"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-12">
          <div className="inline-block p-6 bg-white rounded-2xl shadow-2xl border-b-4 border-grocify-alert transform rotate-1">
            <div className="flex items-center justify-center space-x-6 text-sm sm:text-base">
              <div className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg shadow-inner">
                <span className="text-xl">🚨</span>
                <p className="font-medium text-red-600">
                  Milk expiring in 2 days!
                </p>
              </div>

              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg shadow-inner">
                <span className="text-xl">💰</span>
                <p className="font-medium text-blue-600">
                  Budget used: $450 / $600
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
