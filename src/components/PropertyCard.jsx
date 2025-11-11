export default function PropertyCard({ image, address, price, beds, baths }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={address} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between">
          <h3 className="text-base font-semibold text-gray-900">{address}</h3>
          <span className="text-blue-600 font-bold">{price}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{beds} Beds • {baths} Baths</p>
        <div className="mt-4">
          <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">View Details</a>
        </div>
      </div>
    </div>
  )
}
