export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Smart Tools for a Simpler Life
        </h2>

        <p className="text-xl text-center text-gray-600 max-w-xl mx-auto mb-12">
          Grocify combines two essential tools in one easy platform, designed
          for everyone.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Feature 1 */}
          <div className="p-8 bg-white rounded-3xl shadow-xl border-t-8 border-grocify-alert hover:shadow-2xl transition duration-300">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-grocify-alert/20 mb-6">
              <svg
                className="w-8 h-8 text-grocify-alert"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Expiry Date Tracker
            </h3>
            <p className="text-gray-600 mb-6">
              Never throw away another forgotten item. Easily log your groceries
              and receive smart, timely notifications before they expire.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                {" "}
                <span className="text-grocify-green mr-2">✅</span> Custom alert
                settings{" "}
              </li>
              <li className="flex items-center">
                {" "}
                <span className="text-grocify-green mr-2">✅</span> Scan item
                barcodes (Future feature){" "}
              </li>
              <li className="flex items-center">
                {" "}
                <span className="text-grocify-green mr-2">✅</span> Categorize
                by fridge, pantry, or freezer{" "}
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-white rounded-3xl shadow-xl border-t-8 border-grocify-green hover:shadow-2xl transition duration-300">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-grocify-green/20 mb-6">
              <svg
                className="w-8 h-8 text-grocify-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m4 2h2a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm10-3a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Grocery Expense Manager
            </h3>
            <p className="text-gray-600 mb-6">
              Take control of your budget. Track every purchase, visualize your
              spending trends, and identify areas to save more.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                {" "}
                <span className="text-grocify-green mr-2">✅</span> Simple
                receipt logging{" "}
              </li>
              <li className="flex items-center">
                {" "}
                <span className="text-grocify-green mr-2">✅</span> Interactive
                spending charts{" "}
              </li>
              <li className="flex items-center">
                {" "}
                <span className="text-grocify-green mr-2">✅</span> Set monthly
                grocery budgets{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
