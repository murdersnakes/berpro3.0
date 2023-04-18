import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogPosts, { BlogPosts } from "../../../../data/blogPosts";

export default function Sidebar({ params }) {
  const data: BlogPosts[] = blogPosts;

  const dataMinusCurrent = data.filter((x) => x.slug !== params.slug);

  return (
    <div className='block px-5 pb-10 md:px-0 md:w-1/4 md:py-24 bg-[var(--text-color)] text-[var(--body-color)]'>
      <div className='grid grid-cols-1 gap-5'>
        <h2 className='h4'>Read more:</h2>
        {dataMinusCurrent.map((post) => {
          return (
            <Link key={post.id} href={`/blog/${post.slug}`} className='group'>
              <div className='flex items-center'>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={400}
                  className='object-cover w-1/2 h-24 grayscale group-hover:grayscale-0 transition-all duration-300'
                />
                <div className='pl-3'>
                  <h3 className='h4 text-sm line-clamp-2 text-dark/75 group-hover:text-[var(--body-color)] transition-colors duration-300 group-hover:underline'>
                    {post.title}
                  </h3>
                  <p className='p3 line-clamp-2 text-dark/75 group-hover:text-[var(--body-color)] transition-colors duration-300'>
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
