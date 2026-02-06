import Image from 'next/image';
import Link from 'next/link';

interface Post {
  _id: string;
  slug: string;
  image_url: string;
  heading: string;
  description: string;
  content: string;
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function LlamaPage() {
  const data: Post[] = await getData();
  return (
    <main className="min-h-screen bg-theme-section p-8 md:p-16 m-2 rounded-md ">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {data.map((item) => (
          <Link href={`/blog/${item.slug}`} key={item._id} className="flex flex-col md:flex-row gap-8 items-start group cursor-pointer">
            {/* Image Container */}
            <div className="relative w-full md:w-[400px] aspect-video overflow-hidden rounded-sm">
              <Image
                src={item.image_url}
                alt={item.heading}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-theme-primary group-hover:opacity-80 transition-colors">
                {item.heading}
              </h2>
              <p className="text-theme-secondary leading-relaxed text-sm md:text-base max-w-2xl">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}