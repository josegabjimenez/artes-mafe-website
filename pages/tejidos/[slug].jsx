import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {Navbar, BackButton} from '@components/index';
// import modelo from '../../public/modelo.pdf';

// Firebase
import {getPdf} from '@services/firebase';

const PDF = () => {
	const router = useRouter();
	const {slug} = router.query;
	const [pdf, setPdf] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const fetchPdf = async () => {
		setIsLoading(true);
		const data = await getPdf(slug);
		setPdf(data);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchPdf();
	}, []);

	// const isMobile = navigator.userAgentData.mobile;
	// console.log(isMobile);

	return (
		<div className="min-h-screen flex flex-col items-center bg-accent w-full">
			<Head>
				<title>Artes mafe | {pdf?.title}</title>
				<meta name="description" content={`Tedijo de artes mafe: ${pdf?.description}`} />
				<link rel="icon" href="/artesmafe.ico" />
			</Head>

			<Navbar />

			<section className=" flex justify-center items-center w-full h-screen p-0 md:px-16 mt-10 relative">
				{isLoading ? (
					<p className="text-8xl font-black">Cargando...</p>
				) : (
					<>
						<BackButton className="fixed top-40 left-5 lg:left-20" />
						<iframe src={pdf.freeUrl} type="application/pdf" width="842px" height="90%" />
					</>
				)}
			</section>
		</div>
	);
};

export default PDF;
