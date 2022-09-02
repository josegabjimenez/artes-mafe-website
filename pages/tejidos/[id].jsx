import React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {Navbar, BackButton} from '@components/index';
// import modelo from '../../public/modelo.pdf';

const PDF = () => {
	const router = useRouter();
	const {id} = router.query;

	return (
		<div className="min-h-screen flex flex-col items-center bg-accent w-full">
			<Head>
				<title>Artes mafe | Tejidos</title>
				<meta name="description" content="Sitio oficial de Artes Mafe" />
				<link rel="icon" href="/artesmafe.ico" />
			</Head>

			<Navbar />
			<section className=" flex justify-center items-center w-full h-screen p-0 md:px-16 mt-10 relative">
				<BackButton className="fixed top-40 left-5 lg:left-20" />
				<embed src="https://drive.google.com/file/d/1CPztuI6F1xV69EU1-MlzReT9319Jmqo4/preview" type="application/pdf" width="842px" height="90%" />
			</section>
		</div>
	);
};

export default PDF;
