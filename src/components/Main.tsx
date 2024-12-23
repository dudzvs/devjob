import React, { useState, useEffect } from 'react';
import { Job } from '../Types.ts';
import SearchBar from './SearchBar.tsx';

function Main() {
	const [jobs, setJobs] = useState<Job[]>([]);

	const [formData, setFormData] = useState({
		title: '',
		location: '',
		isFullTime: false,
	});

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		try {
			const response = await fetch('/FakeData/data.json');
			const jobData: Job[] = await response.json();
			setJobs(jobData);
			console.log(jobData);
		} catch (e) {
			console.log(e);
		}
	}

	const handleSubmitEvent = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData.title, formData.location, formData.isFullTime);
	};

	return (
		<main className="flex justify-center">
			<SearchBar onSubmit={handleSubmitEvent} formData={formData} setFormData={setFormData} />
		</main>
	);
}

export default Main;
