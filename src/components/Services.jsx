export default function Services() {
  const services = [
    { title: 'Buying', desc: 'Personalized property search, viewings, and negotiation to secure your ideal home.' },
    { title: 'Selling', desc: 'Strategic pricing, marketing, and staging to attract buyers and maximize returns.' },
    { title: 'Rentals', desc: 'Quality tenant placement and property management with minimal vacancy.' },
    { title: 'Market Insights', desc: 'Data-driven analysis to help you make confident real estate decisions.' },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Services</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
