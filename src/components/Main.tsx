import React, { useState, useEffect } from 'react';
import { Job } from '../Types.ts';
import SearchBar from './SearchBar.tsx';
import Card from './Card.tsx';

function Main({ darkMode, onDarkModeChange }: { darkMode: boolean; onDarkModeChange: () => void }) {
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
		<main className="flex flex-col items-center justify-center">
			<SearchBar onSubmit={handleSubmitEvent} formData={formData} setFormData={setFormData} />
			<div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-24">
				{jobs.map((job) => (
					<Card key={job.id} {...job} darkMode={darkMode} onDarkModeChange={onDarkModeChange} />
				))}
			</div>
		</main>
	);
}

export default Main;
