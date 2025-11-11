export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">About Us</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            With over 15 years of experience, we specialize in connecting people with homes that match their lifestyle. Our mission is to provide expert guidance, transparent advice, and a seamless experience from search to settlement.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We believe in integrity, market expertise, and exceptional client service. Whether buying or selling, our team is committed to achieving outstanding results.
          </p>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1920&auto=format&fit=crop" alt="Our Team" className="rounded-2xl shadow-lg w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
