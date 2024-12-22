function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <header className="relative text-center py-20 bg-gradient-to-b from-gray-100 to-blue-300 text-gray-800 overflow-hidden">
        {/* Subtle Background Overlay */}
        <div className="absolute inset-0 bg-pattern opacity-10"></div>

        <div className="relative container mx-auto px-6">
          <h1 className="text-5xl font-extrabold font-serif">
            Discover the Best Deals at Reca's Shop
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-sans">
            Quality products, amazing prices, and outstanding service—only at Reca's Shop.
          </p>
          <a
            href="/products"
            className="mt-6 inline-block px-10 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Shop Now
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Why Shop With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "High Quality",
                description:
                  "Our products are carefully curated to meet the highest standards of quality.",
              },
              {
                title: "Affordable Prices",
                description: "Enjoy the best prices for premium quality items.",
              },
              {
                title: "Fast Delivery",
                description: "Get your orders delivered quickly and reliably to your doorstep.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-blue-50 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-blue-700">
                  {feature.title}
                </h3>
                <p className="text-blue-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
