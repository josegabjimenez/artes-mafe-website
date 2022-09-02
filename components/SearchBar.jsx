import React from 'react';

const SearchBar = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center md:p-4 gap-4">
			<div className="flex flex-col w-5/6">
				<label htmlFor="search-bar" className="font-bold mb-2">
					Buscar tejidos
				</label>
				<input
					id="search-bar"
					type="text"
					placeholder="Buscar tejidos..."
					className="p-2 border-2 border-primary rounded-md bg-accent text-primary placeholder:text-primary focus:outline-black"
				/>
			</div>

			<div className="form-control w-5/6">
				<label className="label">
					<span className="label-text font-bold">Tipo de tejido</span>
				</label>
				<select className="select select-bordered font-normal bg-primary text-white">
					<option selected>Todos</option>
					<option>Crochet</option>
					<option>Dos agujas</option>
				</select>
			</div>

			<div className="form-control w-5/6">
				<label className="label">
					<span className="label-text font-bold">Precio</span>
				</label>
				<select className="select select-bordered font-normal bg-primary text-white">
					<option selected>Todos</option>
					<option>Gratis</option>
					<option>Pago</option>
				</select>
			</div>
		</div>
	);
};

export default SearchBar;
