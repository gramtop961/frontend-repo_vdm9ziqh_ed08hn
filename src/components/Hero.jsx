import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">Premium Real Estate</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Find Your Dream Home Today
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Expert guidance, personalized service, and a vast selection of properties across the city. Discover luxury living with a trusted partner.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#listings" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition">Start Your Search</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md bg-white/80 backdrop-blur px-6 py-3 text-base font-semibold text-gray-900 ring-1 ring-gray-200 hover:bg-white">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
