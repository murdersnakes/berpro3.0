import Image from 'next/image';
import React from 'react';
import blogPosts, { BlogPosts } from '../../../data/blogPosts';
import Metadata from 'next';

export default function page({ params }) {
	const data: BlogPosts[] = blogPosts;
	const post = data.find((post): boolean => post.slug === params.slug);

	return (
		<div className="bg-[var(--text-color)] text-[var(--body-color)]">
			<div className="cont py-24 prose ">
				<h1 className="h2">{post.title}</h1>
				<p className="p3 uppercase mt-3">
					{post.date} | {post.author}
				</p>
				<Image
					src={post.image}
					width={500}
					height={500}
					className="py-8 object-cover h-96 rounded-xl overflow-hidden"
					alt={post.title}
				/>
				<div
					className="prose prose-h1:h2 "
					dangerouslySetInnerHTML={{ __html: post.content }}
				></div>
			</div>
		</div>
	);
}
