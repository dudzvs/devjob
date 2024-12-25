import React, { useState, useEffect } from 'react';
import { Job } from '../Types.ts';
import SearchBar from './SearchBar.tsx';
import Card from './Card.tsx';

function Main({ darkMode, onDarkModeChange }: { darkMode: boolean; onDarkModeChange: () => void }) {
	const [jobs, setJobs] = useState<Job[]>([]);
	const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

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
			setFilteredJobs(jobData);
			console.log(jobData);
		} catch (e) {
			console.log(e);
		}
	}

	const handleSubmitEvent = (e: React.FormEvent) => {
		e.preventDefault();
		const filteredJobs: Job[] = jobs.filter((job) => {
			const matchTitle = job.position.toLowerCase().includes(formData.title.toLowerCase());
			const matchLocation = job.location.toLowerCase().includes(formData.location.toLowerCase());
			const matchFullTime = formData.isFullTime
				? job.contract === 'Full Time'
				: job.contract === 'Part Time';
			return matchTitle && matchLocation && matchFullTime;
		});

		setFilteredJobs(filteredJobs);
	};

	return (
		<main className="flex flex-col items-center justify-center pb-10 dark:bg-blue-veryDark">
			<SearchBar onSubmit={handleSubmitEvent} formData={formData} setFormData={setFormData} />
			<div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-24">
				{filteredJobs.map((job) => (
					<Card key={job.id} {...job} darkMode={darkMode} onDarkModeChange={onDarkModeChange} />
				))}
			</div>
		</main>
	);
}

export default Main;
