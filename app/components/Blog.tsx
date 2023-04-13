import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import blogPosts, { BlogPosts } from "../../data/blogPosts";

export default function Blog(): JSX.Element {
  const data: BlogPosts[] = blogPosts.slice(0, 3);
  return (
    <div className='text-[var(--body-color)] bg-[var(--text-color)]'>
      <div className='cont pb-24'>
        <div className="flex justify-between items-baseline mb-10">
          <h2 className='h2 text-center'>Latest Blog Posts</h2>
          <Link
            href='/blog'
            aria-label='View all blog posts'
            className='group inline-flex gap-2 items-baseline font-semibold transition-colors duration-200 hover:text-indigo-600'
          >
            View all
            <FaChevronRight className='text-xs group-hover:translate-x-2 transition-transform duration-300'/>
          </Link>
        </div>
        <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
          {data.map((post) => {
            return (
              <div
                key={post.id}
                className='overflow-hidden transition-shadow duration-300 rounded'
              >
                <Link href={`/blog/${post.slug}`} aria-label={post.title}>
                  <Image
                    src={post.image}
                    width={500}
                    height={500}
                    className='object-cover w-full h-64 rounded'
                    alt={post.title}
                  />
                </Link>
                <div className='py-5'>
                  <p className='mb-2 p4 uppercase'>{post.date}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label='Blog post tile link'
                    className='inline-block mb-3 transition-colors duration-200 hover:text-white'
                  >
                    <p className='h3'>{post.title}</p>
                  </Link>
                  <p className='mb-4 p3 line-clamp-3'>{post.excerpt}</p>
                  <div className='flex space-x-4'>
                    <Link
                      href={`/blog/${post.slug}`}
                      aria-label='Likes'
                      className='flex items-start transition-colors duration-200 hover:text-white'
                    >
                      <div className='mr-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                        >
                          <polyline
                            points='6 23 1 23 1 12 6 12'
                            fill='none'
                            strokeMiterlimit='10'
                          />
                          <path
                            d='M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z'
                            fill='none'
                            stroke='currentColor'
                            strokeMiterlimit='10'
                          />
                        </svg>
                      </div>
                      <p className='font-semibold'>{post.likes}</p>
                    </Link>
                    <Link
                      href={`/blog/${post.slug}`}
                      aria-label='Comments'
                      className='flex items-start transition-colors duration-200 hover:text-white group'
                    >
                      <div className='mr-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          stroke='currentColor'
                          className='w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700'
                        >
                          <polyline
                            points='23 5 23 18 19 18 19 22 13 18 12 18'
                            fill='none'
                            strokeMiterlimit='10'
                          />
                          <polygon
                            points='19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2'
                            fill='none'
                            stroke='currentColor'
                            strokeMiterlimit='10'
                          />
                        </svg>
                      </div>
                      <p className='font-semibold'>{post.comments}</p>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
