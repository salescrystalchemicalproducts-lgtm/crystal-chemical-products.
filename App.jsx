export default function CrystalChemicalWebsite() {
  const products = [
    'Makula Liquid Cleaner',
    'Makula Bleach',
    'White Emulsion Disinfectant',
    'Hand Sanitizer',
    'Scouring Powder',
    'Bar Soap',
    'Dog Shampoo',
    'Terramic Striper'
  ];

  const testimonials = [
    'Reliable products and always delivered on time.',
    'Excellent quality bleach and disinfectant for our business.',
    'Affordable prices and very professional service.'
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-50 shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Crystal Chemical Products</h1>
            <p className="text-sm text-gray-600">Trusted since 1997 • Makula Cleaning Products</p>
          </div>
          <a href="mailto:sales.crystalchemicalproducts@gmail.com" className="px-5 py-2 rounded-2xl shadow bg-white border">Contact Us</a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight">Quality Cleaning Products for Homes & Businesses</h2>
          <p className="mt-5 text-lg text-gray-600">
            Trusted manufacturers and suppliers of Makula cleaning and hygiene solutions in Kampala, Uganda.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="mailto:sales.crystalchemicalproducts@gmail.com" className="px-6 py-3 rounded-2xl shadow border">Order Now</a>
            <a href="#products" className="px-6 py-3 rounded-2xl border">View Products</a>
          </div>
        </div>
        <div className="bg-gray-100 rounded-3xl p-10 shadow-sm">
          <p className="text-xl font-semibold">Fast Delivery • Affordable Pricing • Reliable Quality</p>
          <p className="mt-4 text-gray-600">Salaama Road, Plot No. 86, Block 263, Luwafu, Makindye, Kampala.</p>
        </div>
      </section>

      <section id="products" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Our Products</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border">
                <h4 className="font-semibold text-lg">{product}</h4>
                <p className="mt-2 text-sm text-gray-600">Available for retail and bulk orders.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-6">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-2xl">Trusted since 1997</div>
          <div className="p-6 border rounded-2xl">Bulk & retail orders</div>
          <div className="p-6 border rounded-2xl">Timely delivery across Kampala</div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border shadow-sm">“{item}”</div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-4">Contact & Orders</h3>
        <p>Email: sales.crystalchemicalproducts@gmail.com</p>
        <p>Phone: +256 701 708 819</p>
        <p>Location: Kampala, Uganda</p>
      </section>

      <footer className="bg-blue-50 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600">
          <p>Crystal Chemical Products • Trusted since 1997</p>
        </div>
      </footer>
    </div>
  );
}