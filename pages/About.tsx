import Image from 'next/image';
import Footer from '../components/Footer';

export default function About() {
	return (
		<>
			<div className='shadow-xl border-teal-300 border-2 rounded-xl max-w-6xl mx-auto flex flex-col text-center justify-center items-center my-12 py-6 px-0 md:px-2'>
				<Image
					className='rounded-3xl'
					src='/images/author.jpg'
					alt='Author Ersin Ahmed'
					width='200'
					height='200'
				/>
				<h1 className='text-2xl my-12 font-bold'>
					Hello, My name is Ersin Ahmed.
				</h1>
				<div>
					<h2 className='text-2xl font-semibold mb-6'>Welcome to my Blog.</h2>
					<p className='text-xl font-medium text-left px-8'>
						I am a Web Developer from Burgas, Bulgaria. My journey into the
						world of programming began when I was still in High School back in
						2017. The first programming language I ever tried to learn was Java.
						At the time I wasn&apos;t aware that perhaps Java wasn&apos;t the
						best choice for a beginner to learn, but I did manage to build a
						simple Android app with it. It was a bottle flipping game, nothing
						complicated, just a picture of a bottle that spun around when you
						clicked it and it landed on a random direction. But as simple as
						that app was, It made me realise the power of Software Engineering
						through code and all the posibilities that it offered simply
						fascinated me! As I dwelled deeper into programming I switched to
						learning more about Web Development in general as I was struggling
						to learn Java given that it was quite overwhelming for a beginner
						like me at the time. Naturally I switched to learning Javascript and
						some frameworks that go with it like React, Next, Express and Node.
						I didn&apos;t however take my learning seriously until I graduated
						from High School in 2019 and ever since then I&apos;ve been slowly
						but surely developing my skills as a self-taugh Web Developer.
						Please feel free to check my portfolio site for a display of my
						skills as a Developer. Otherwise you can check my GitHub page as
						well. If you wished to connect with me feel free to send me an email
						@ersinahmeddev@gmail.com or message me on LinkedIn.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}
