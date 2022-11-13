import Link from 'next/link';

export default function Header() {
	return (
		<header className='flex justify-between p-4 w-full mx-auto bg-gradient-to-r from-red-300 via-red-400 to-yellow-300'>
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
				<h3>About</h3>
				<h3>Contact</h3>
				<Link
					href='/Posts'
					className='text-white bg-green-600 px-4 py-1 rounded-full'
				>
					View All Posts
				</Link>
			</div>
		</header>
	);
}
