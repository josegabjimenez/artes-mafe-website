import '../styles/globals.css';

function MyApp({Component, pageProps}) {
	return (
		<div className="text-base md:text-lg lg:text-xl xl:text-2xl">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
