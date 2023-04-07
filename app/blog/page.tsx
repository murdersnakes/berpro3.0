import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blogPosts from '../../data/blogPosts';

export default function page() {
	return (
		<div>
			<div className='cont py-24'>
				<h1 className='h1'>Blog Posts</h1>
				<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10'>
					{blogPosts.map((post) => {
						return (
							<Link
								href={`/blog/${post.slug}`}
								key={post.id}
								className='group bg-[var(--text-color)] text-[var(--body-color)] rounded-lg h-[470px] shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow'
							>
								<Image
									src={`/${post.image}`}
									width='500'
									height='500'
									priority
									alt={post.title}
									className='object-cover w-full h-2/5 grayscale'
								/>
								<div className='p-6 flex flex-col h-1/2 justify-between'>
									<div>
										<h2 className='h3 group-hover:text-indigo-700 transition-colors duration-300'>
											{post.title}
										</h2>
										<p className='mt-2 p4 uppercase w-full flex justify-between'>
											{post.date} | {post.author}
										</p>
										<p className='mt-4 p3 line-clamp-4'>{post.excerpt}</p>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
