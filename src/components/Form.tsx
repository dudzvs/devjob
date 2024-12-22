import { useState } from 'react';
import { InputProps } from '../Types.ts';
import Button from './Button.tsx';

function Form() {
	const [value, setValue] = useState('');

	return (
		<form className="flex w-full items-center justify-between p-4">
			<Input
				inputType="text"
				inputPlaceholder="Filter by title..."
				inputValue={value}
				onInputChange={(e) => setValue(e.target.value)}
				inputName="title"
				classes="sm:bg-icon-search bg-no-repeat"
			/>
			<Input
				inputType="text"
				inputPlaceholder="Filter by location..."
				inputValue={value}
				onInputChange={(e) => setValue(e.target.value)}
				inputName="location"
				classes="hidden sm:block bg-icon-location bg-no-repeat"
			/>

			<label
				htmlFor="fullTime"
				className="mr-4 hidden h-6 w-6 cursor-pointer rounded border-2 border-blue-thick p-3 sm:block"
			></label>
			<span className="hidden text-nowrap font-bold sm:block">Full Time Only</span>
			<Input
				inputType={'checkbox'}
				inputPlaceholder={''}
				inputValue={''}
				onInputChange={(e) => setValue(e.target.value)}
				inputName={'isFullTime'}
				classes={'hidden'}
				inputId="fullTime"
			/>

			<div className="flex items-center gap-6">
				<Button typeButton="button" classes="w-[20px] h-[20px] bg-icon-filter bg-cover sm:hidden" />
				<Button
					typeButton="submit"
					classes="w-[48px] h-[48px] sm:w-[123px] sm:ml-4 bg-blue-thick bg-icon-search-white sm:bg-none rounded"
					children="Search"
				/>
			</div>
		</form>
	);
}

function Input({
	inputType,
	inputPlaceholder,
	inputValue,
	onInputChange,
	inputName,
	classes,
	inputId,
}: InputProps) {
	return (
		<input
			className={`${classes} w-full bg-transparent pl-2 outline-none sm:pl-10`}
			type={inputType}
			placeholder={inputPlaceholder}
			value={inputValue}
			onChange={onInputChange}
			name={inputName}
			id={inputId}
		/>
	);
}

export default Form;
