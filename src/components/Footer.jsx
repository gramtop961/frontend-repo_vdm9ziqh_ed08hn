export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-semibold">RE</div>
            <span className="text-lg font-semibold text-white">RealEstateCo</span>
          </div>
          <p className="mt-4 text-sm text-gray-400">Listings are subject to change without notice. Information is deemed reliable but not guaranteed.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Phone: (555) 987-6543</li>
            <li>Email: hello@realestateco.com</li>
            <li>Address: 123 Skyline Ave, Suite 400</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} RealEstateCo. All rights reserved.</div>
    </footer>
  )
}
