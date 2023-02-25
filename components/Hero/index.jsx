import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';

const Hero = () => {
	const router = useRouter();

	return (
		<section className="flex items-center justify-between w-10/12 h-screen pt-[64px]">
			<div className="w-full lg:w-1/2 text-left">
				<h1 className="my-auto text-5xl md:text-7xl xl:text-8xl font-black">Artes Mafe</h1>
				<p className="mt-6">
					Descubre nuestra amplia colección de patrones de tejido para crear prendas únicas y originales con instrucciones detalladas en formato PDF.
				</p>
				<button className="btn btn-outline btn-secondary mt-6" onClick={() => router.push('/tejidos')}>
					Ver Tejidos
				</button>
			</div>
			<div className="hidden lg:block w-1/3 h-1/2 relative">
				<Image src="/images/hero_image.svg" alt="Wool ball image" layout="fill" objectPosition="right" />
			</div>
		</section>
	);
};

export default Hero;
