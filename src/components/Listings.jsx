import PropertyCard from './PropertyCard'

const featured = [
  {
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1920&auto=format&fit=crop',
    address: '218 Riverside Ave, Midtown',
    price: '$1,250,000',
    beds: 3,
    baths: 2,
  },
  {
    image: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    address: '77 Lakeview Dr, Westside',
    price: '$980,000',
    beds: 4,
    baths: 3,
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop',
    address: '12 Garden St, Old Town',
    price: '$1,750,000',
    beds: 5,
    baths: 4,
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1920&auto=format&fit=crop',
    address: '409 Cedar Ct, North Hills',
    price: '$1,200,000',
    beds: 3,
    baths: 2,
  },
]

export default function Listings() {
  return (
    <section id="listings" className="relative py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Listings</h2>
            <p className="mt-2 text-gray-600">Explore a curated selection of premium properties.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((p) => (
            <PropertyCard key={p.address} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
