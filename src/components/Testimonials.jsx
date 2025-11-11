import { useEffect, useState } from 'react'

const TESTIMONIALS = [
  {
    name: 'Samantha Lee',
    quote: 'They found us the perfect home in record time. Professional and attentive throughout the process.',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Marcus Green',
    quote: 'Incredible market knowledge and negotiation skills. We saved thousands!',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Priya Patel',
    quote: 'Communication was excellent and the listing photos were stunning. Highly recommend.',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 4500)
    return () => clearInterval(id)
  }, [])

  const t = TESTIMONIALS[index]

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">What Clients Say</h2>
        <div className="mt-10">
          <div className="mx-auto w-20 h-20 rounded-full overflow-hidden">
            <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
          </div>
          <p className="mt-6 text-lg text-gray-700 italic">“{t.quote}”</p>
          <p className="mt-4 font-semibold text-gray-900">{t.name}</p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <span key={i} className={`h-1.5 w-6 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
