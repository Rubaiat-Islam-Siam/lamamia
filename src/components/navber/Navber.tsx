import Link from 'next/link'
import React from 'react'
import DarkMode from '../darkMode/DarkMode'

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
]

const Navbar = () => {
  return (
    <nav className="shadow-sm rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold">
            lamamia
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6 ">
            <DarkMode/>
            {links.map(link => (
              <Link
                key={link.id}
                href={link.url}
                className="px-2 py-1 rounded-xl text-theme-muted font-semibold hover:bg-black/20 hover:text-theme-primary transition-all duration-300 ease-in-out"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
