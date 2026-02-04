import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <section className="bg-transparent shadow-sm rounded-2xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Title */}
        <h1 className="
          text-3xl md:text-4xl font-bold 
          bg-gradient-to-b from-emerald-700 to-emerald-400
          text-transparent bg-clip-text
        ">
          Choose a Gallery
        </h1>

        <p className=" text-gray-300 mt-4">
          Explore our work across different categories
        </p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Illustration */}
          <Link href="/portfolio/illustration" className="group">
            <div className="relative overflow-hidden rounded-xl">
              <Image 
                src="/illustration.png" 
                alt="Illustration"
                width={400} 
                height={500}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500 "
              />
              <h2 className="
                absolute bottom-4 left-1/2 -translate-x-1/2
                text-xl font-semibold text-white
                drop-shadow-lg bg-black/50 p-2 rounded-xl
              ">
                Illustration
              </h2>
            </div>
          </Link>

          {/* Websites */}
          <Link href="/portfolio/websites" className="group">
            <div className="relative overflow-hidden rounded-xl">
              <Image 
                src="/websites.jpg" 
                alt="Websites"
                width={400} 
                height={500}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <h2 className="
                absolute bottom-4 left-1/2 -translate-x-1/2
                text-xl font-semibold text-white
                drop-shadow-lg bg-black/50 p-2 rounded-xl
              ">
                Websites
              </h2>
            </div>
          </Link>

          {/* Apps */}
          <Link href="/portfolio/apps" className="group">
            <div className="relative overflow-hidden rounded-xl">
              <Image 
                src="/apps.jpg" 
                alt="Apps"
                width={400} 
                height={500}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <h2 className="
                absolute bottom-4 left-1/2 -translate-x-1/2
                text-xl font-semibold text-white
                drop-shadow-lg bg-black/50 p-2 rounded-xl
              ">
                Apps
              </h2>
            </div>
          </Link>

        </div>

      </div>
    </section>
  )
}

export default Portfolio
