import { useEffect, useState } from 'react';
import { Job } from '../Types.ts';
import Button from './Button.tsx';
import Header from './Header.tsx';

function Card({
	company,
	logo,
	logoBackground,
	position,
	postedAt,
	contract,
	location,
	website,
	apply,
	description,
	requirements,
	role,
	darkMode,
	onDarkModeChange,
}: Job & { darkMode: boolean; onDarkModeChange: () => void }) {
	const [cardOpen, setCardOpen] = useState(false);

	useEffect(() => {
		if (cardOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		// Cleanup
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [cardOpen]);

	return (
		<>
			<div
				onClick={() => setCardOpen(!cardOpen)}
				className="relative flex cursor-pointer flex-col gap-4 rounded p-6 pl-8 pr-8"
			>
				<div
					className="absolute top-[-20px] flex h-12 w-12 items-center justify-center rounded"
					style={{ backgroundColor: logoBackground }}
				>
					<img src={logo} alt={`Logo ${company}`} />
				</div>
				<div className="mt-6 flex items-center gap-3 text-gray-dark">
					<span>{postedAt}</span>
					<span className="h-[1px] w-[1px] rounded-full bg-gray-dark p-0.5"></span>
					<span>{contract}</span>
				</div>
				<h4 className="font-bold">{position}</h4>
				<p className="text-gray-dark">{company}</p>
				<p className="mt-6 font-bold text-blue-thick">{location}</p>
			</div>

			{cardOpen && (
				<div className="fixed left-0 top-0 z-50 h-screen w-screen overflow-y-auto bg-pureWhite">
					<Header darkMode={darkMode} onDarkModeChange={onDarkModeChange} />
					<CardDetails
						company={company}
						logo={logo}
						logoBackground={logoBackground}
						position={position}
						postedAt={postedAt}
						contract={contract}
						location={location}
						website={website}
						apply={apply}
						description={description}
						requirements={requirements}
						role={role}
					/>
				</div>
			)}
		</>
	);
}

function CardDetails({
	company,
	logo,
	logoBackground,
	position,
	postedAt,
	contract,
	location,
	website,
	apply,
	description,
	requirements,
	role,
}: Job) {
	return (
		<div className="flex w-full flex-col items-center p-8">
			<div className="relative mb-20 mt-[-57px] flex w-full flex-col items-center rounded bg-gray-light p-8 md:w-9/12 md:flex-row md:justify-between">
				<div
					className="absolute top-[-20px] flex h-12 w-12 items-center justify-center rounded md:left-0 md:top-0 md:h-full md:w-[140px]"
					style={{ backgroundColor: logoBackground }}
				>
					<img className="md:w-full md:p-6" src={logo} alt={`Logo ${company}`} />
				</div>
				<div className="flex flex-col items-center md:ml-40 md:items-start">
					<h4 className="mb-3.5 mt-11 font-bold md:mb-0 md:mt-2">{company}</h4>
					<span className="text-gray-dark">{website}</span>
				</div>
				<button className="mt-11 font-bold text-blue-thick md:mr-8 md:mt-0">
					Company Site <a href={apply}></a>
				</button>
			</div>

			<div className="text-base text-gray-dark md:pl-44 md:pr-44">
				<div className="flex items-center gap-3 text-gray-dark">
					<span>{postedAt}</span>
					<span className="h-[1px] w-[1px] rounded-full bg-gray-dark p-0.5"></span>
					<span>{contract}</span>
				</div>
				<div className="md:flex md:items-start md:justify-between">
					<div>
						<h4 className="text-xl font-bold text-blue-midnight">{position}</h4>
						<p className="mb-8 mt-[12px] text-sm font-bold text-blue-thick">{location}</p>
					</div>
					<Button
						typeButton="button"
						classes="bg-blue-thick font-bold text-pureWhite p-2.5 rounded w-full md:w-[200px] mb-8 md:mb-0"
						children="Apply Now"
					/>
				</div>

				<p className="mb-8">{description}</p>
				<h5 className="mb-4 self-start text-xl font-bold text-blue-midnight">Requirements</h5>
				<p className="mb-8">{requirements.content}</p>
				<ul className="mb-8 ml-8 flex list-disc flex-col gap-3">
					{requirements.items.map((item) => (
						<li className="pl-2">{item}</li>
					))}
				</ul>
				<h5 className="mb-4 self-start text-xl font-bold text-blue-midnight">What You Will Do</h5>
				<p className="mb-8">{role.content}</p>
				<ol className="ml-8 flex list-decimal flex-col gap-3 marker:font-bold marker:text-blue-thick">
					{role.items.map((item) => (
						<li className="pl-2">{item}</li>
					))}
				</ol>

				<div className="md:mt-44 md:flex md:items-center md:justify-between">
					<div>
						<span className="hidden text-xl font-bold text-blue-midnight md:block">
							{position}
						</span>
						<span className="hidden md:block">So Digital Inc.</span>
					</div>
					<Button
						typeButton="button"
						classes="bg-blue-thick font-bold text-pureWhite p-2.5 rounded w-full md:w-[200px] mt-8 md:mt-0"
						children="Apply Now"
					/>
				</div>
			</div>
		</div>
	);
}

export default Card;
