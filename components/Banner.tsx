export default function Banner() {
	return (
		<div className='flex justify-between items-center bg-[#FCE44D] border-y border-black py-10 lg:py-0'>
			<div className='px-10 space-y-5'>
				<h1 className='text-4xl max-w-xl font-serif'>
					<span className='underline decoration-black decoration-4'>
						HeronDev
					</span>
					<span> </span> is the place to read about all things programming.
				</h1>
				<h2>
					Feel free to browse our website to find any articles that you&apos;re
					interested in.
				</h2>
			</div>

			<img
				className='hidden md:inline-flex h-64 md:h-64 lg:h-80'
				src='images/herondev-logo.png'
				alt='HeronDev Brand Logo'
			/>
		</div>
	);
}
