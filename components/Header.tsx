import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
	const [navbar, setNavbar] = useState(false);
	return (
		<>
			<header className='flex w-screen justify-between p-4 mx-auto bg-gradient-to-r from-red-300 via-red-400 to-yellow-300'>
				<div className='flex items-center space-x-5'>
					<Link href='/'>
						<img
							className='w-44 object-contain cursor-pointer'
							src='/images/logo-no-background.png'
							alt='HeronDev Logo'
						/>
					</Link>
				</div>
				<div className='hidden md:inline-flex items-center space-x-5'>
					<Link className='hover:underline' href='/About'>
						About
					</Link>
					<Link className='hover:underline' href='/Contact'>
						Contact
					</Link>
					<Link
						href='/Posts'
						className='text-white bg-green-600 px-4 py-1 rounded-full hover:shadow-xl'
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
					className={`bg-slate-200 flex justify-center mx-auto pb-3 mt-0 md:hidden md:pb-0 md:mt-0 ${
						navbar ? 'block' : 'hidden'
					}`}
				>
					<ul className='mt-6 items-center justify-center text-center mx-auto mb-6 space-y-8 md:flex md:space-x-6 md:space-y-0'>
						<li className='text-yellow-600 text-3xl hover:text-yellow-500'>
							<Link href='/'>Home</Link>
						</li>
						<li className='text-yellow-600 text-3xl hover:text-yellow-500'>
							<Link href='/About'>About</Link>
						</li>

						<li className='text-yellow-600 text-3xl hover:text-yellow-500'>
							<Link href='/Contact'>Contact</Link>
						</li>
						<li>
							<Link
								href='/Posts'
								className='text-white text-2xl bg-green-600 px-6 py-2 rounded-full hover:shadow-xl'
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
