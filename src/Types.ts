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
