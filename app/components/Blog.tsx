import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import blogPosts, { BlogPosts } from "../../data/blogPosts";

export default function Blog(): JSX.Element {
  const data: BlogPosts[] = blogPosts.slice(0, 3);
  return (
    <div className='text-dark bg-light'>
      <div className='cont py-24'>
        <div className='flex justify-between items-baseline mb-10'>
          <h2 className='h2 text-center'>Latest Blog Posts</h2>
          <Link
            href='/blog'
            aria-label='View all blog posts'
            className='group btn-link flex items-center gap-2'
          >
            View all
            <FaChevronRight className='text-xs group-hover:translate-x-2 trans' />
          </Link>
        </div>
        <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
          {data.map((post) => {
            return (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className='overflow-hidden hover:shadow-xl trans rounded border border-dark/10'
              >
                <div>
                  <Image
                    src={post.image}
                    width={500}
                    height={500}
                    className='mb-2 object-cover w-full h-64 rounded-t'
                    alt={post.title}
                  />
                </div>
                <div className="px-3 py-5">
                  <p className='mb-4 p4 uppercase'>{post.date}</p>
                  <p className='h3 mb-3'>{post.title}</p>
                  <p className='mb-4 p3 line-clamp-3'>{post.excerpt}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
