export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-3 text-grocify-green">Grocify</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-grocify-green">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 text-center md:text-right">
            <h4 className="font-bold mb-3 text-grocify-green">Stay Updated</h4>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for tips!
            </p>

            <form className="mt-4 flex flex-col sm:flex-row gap-2 justify-center md:justify-end">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-lg text-gray-900 w-full sm:w-64"
                required
              />

              <button
                type="submit"
                className="p-2 bg-grocify-alert rounded-lg font-medium text-gray-900 hover:bg-amber-600 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Grocify, Inc. All rights reserved. |
            <a href="#" className="underline">
              {" "}
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
