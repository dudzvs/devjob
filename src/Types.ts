import React from 'react';

export type InputProps = {
	inputId?: string;
	inputType: string;
	inputPlaceholder: string;
	inputValue: string;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputName: string;
	classes: string;
};

export type ButtonProps = {
	typeButton: 'submit' | 'button';
	classes: string;
	children?: string;
};
