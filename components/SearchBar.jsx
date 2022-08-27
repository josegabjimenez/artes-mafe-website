import React from 'react';

const SearchBar = () => {
	return (
		<div className="flex items-center justify-center p-4 gap-4">
			<label htmlFor="search-bar">Buscar tejidos</label>
			<input id="search-bar" type="text" placeholder="Buscar tejidos..." className="p-2" />

			<div className="flex flex-col items-center">
				<label htmlFor="crochet">Crochet</label>
				<input id="crochet" type="checkbox" />
			</div>

			<div className="flex flex-col items-center">
				<label htmlFor="dos-agujas">Dos agujas</label>
				<input id="crochet" type="checkbox" />
			</div>

			<div className="flex flex-col items-center">
				<label htmlFor="free">Gratis</label>
				<input id="free" type="checkbox" />
			</div>

			<div className="flex flex-col items-center">
				<label htmlFor="pay">De Pago</label>
				<input id="pay" type="checkbox" />
			</div>
		</div>
	);
};

export default SearchBar;
