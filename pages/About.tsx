import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
				<meta
					name='description'
					content='Read more about the Founder / Creator of this blog Ersin Ahmed.'
					key='desc'
				/>
				<link rel='icon' href='/images/logo-white.png' />
			</Head>
			<div className='shadow-xl bg-cyan-50 border-teal-300 border-2 rounded-xl max-w-6xl mx-auto flex flex-col text-center justify-center items-center my-12 py-6 px-0 md:px-2'>
				<Image
					className='rounded-full'
					src='/images/about.jpg'
					alt='Author Ersin Ahmed'
					width='200'
					height='200'
				/>
				<h1 className='text-2xl my-12 font-bold'>
					Hello, My name is Ersin Ahmed.
				</h1>
				<div>
					<h2 className='text-2xl font-semibold mb-6'>Welcome to my Blog.</h2>
					<hr className='max-w-lg my-5 mx-auto border border-teal-600' />
					<p className='text-left text-teal-600 font-medium pb-2 px-8'>
						About Me:
					</p>
					<p className='text-xl font-medium text-left px-12'>
						I&apos;m a Software Developer from Burgas, Bulgaria. My technical
						skills include: Web Development with Javascript and React. I&apos;ve
						been teaching myself how to code since the year 2017. Despite
						accumulating quite a bit of knowledge since then, I&apos;m fully
						aware of the fact that in an ever-changing climate of Software
						Development you must always keep learning and keep the same student
						mentality no matter the expertise level! If you wish to learn more
						about my abilities as a developer, please feel free to checkout my
						portfolio site by clicking{' '}
						<a
							href='/'
							target='_blank'
							rel='noreferrer'
							className='text-cyan-600 hover:underline hover:text-teal-400'
						>
							here
						</a>
						. Likewise my GitHub page is linked{' '}
						<a
							href='https://github.com/ersin-ahmed'
							target='_blank'
							rel='noreferrer'
							className='text-cyan-600 hover:underline hover:text-teal-400'
						>
							here
						</a>{' '}
						and my LinkedIn page is linked{' '}
						<a
							href='https://www.linkedin.com/in/ersin-ahmed-54702b203/'
							target='_blank'
							rel='noreferrer'
							className='text-cyan-600 hover:underline hover:text-teal-400'
						>
							here
						</a>
						. Alternatively you can click the icons shown in the footer section
						below of the website to visit my socials. You can also connect with
						me by visiting the{' '}
						<Link
							href='/Contact'
							className='text-cyan-600 hover:underline hover:text-teal-400'
						>
							Contact page
						</Link>{' '}
						of this site to send me a message with your name and email. Thank
						you for visiting my Blog!
					</p>
				</div>
			</div>

			<Footer />
		</>
	);
}
