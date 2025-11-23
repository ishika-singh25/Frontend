export default function CTA() {
  return (
    <section className="py-16 bg-grocify-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to simplify your grocery life?
        </h2>

        <p className="text-xl text-emerald-100 mb-8">
          Join thousands of users who are saving money and reducing waste with
          Grocify.
        </p>

        <a
          href="#"
          className="inline-block px-10 py-4 bg-grocify-alert text-gray-900 font-bold text-xl rounded-full shadow-2xl hover:bg-amber-600 transition duration-300 transform hover:scale-105"
        >
          Start Saving Today!
        </a>
      </div>
    </section>
  );
}
