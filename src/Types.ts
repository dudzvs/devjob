import React from 'react';

export type InputProps = {
	inputId?: string;
	inputType: string;
	inputPlaceholder?: string;
	inputValue: string | boolean;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputName: string;
	classes: string;
};

export type ButtonProps = {
	typeButton: 'submit' | 'button';
	classes: string;
	children?: React.ReactNode;
	onSmash?: () => void;
};

export type FormProps = {
	formData: {
		title: string;
		location: string;
		isFullTime: boolean;
	};
	setFormData: React.Dispatch<
		React.SetStateAction<{
			title: string;
			location: string;
			isFullTime: boolean;
		}>
	>;
	onSubmit?: (e: React.FormEvent) => void;
};

export type ModalProps = {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	location: string;
	isFullTime: boolean;
};

export type Job = {
	id?: number;
	company: string;
	logo: string;
	logoBackground: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
	website: string;
	apply: string;
	description: string;
	requirements: {
		content: string;
		items: string[];
	};
	role: {
		content: string;
		items: string[];
	};
};
