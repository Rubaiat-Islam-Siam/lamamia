import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <div className="text-center py-12">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-500 to-green-600 text-transparent bg-clip-text">
          Our Works
        </h1>
      </div>
      {children}
    </div>
  )
}

export default layout
