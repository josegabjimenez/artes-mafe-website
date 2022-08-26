import React from 'react';

const SearchBar = () => {
	return (
		<>
			<label htmlFor="search-bar">Buscar tejidos</label>
			<input id="search-bar" type="text" placeholder="Buscar tejidos..." />
		</>
	);
};

export default SearchBar;
