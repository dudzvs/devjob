import { Job } from '../Types.ts';

function Card({
	id,
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
		<div className="relative flex cursor-pointer flex-col gap-4 rounded p-6 pl-8 pr-8">
			<div
				className="absolute top-[-20px] flex h-12 w-12 items-center justify-center rounded"
				style={{ backgroundColor: logoBackground }}
			>
				<img src={logo} alt={`Logo ${company}`} />
			</div>
			<div className="mt-6 flex items-center gap-3 text-gray-dark">
				<span>{postedAt}</span>
				<span className="h-1 w-1 rounded-full bg-gray-dark p-1"></span>
				<span>{contract}</span>
			</div>
			<h4 className="font-bold">{position}</h4>
			<p className="text-gray-dark">{company}</p>
			<p className="mt-6 font-bold text-blue-thick">{location}</p>
		</div>
	);
}

function CardDetails() {}

export default Card;
