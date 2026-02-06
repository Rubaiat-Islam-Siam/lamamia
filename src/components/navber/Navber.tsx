"use client"

import Link from 'next/link'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
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
  const { data: session, status } = useSession()

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
            <div>
              {status === "loading" ? (
                <button className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-wait">
                  Loading...
                </button>
              ) : session ? (
                <button 
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <Link 
                  href="/login"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          
        </div>

      </div>
    </nav>
  )
}

export default Navbar
