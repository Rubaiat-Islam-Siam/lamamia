import CategoryContent from './CategoryContent'

interface CategoryProps {
  params: Promise<{
    category: string;
  }>;
}

const Category = async ({params}: CategoryProps) => {
  const { category } = await params;
  
  return <CategoryContent category={category} />
}

export default Category

