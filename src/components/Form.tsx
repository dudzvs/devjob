import React, { useState } from 'react';
import { InputProps, ModalProps } from '../Types.ts';
import { FormProps } from '../Types.ts';
import Button from './Button.tsx';

function Form({ formData, setFormData, onSubmit }: FormProps) {
	const [modalOpen, setModalOpen] = useState(false);

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, type, value, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		});
	};

	return (
		<form onSubmit={onSubmit} className="flex w-full items-center justify-between p-4">
			<Input
				inputType="text"
				inputPlaceholder="Filter by title..."
				inputValue={formData.title}
				onInputChange={handleChange}
				inputName="title"
				classes="sm:bg-icon-search bg-no-repeat"
			/>
			<Input
				inputType="text"
				inputPlaceholder="Filter by location..."
				inputValue={formData.location}
				onInputChange={handleChange}
				inputName="location"
				classes="hidden sm:block bg-icon-location bg-no-repeat"
			/>
			<Input
				inputType={'checkbox'}
				inputPlaceholder={''}
				inputValue={formData.isFullTime}
				onInputChange={handleChange}
				inputName={'isFullTime'}
				classes={'hidden peer'}
				inputId="fullTime"
			/>
			<label
				htmlFor="fullTime"
				className="mr-4 hidden h-6 w-6 cursor-pointer rounded border-2 border-blue-thick bg-center bg-no-repeat p-3 peer-checked:bg-blue-thick peer-checked:bg-icon-check sm:block"
			></label>
			<span className="hidden text-nowrap font-bold sm:block">Full Time Only</span>

			<div className="flex items-center gap-6">
				<Button
					onSmash={handleModalOpen}
					typeButton="button"
					classes="w-[20px] h-[20px] bg-icon-filter bg-cover sm:hidden"
				/>
				<Button
					typeButton="submit"
					classes="w-[48px] h-[48px] sm:w-[123px] sm:ml-4 bg-blue-thick bg-icon-search-white sm:bg-none rounded"
				>
					<span className="hidden font-bold text-pureWhite sm:block">Search</span>
				</Button>
			</div>

			{modalOpen && (
				<>
					<div
						className="fixed inset-0 bg-blue-midnight opacity-50"
						onClick={handleModalClose}
					></div>

					<Modal
						handleChange={handleChange}
						location={formData.location}
						isFullTime={formData.isFullTime}
					/>
				</>
			)}
		</form>
	);
}

function Modal({ handleChange, location, isFullTime }: ModalProps) {
	return (
		<div className="absolute left-1/2 top-1/2 flex w-[327px] -translate-x-1/2 -translate-y-1/2 transform flex-col gap-10 rounded bg-gray-light p-8">
			<Input
				inputType="text"
				inputPlaceholder="Filter By Location..."
				inputValue={location}
				onInputChange={handleChange}
				inputName="location"
				classes="bg-icon-location bg-no-repeat pl-6"
			/>
			<div className="flex items-center gap-3">
				<Input
					inputType="checkbox"
					inputValue={isFullTime}
					onInputChange={handleChange}
					inputName="isFullTime"
					classes="peer hidden"
					inputId="fullTime"
				/>
				<label
					htmlFor="fullTime"
					className="h-5 w-5 cursor-pointer rounded border-2 border-blue-thick bg-center bg-no-repeat p-2 peer-checked:bg-blue-thick peer-checked:bg-icon-check"
				></label>
				<span className="text-nowrap font-bold">Full Time Only</span>
			</div>

			<Button
				typeButton="submit"
				classes="w-full bg-blue-thick font-bold text-pureWhite rounded p-2"
				children="Search"
			/>
		</div>
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
			{...(inputType === 'checkbox'
				? { checked: inputValue as boolean }
				: { value: inputValue as string })}
			onChange={onInputChange}
			name={inputName}
			id={inputId}
			autoComplete="off"
		/>
	);
}

export default Form;
