import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
	posts: [Post];
}

export default function Posts({ posts }: Props) {
	return (
		<div className='mx-auto flex flex-col justify-between h-screen'>
			<Head>
				<title>All Posts</title>
				<meta
					name='description'
					content='View all the Blog Posts and Articles available to you by HeronDev.'
					key='desc'
				/>
				<link rel='icon' href='/images/logo-white.png' />
			</Head>

			<div className='max-w-7xl mx-auto'>
				<h1 className='text-center mt-4 text-teal-500 font-bold'>All Posts</h1>
				<hr className='max-w-lg my-5 mx-auto border border-teal-500' />

				{/*Featured Posts */}
				<div className='bg-cyan-100 rounded-xl border-2 border-cyan-100 shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
					{/* Map through all the posts but display only featured posts */}

					{posts.map((post) => {
						return (
							<Link key={post._id} href={`/post/${post.slug.current}`}>
								<div className='text-white h-96 shadow-xl border-2 bg-gradient-to-r from-cyan-700 to-teal-700 border-teal-700 rounded-lg group cursor-pointer overflow-hidden'>
									<Image
										unoptimized={true}
										width='1000'
										height='1000'
										className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
										src={urlFor(post.mainImage).url()!}
										alt='article'
									/>
									<div className='flex justify-between p-5 '>
										<div>
											<p className='text-lg font-bold'>{post.title}</p>
											<p className='text-xs pt-2'>
												{post.description}.
												<span className='text-teal-200'>
													<br /> Article by {post.author.name}
												</span>
											</p>
										</div>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export const getServerSideProps = async () => {
	const query = `
		*[_type == "post"]{
			_id,
			title,
			author-> {
				name,
				image
			},
			description,
			mainImage,
			slug,
			featured
		}
	`;

	const posts = await sanityClient.fetch(query);

	return {
		props: {
			posts,
		},
	};
};
