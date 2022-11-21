import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Script
				async
				onError={(e) => {
					console.error('Script failed to load', e);
				}}
				src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9115882332062777'
				crossOrigin='anonymous'
			/>
			<Component {...pageProps} />
			<Analytics />
		</Layout>
	);
}
