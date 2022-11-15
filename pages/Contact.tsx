import { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		let data = {
			name,
			email,
			message,
		};
		setSubmitted(true);
		await fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	};

	return (
		<>
			<Head>
				<title>Contact Us</title>
				<meta
					name='description'
					content='Fill out the form with your name and email with the message you want to send.'
					key='desc'
				/>
				<link rel='icon' href='/images/logo-white.png' />
			</Head>
			<div>
				<section className='text-gray-700 body-font relative'>
					<div className='container px-5 py-24 mx-auto'>
						<div className='flex flex-col text-center w-full mb-12'>
							<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
								Contact Us
							</h1>
							<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
								Feel free to connect with us.
							</p>
						</div>
						<div className='lg:w-1/2 md:w-2/3 mx-auto'>
							<form className='flex flex-wrap -m-2'>
								<div className='p-2 w-1/2'>
									<div className='relative'>
										<label
											htmlFor='name'
											className='leading-7 text-sm text-gray-600'
										>
											Name
										</label>
										<input
											onChange={(e) => {
												setName(e.target.value);
											}}
											type='text'
											id='name'
											name='name'
											required
											className='w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
										/>
									</div>
								</div>
								<div className='p-2 w-1/2'>
									<div className='relative'>
										<label
											htmlFor='email'
											className='leading-7 text-sm text-gray-600'
										>
											Email
										</label>
										<input
											onChange={(e) => {
												setEmail(e.target.value);
											}}
											type='email'
											id='email'
											name='email'
											required
											className='w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
										/>
									</div>
								</div>
								<div className='p-2 w-full'>
									<div className='relative'>
										<label
											htmlFor='message'
											className='leading-7 text-sm text-gray-600'
										>
											Message
										</label>
										<textarea
											onChange={(e) => {
												setMessage(e.target.value);
											}}
											id='message'
											name='message'
											required
											className='w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
										></textarea>
									</div>
								</div>
								<div className='p-2 w-full'>
									{name === '' || email === '' || message === '' ? (
										<button className='flex mx-auto cursor-not-allowed text-white focus:outline-none bg-red-400 border-0 py-2 px-8 rounded text-lg'>
											Please fill out the form!
										</button>
									) : (
										<input
											onClick={(e) => handleSubmit(e)}
											type='submit'
											className='flex mx-auto cursor-pointer text-white bg-teal-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-600 rounded text-lg'
											value='Send'
										/>
									)}
									{submitted && (
										<h1 className='text-center pt-6 text-teal-600 animate-pulse'>
											Message Sent!
										</h1>
									)}
								</div>
								<div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
									<a className='text-cyan-600'>ersinahmeddev@gmail.com</a>
									<p className='leading-normal my-5'>
										Burgas 8000
										<br />
										Bulgaria
									</p>
									<span className='inline-flex items-center'>
										<a
											href='https://github.com/ersin-ahmed'
											target='_blank'
											rel='noreferrer'
										>
											<svg
												aria-hidden='true'
												className='octicon octicon-mark-github'
												height='32px'
												version='1.1'
												viewBox='0 0 16 16'
												width='32px'
											>
												<path
													fillRule='evenodd'
													d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'
												></path>
											</svg>
										</a>
										<a
											href='https://www.linkedin.com/in/ersin-ahmed-54702b203/'
											target='_blank'
											rel='noreferrer'
										>
											<svg
												width='48px'
												height='48px'
												viewBox='0 0 48 48'
												version='1.1'
												xmlns='http://www.w3.org/2000/svg'
											>
												<title>Linkedin</title>
												<g
													id='Icon/Social/linkedin-color'
													stroke='none'
													strokeWidth='1'
													fill='none'
													fillRule='evenodd'
												>
													<path
														d='M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z'
														id='Shape'
														fill='#000000'
													></path>
												</g>
											</svg>
										</a>
									</span>
								</div>
							</form>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
}
