import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';

const Card = ({pdf}) => {
	const {slug, title, description, image, price} = pdf;
	const isFree = price === 0;
	const router = useRouter();

	return (
		<div onClick={() => router.push(`/tejidos/${slug}`)} className="flex flex-col items-center w-full sm:w-80 gap-6 cursor-pointer">
			<div className="w-full h-auto rounded-lg overflow-hidden hover:opacity-50">
				<Image src={image} layout="responsive" width="100%" height="100%" />
			</div>
			<div className="flex justify-between items-center w-full">
				<div>
					<h3 className="text-xl font-bold">{title}</h3>
					<p className="text-lg">{description}</p>
				</div>
				<div className="flex flex-col items-center">
					<h3 className={`text-xl text-green-800 font-bold ${isFree && 'line-through'}`}>{price}$</h3>
					<button className={`btn btn-sm btn-secondary ${isFree && 'btn-success'}`}>{isFree ? 'Gratis' : 'Comprar'}</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
