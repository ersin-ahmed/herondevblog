import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
	const [navbar, setNavbar] = useState(false);
	return (
		<>
			<header className='flex w-screen justify-between p-4 mx-auto bg-gradient-to-r from-cyan-200 to-teal-200'>
				<div className='flex items-center space-x-5'>
					<Link href='/'>
						<img
							className='w-44 object-contain cursor-pointer'
							src='/images/logo-no-background.png'
							alt='HeronDev Logo'
						/>
					</Link>
				</div>
				<div className='hidden md:inline-flex items-center space-x-5 mr-2'>
					<Link
						className='hover:underline hover:opacity-50 text-teal-800'
						href='/About'
					>
						About
					</Link>
					<Link
						className='hover:underline hover:opacity-50 text-teal-800'
						href='/Contact'
					>
						Contact
					</Link>
					<Link
						href='/Posts'
						className='text-white bg-teal-600 px-4 py-1 rounded-full hover:shadow-md hover:bg-cyan-500'
					>
						View All Posts
					</Link>
				</div>
				<div className='md:hidden'>
					<button
						className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
						onClick={() => setNavbar(!navbar)}
					>
						{navbar ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						)}
					</button>
				</div>
			</header>
			<div>
				<div
					className={`bg-teal-100 flex justify-center mx-auto pb-3 mt-0 md:hidden md:pb-0 md:mt-0 ${
						navbar ? 'block' : 'hidden'
					}`}
				>
					<ul className='mt-6 items-center justify-center text-center mx-auto mb-6 space-y-8 md:flex md:space-x-6 md:space-y-0'>
						<li className='text-cyan-600 text-3xl hover:text-teal-500'>
							<Link onClick={() => setNavbar(!navbar)} href='/'>
								Home
							</Link>
						</li>
						<li className='text-cyan-600 text-3xl hover:text-teal-500'>
							<Link onClick={() => setNavbar(!navbar)} href='/About'>
								About
							</Link>
						</li>

						<li className='text-cyan-600 text-3xl hover:text-teal-500'>
							<Link onClick={() => setNavbar(!navbar)} href='/Contact'>
								Contact
							</Link>
						</li>
						<li>
							<Link
								onClick={() => setNavbar(!navbar)}
								href='/Posts'
								className='text-white text-2xl bg-teal-600 px-6 py-2 rounded-full hover:shadow-md hover:bg-cyan-500'
							>
								View All Posts
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
