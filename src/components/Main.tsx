import React, { useState } from 'react';
import SearchBar from './SearchBar.tsx';

function Main() {
	const [formData, setFormData] = useState({
		title: '',
		location: '',
		isFullTime: false,
	});

	const handelSubmitEvent = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<main className="flex justify-center">
			<SearchBar handleSubmit={handelSubmitEvent} data={formData} setData={setFormData} />
		</main>
	);
}

export default Main;
