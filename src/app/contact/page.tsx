import Image from 'next/image'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lamamia Contact Info",
  description: "This is the Contact page",
};

const Contact = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Title */}
        <h1 className="
          text-4xl md:text-5xl font-bold text-center
          bg-gradient-to-b from-emerald-700 to-emerald-400
          text-transparent bg-clip-text
        ">
          Let Keep in Touch
        </h1>

        <p className="text-center text-theme-secondary mt-4 max-w-xl mx-auto">
          Have a project in mind or just want to say hello?  
          Fill out the form and we’ll get back to you.
        </p>

        {/* Content */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Image */}
          <div className="flex-1 flex justify-center">
            <Image 
              src="/contact.png" 
              alt="Contact"
              width={400} 
              height={400}
              className="drop-shadow-xl animate-float"
            />
          </div>

          {/* Right Form */}
          <div className="flex-1 w-full max-w-md">
            <form className="space-y-4">
              
              <input 
                type="text" 
                placeholder="Name"
                className="
                  w-full px-4 py-3 
                  border-b border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-emerald-500
                "
              />

              <input 
                type="email" 
                placeholder="Email"
                className="
                  w-full px-4 py-3 
                  border-b border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-emerald-500
                "
              />

              <textarea 
                placeholder="Message"
                rows={4}
                className="
                  w-full px-4 py-3 
                  border-b border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-emerald-500
                "
              ></textarea>

              <button 
                type="submit"
                className="
                  w-full py-3 rounded-lg
                  bg-gradient-to-r from-emerald-600 to-green-500
                  text-white font-medium
                  hover:opacity-90 transition
                "
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
