import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Post {
  _id: string;
  slug: string;
  image_url: string;
  heading: string;
  description: string;
  content: string;
}

async function getPost(slug: string) {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const posts: Post[] = await res.json();
  return posts.find(post => post.slug === slug);
}

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = await getPost(id)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.heading,
    description: post.description,
    openGraph: {
      title: post.heading,
      description: post.description,
      images: [post.image_url],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.heading,
      description: post.description,
      images: [post.image_url],
    },
  }
}

const BlogPost = async ({ params }: Props) => {
  const { id } = await params
  const post = await getPost(id)

  if (!post) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-black/20 text-white p-8 md:p-16 rounded-md mt-3">
      <Link 
          href="/blog" 
          className="fixed top-10 right-10 md:top-20 md:right-33 z-50 flex items-center gap-2 text-gray-400 hover:text-white hover:bg-black/60 transition-colors bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
        >
          ← Back to Blog
        </Link>
      <div className="max-w-4xl mx-auto">
        
        <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image_url}
            alt={post.heading}
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6 ">
          {post.heading}
        </h1>

        <div className="text-xl leading-relaxed whitespace-pre-line text-theme-secondary">
          {post.content || post.description}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
