import React from 'react';
import {useRouter} from 'next/router';

const BackButton = ({className}) => {
	const router = useRouter();

	return (
		<button onClick={() => router.back()} className={`btn btn-info ${className}`}>
			Volver
		</button>
	);
};

export default BackButton;
