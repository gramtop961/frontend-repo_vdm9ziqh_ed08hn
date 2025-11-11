import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Listings', href: '#listings' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-semibold">RE</div>
            <span className="text-lg font-semibold text-gray-900">RealEstateCo</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {item.name}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors">Get in touch</a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="block rounded-md px-3 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700" onClick={() => setOpen(false)}>Get in touch</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
