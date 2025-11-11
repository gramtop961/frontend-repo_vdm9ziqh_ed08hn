export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
          <p className="mt-4 text-gray-700">Have a question or want to schedule a viewing? Send us a message and our team will get back to you shortly.</p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="jane@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="(555) 123-4567" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="4" required className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="How can we help?" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-700">Send Message</button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li><span className="font-medium">Phone:</span> (555) 987-6543</li>
              <li><span className="font-medium">Email:</span> hello@realestateco.com</li>
              <li><span className="font-medium">Office:</span> 123 Skyline Ave, Suite 400, Metropolis</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-black">IG</a>
              <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-black">FB</a>
              <a href="#" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-black">IN</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
