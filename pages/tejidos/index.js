import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import {Navbar, SearchBar, Card} from '@components/index';

// Firebase
import {getPdfs} from '@services/firebase';

const pdfsMockup = [
	{
		slug: 'tejido-a-crochet',
		title: 'Tejido a crochet',
		description: 'Un tejido muy lindo',
		price: 3,
		image: 'https://www.tejidocrochet.com/wp-content/uploads/2011/03/puntosprincipales.jpg',
	},
	{
		slug: 'tejido-a-crochet-2',
		title: 'Tejido a crochet 2',
		description: 'Un tejido muy lindo',
		price: 0,
		image: 'https://www.tejidocrochet.com/wp-content/uploads/2011/03/puntosprincipales.jpg',
	},
	{
		slug: 'tejido-a-crochet-2',
		title: 'Tejido a crochet 2',
		description: 'Un tejido muy lindo',
		price: 0,
		image: 'https://www.tejidocrochet.com/wp-content/uploads/2011/03/puntosprincipales.jpg',
	},
	{
		slug: 'tejido-a-crochet-2',
		title: 'Tejido a crochet 2',
		description: 'Un tejido muy lindo',
		price: 0,
		image: 'https://www.tejidocrochet.com/wp-content/uploads/2011/03/puntosprincipales.jpg',
	},
	{
		slug: 'tejido-a-crochet-2',
		title: 'Tejido a crochet 2',
		description: 'Un tejido muy lindo',
		price: 0,
		image: 'https://www.tejidocrochet.com/wp-content/uploads/2011/03/puntosprincipales.jpg',
	},
	{
		slug: 'tejido-a-crochet-2',
		title: 'Tejido a crochet 2',
		description: 'Un tejido muy lindo',
		price: 0,
		image: 'https://www.tejidocrochet.com/wp-content/uploads/2011/03/puntosprincipales.jpg',
	},
	{
		slug: 'tejido-a-crochet-2',
		title: 'Tejido a crochet 2',
		description: 'Un tejido muy lindo',
		price: 0,
		image: 'https://www.tejidocrochet.com/wp-content/uploads/2011/03/puntosprincipales.jpg',
	},
	{
		slug: 'tejido-a-crochet-2',
		title: 'Tejido a crochet 2',
		description: 'Un tejido muy lindo',
		price: 0,
		image: 'https://www.tejidocrochet.com/wp-content/uploads/2011/03/puntosprincipales.jpg',
	},
	{
		slug: 'tejido-a-crochet-2',
		title: 'Tejido a crochet 2',
		description: 'Un tejido muy lindo',
		price: 0,
		image: 'https://www.tejidocrochet.com/wp-content/uploads/2011/03/puntosprincipales.jpg',
	},
	{
		slug: 'tejido-a-crochet-2',
		title: 'Tejido a crochet 2',
		description: 'Un tejido muy lindo',
		price: 0,
		image: 'https://www.tejidocrochet.com/wp-content/uploads/2011/03/puntosprincipales.jpg',
	},
];

const Tejidos = ({data}) => {
	const [pdfs, setPdfs] = useState(data);
	const [allPdfs, setAllPdfs] = useState(data);

	return (
		<div className="min-h-screen flex flex-col items-center bg-accent w-full">
			<Head>
				<title>Artes mafe | Tejidos</title>
				<meta name="description" content="Sitio oficial de Artes Mafe" />
				<link rel="icon" href="/artesmafe.ico" />
			</Head>

			<Navbar />

			<div className="mt-24 w-10/12">
				<SearchBar setPdfs={setPdfs} allPdfs={allPdfs} />
				<section className="flex flex-wrap justify-center gap-16 w-full px-16 my-16 h-auto">
					{pdfs.map((pdf) => (
						<Card key={pdf.slug} pdf={pdf} />
					))}
				</section>
			</div>
		</div>
	);
};

export const getStaticProps = async () => {
	try {
		const data = await getPdfs();

		return {
			props: {
				data,
			},
			revalidate: 60,
		};
	} catch (err) {
		console.error(err);
	}
};

export default Tejidos;
