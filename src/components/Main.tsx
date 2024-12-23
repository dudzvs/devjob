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
		console.log(formData.title, formData.location, formData.isFullTime);
	};

	return (
		<main className="flex justify-center">
			<SearchBar onSubmit={handelSubmitEvent} formData={formData} setFormData={setFormData} />
		</main>
	);
}

export default Main;
