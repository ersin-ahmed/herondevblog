export default function Banner() {
	return (
		<div className='flex justify-between items-center bg-cyan-200 border-y border-black py-10'>
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
				className='hidden md:inline-flex md:h-24 lg:h-32 pr-4'
				src='images/logo-no-background.png'
				alt='HeronDev Brand Logo'
			/>
		</div>
	);
}
