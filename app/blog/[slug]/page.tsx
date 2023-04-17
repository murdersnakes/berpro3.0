import Image from "next/image";
import React from "react";
import blogPosts, { BlogPosts } from "../../../data/blogPosts";
import type { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const data: BlogPosts[] = blogPosts;
  const post = data.find((post): boolean => post.slug === params.slug);
  return {
    title: post.title,
    keywords: post.keywords,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 500,
          height: 500,
          alt: post.title,
          type: "image/jpeg",
        },
      ],
    },
  };
}

export default function page({ params }) {
  const data: BlogPosts[] = blogPosts;
  const post = data.find((post): boolean => post.slug === params.slug);

  return (
    <div className='bg-[var(--text-color)] text-[var(--body-color)]'>
      <div className='cont py-24 prose '>
        <h1 className='h2'>{post.title}</h1>
        <p className='p3 uppercase mt-3'>
          {post.date} | {post.author}
        </p>
        <Image
          src={post.image}
          width={500}
          height={500}
          className='py-8 object-cover h-96 rounded-xl overflow-hidden'
          alt={post.title}
		  priority
        />
        <div
          className='prose prose-h1:h2 prose-h2:h3 prose-h3:h4 prose-p:p2 prose-li:p2 '
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </div>
  );
}
