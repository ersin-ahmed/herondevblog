import Head from 'next/head';
import Link from 'next/link';
import Banner from '../components/Banner';
import Header from '../components/Header';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
	posts: [Post];
}

export default function Home({ posts }: Props) {
	return (
		<div className='max-w-7xl mx-auto'>
			<Head>
				<title>HeronDev Blog</title>
				<meta
					name='description'
					content='A Blog about Programming, Web Development and many other topics regarding Software Development and Engineering. Founded by Ersin Ahmed.'
				/>
				<link rel='icon' href='/images/logo-white.png' />
			</Head>

			<Header />

			<Banner />

			{/* Posts */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
				{posts.map((post) => (
					<Link key={post._id} href={`/post/${post.slug.current}`}>
						<div className='border rounded-lg group cursor-pointer overflow-hidden'>
							<img
								className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
								src={urlFor(post.mainImage).url()!}
								alt='article'
							/>
							<div className='flex justify-between p-5 bg-white'>
								<div>
									<p className='text-lg font-bold'>{post.title}</p>
									<p className='text-xs'>
										{post.description} by {post.author.name}
									</p>
								</div>

								{/* <img
									className='h-12 w-12 rounded-full'
									src={urlFor(post.author.image).url()!}
									alt='author image'
								/> */}
							</div>
						</div>
					</Link>
				))}
			</div>
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
			slug
		}
	`;

	const posts = await sanityClient.fetch(query);

	return {
		props: {
			posts,
		},
	};
};
