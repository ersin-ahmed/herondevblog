import Link from 'next/link';

export default function Footer() {
	return (
		<footer className=' mt-28 p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-gradient-to-r from-red-300 via-red-400 to-yellow-300'>
			<span className='text-sm text-black sm:text-center'>
				© 2022{' '}
				<a
					href='https://herondevblog-cpkb.vercel.app/'
					className='hover:underline'
					target='_blank'
					rel='noreferrer'
				>
					HeronDev™
				</a>
				. All Rights Reserved.
			</span>
			<ul className='flex flex-wrap items-center mt-3 text-sm text-black sm:mt-0'>
				<li>
					<Link href='/About' className='mr-4 hover:underline md:mr-6 '>
						About
					</Link>
				</li>
				<li>
					<Link href='/Contact' className='hover:underline'>
						Contact
					</Link>
				</li>
			</ul>
		</footer>
	);
}
