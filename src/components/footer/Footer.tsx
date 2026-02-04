import React from 'react'
import DarkMode from '../darkMode/DarkMode'

const Footer = () => {
  return (
    <footer className=" text-theme-secondary mt-20 shadow-md rounded-xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left */}
          <div>
            <h2 className="text-xl font-semibold text-theme-primary">
              DARK_SHADOW
            </h2>
            <p className="text-sm mt-2 text-theme-muted">
              Building modern web experiences.
            </p>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-4">
            <img src="/1.png" alt="icon1" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
            <img src="/2.png" alt="icon2" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
            <img src="/3.png" alt="icon3" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
            <img src="/4.png" alt="icon4" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-theme-muted">
          © {new Date().getFullYear()} DARK_SHADOW. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
