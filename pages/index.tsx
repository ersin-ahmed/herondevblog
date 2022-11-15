import Head from 'next/head';
import Link from 'next/link';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
	posts: [Post];
}

export default function Home({ posts }: Props) {
	return (
		<div className='mx-auto flex flex-col justify-between h-screen'>
			<Head>
				<title>HeronDev Blog</title>
				<meta
					name='description'
					content='A Blog about Programming, Web Development and many other topics regarding Software Development and Engineering. Founded by Ersin Ahmed.'
				/>
				<link rel='icon' href='/images/logo-white.png' />
			</Head>

			<div className='max-w-6xl mx-auto'>
				<Banner />

				<h1 className='text-center mt-4 text-teal-600 font-bold'>
					Featured Posts
				</h1>
				<hr className='max-w-lg my-5 mx-auto border border-teal-600' />

				{/*Featured Posts */}
				<div className='bg-cyan-100 rounded-xl border-2 border-cyan-100 shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
					{/* Map through all the posts but display only featured posts */}

					{posts.map((post) => {
						if (post.featured) {
							return (
								<Link key={post._id} href={`/post/${post.slug.current}`}>
									<div className='text-white border-2 shadow-xl border-teal-700  rounded-lg group cursor-pointer overflow-hidden'>
										<img
											className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
											src={urlFor(post.mainImage).url()!}
											alt='article'
										/>
										<div className='flex justify-between p-5 bg-gradient-to-r from-teal-700 to-cyan-700'>
											<div>
												<p className='text-lg font-bold'>{post.title}</p>
												<p className='text-xs'>
													{post.description} by {post.author.name}
												</p>
											</div>
										</div>
									</div>
								</Link>
							);
						}
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
