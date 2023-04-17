import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import blogPosts, { BlogPosts } from "../../data/blogPosts";

export const metadata: Metadata = {
  title: "BERpro Blog | Energy Efficiency Tips, News and Insights",
  description:
    "Explore the BERpro Blog for the latest news, insights, and tips on energy efficiency, building energy ratings, and sustainable living. Stay up-to-date with industry developments and learn how to make your home more eco-friendly.",
};

export default function page(): JSX.Element {
  const data: BlogPosts[] = blogPosts;

  const sortedData = data.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  return (
    <div className='text-dark bg-light'>
      <div className='cont py-24'>
        <div className='flex justify-between items-baseline mb-10'>
          <h2 className='h2 text-center'>Latest Blog Posts</h2>
        </div>
        <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
          {sortedData.map((post) => {
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
                <div className='px-3 py-5'>
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
