import { GetStaticProps } from 'next';
import { sanityClient, urlFor } from '../../sanity';
import { Post } from '../../typings';
import PortableText from 'react-portable-text';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Image from 'next/image';

interface IFormInput {
	_id: string;
	name: string;
	email: string;
	comment: string;
}

interface Props {
	post: Post;
}

const Post = ({ post }: Props) => {
	const [submitted, setSubmitted] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		fetch('/api/createComment', {
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then(() => {
				setSubmitted(true);
			})
			.catch((err) => {
				console.log(err);
				setSubmitted(false);
			});
	};

	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta
					name='description'
					content={`${post.title} by ${post.author.name}. ${post.description}`}
					key='desc'
				/>
				<link rel='icon' href='/images/logo-white.png' />
			</Head>
			<main>
				<Image
					height='1000'
					width='1000'
					className='w-full h-40 object-cover'
					src={urlFor(post.mainImage).url()!}
					alt='post image'
				/>
				<article className='max-w-7xl mx-auto sm:p-5 p-2'>
					<h1 className='text-3xl font-medium text-teal-900 mt-12 mb-12'>
						{post.title}
					</h1>
					<hr className='max-w-5xl my-5 mx-auto border border-teal-500' />
					<h2 className='text-2xl text-teal-700 my-6'>{post.description}</h2>

					<div className='flex items-center space-x-2'>
						<Image
							height='800'
							width='800'
							className='h-10 w-10 rounded-full object-cover'
							src={urlFor(post.author.image).url()!}
							alt='author image'
						/>
						<p className='font-extralight text-sm'>
							Blog post by{' '}
							<span className='text-teal-500'>{post.author.name}</span> -
							Published at {new Date(post._createdAt).toLocaleString()}
						</p>
					</div>

					<div className='mt-10 border-2 border-cyan-100 bg-cyan-100 rounded-md p-4 md:px-16'>
						<PortableText
							className=''
							dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
							projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
							content={post.body}
							serializers={{
								h1: (props: any) => (
									<h1 className='text-2xl font-bold my-6' {...props} />
								),
								h2: (props: any) => (
									<h1 className='text-xl font-bold my-6' {...props} />
								),
								h3: (props: any) => (
									<h1 className='text-xl font-normal my-8' {...props} />
								),
								h4: (props: any) => (
									<h1 className='text-lg font-semibold my-6' {...props} />
								),
								p: ({ children }: any) => (
									<p className='text-2xl text-cyan-400 font-bold my-5'>
										{children}
									</p>
								),
								li: ({ children }: any) => (
									<li className='ml-4 list-disc font-medium text-2xl'>
										{children}
									</li>
								),
								link: ({ href, children }: any) => (
									<a
										href={href}
										className='text-blue-500 hover:underline cursor-pointer'
									>
										{children}
									</a>
								),
							}}
						/>
					</div>
				</article>
				<hr className='max-w-lg my-5 mx-auto border border-teal-500' />
				{submitted ? (
					<div className='flex flex-col p-10 my-10 rounded bg-cyan-500 text-white max-w-2xl mx-auto'>
						<h3 className='text-3xl font-bold'>
							Thank you for submitting your comment!
						</h3>
						<p>Once it has been approved, it will appear below!</p>
					</div>
				) : (
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col p-5 max-w-2xl mx-auto mb-10'
					>
						<h3 className='text-sm text-teal-500'>Enjoyed this article?</h3>
						<h4 className='text-3xl font-bold'>Leave a comment below!</h4>
						<hr className='max-w-5xl my-5 mx-auto border border-teal-500' />

						<input
							{...register('_id')}
							type='hidden'
							name='_id'
							value={post._id}
						/>

						<label className='block mb-5'>
							<span className='text-gray-700'>Name</span>
							<input
								{...register('name', { required: true })}
								className='shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-teal-500 outline-none focus:ring'
								placeholder='Name'
								type='text'
							/>
						</label>
						<label className='block mb-5'>
							<span className='text-gray-700'>Email</span>
							<input
								{...register('email', { required: true })}
								className='shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-teal-500 outline-none focus:ring'
								placeholder='Name'
								type='email'
							/>
						</label>
						<label className='block mb-5'>
							<span className='text-gray-700'>Comment</span>
							<textarea
								{...register('comment', { required: true })}
								className='shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-teal-500 outline-none focus:ring'
								placeholder='Name'
								rows={8}
							/>
						</label>

						{/* Error handling for the form! */}
						<div className='flex flex-col p-5'>
							{errors.name && (
								<span className='text-red-500'>The Name Field is required</span>
							)}
							{errors.comment && (
								<span className='text-red-500'>
									The Comment Field is required
								</span>
							)}
							{errors.email && (
								<span className='text-red-500'>
									The Email Field is required
								</span>
							)}
						</div>

						<input
							type='submit'
							className='shadow bg-cyan-500 hover:bg-teal-400 focus:shadow-outline focush:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer'
						/>
					</form>
				)}
				{/* Comment */}
				<div className='flex flex-col p-10 my-10 max-w-2xl border-cyan-100 border-2 mx-auto bg-cyan-100 shadow-cyan-500 rounded-md shadow space-y-2'>
					<h3 className='text-3xl text-teal-700 pb-4'>Comments</h3>
					<hr className='max-w-6xl mx-8 border border-teal-500' />

					{post.comments.map((comment) => (
						<div key={comment._id}>
							<p>
								<span className='text-teal-500'>{comment.name}</span>:{' '}
								{comment.comment}
							</p>
						</div>
					))}
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Post;

export const getStaticPaths = async () => {
	const query = `
    *[_type == "post"]{
        _id,
        slug {
        current
       }
      }
    `;

	const posts = await sanityClient.fetch(query);

	const paths = posts.map((post: Post) => ({
		params: {
			slug: post.slug.current,
		},
	}));

	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const query = `
        *[_type == "post" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            author-> {
                name,
                image
            },
            'comments': *[
                _type =="comment" &&
                post._ref == ^._id &&
                approved == true],
            description,
            mainImage,
            slug,
            body,
			featured
        }
    `;

	const post = await sanityClient.fetch(query, {
		slug: params?.slug,
	});

	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			post,
		},
		revalidate: 60, // afer 60 seconds, it will update the old cache version
	};
};
