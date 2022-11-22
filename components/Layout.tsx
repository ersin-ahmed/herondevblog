import Header from './Header';
import Footer from './Footer';
import Script from 'next/script';

export default function Layout({ children }) {
	return (
		<>
			<Script
				async
				src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9115882332062777'
				crossOrigin='anonymous'
			></Script>
			<Header />
			<>{children}</>
		</>
	);
}
