import React from 'react'

interface CategoryProps {
  params: Promise<{
    category: string;
  }>;
}

const Category = async ({params}: CategoryProps) => {
  const { category } = await params;
  
  return (
    <div>
        <h1 className="text-4xl font-bold capitalize">{category}</h1>
    </div>
  )
}

export default Category
