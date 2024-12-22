function About() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800 px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-800">About Reca's Shop</h1>
          <p className="mt-4 text-lg text-gray-700">
            Your trusted destination for quality products and exceptional service.
          </p>
        </section>
  
        {/* Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Story</h2>
            <p className="leading-relaxed text-gray-700 text-lg">
              Reca's Shop began with a vision to offer a wide range of products 
              that cater to every need and occasion. From essential everyday items to 
              unique finds, we are committed to providing an enjoyable shopping experience.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              We take pride in offering high-quality, affordable, and thoughtfully 
              selected products. At Reca's Shop, we believe in building lasting relationships 
              with our customers by delivering value and reliability.
            </p>
          </div>
        
        </section>
  
        {/* Mission & Vision Section */}
        <section className="mt-12 grid md:grid-cols-2 gap-12 items-center">
  
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission & Vision</h2>
            <p className="leading-relaxed text-gray-700 text-lg mb-4">
              Our mission is to deliver top-quality products that enhance your 
              lifestyle. We aim to be your go-to destination for reliable and 
              stylish solutions, always prioritizing your satisfaction.
            </p>
            <p className="leading-relaxed text-gray-700 text-lg">
              Our vision is to create a community where shoppers trust Reca's Shop 
              for its commitment to quality, innovation, and exceptional service.
            </p>
          </div>
        </section>
  
        {/* Core Values Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Customer First</h3>
              <p className="text-gray-700">
                We prioritize your needs and work tirelessly to exceed your expectations.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Quality Assurance</h3>
              <p className="text-gray-700">
                Every product we offer is carefully inspected to ensure it meets the highest standards.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Integrity</h3>
              <p className="text-gray-700">
                We operate with honesty and transparency in all our dealings.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default About;
  