import Form from './Form';
import { FormProps } from '../Types.ts';

function SearchBar({ formData, setFormData, onSubmit }: FormProps) {
	return (
		<div className="mb-16 mt-[-35px] flex h-20 w-10/12 rounded bg-gray-light shadow-2xl dark:bg-blue-veryDark lg:w-3/5">
			<Form onSubmit={onSubmit} formData={formData} setFormData={setFormData} />
		</div>
	);
}

export default SearchBar;
