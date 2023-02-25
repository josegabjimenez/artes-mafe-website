import Head from 'next/head';
import {Navbar, Hero} from '../components/index';

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center bg-accent w-full">
			<Head>
				<title>Artes mafe</title>
				<meta name="description" content="Sitio oficial de Artes Mafe" />
				<link rel="icon" href="/artesmafe.ico" />
			</Head>

			<Navbar />

			<Hero />
		</div>
	);
}
