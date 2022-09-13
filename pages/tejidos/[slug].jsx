import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {Navbar, BackButton} from '@components/index';
// import modelo from '../../public/modelo.pdf';

// Firebase
import {getPdf, getPdfs} from '@services/firebase';

const PDF = ({data}) => {
	const router = useRouter();
	const [pdf, setPdf] = useState(data);
	const [isLoading, setIsLoading] = useState(false);

	// const fetchPdf = async () => {
	// 	setIsLoading(true);
	// 	const data = await getPdf(slug);
	// 	setPdf(data);
	// 	setIsLoading(false);
	// };

	// useEffect(() => {
	// 	fetchPdf();
	// }, []);

	console.log(pdf);

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

export const getStaticPaths = async () => {
	const pdfs = await getPdfs();
	const paths = pdfs.map((pdf) => {
		return {
			params: {
				slug: pdf.slug,
			},
		};
	});

	return {
		paths,
		revalidate: 60,
		fallback: 'blocking',
	};
};

export const getStaticProps = async ({params}) => {
	const {slug} = params;
	const data = await getPdf(slug);
	return {
		props: {
			data: JSON.parse(JSON.stringify(data)),
		},
		revalidate: 60, // This will re-generate the page if there is a new request each 60 seconds
	};
};

export default PDF;
