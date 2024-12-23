import Form from './Form';

function SearchBar({ data, setData, handleSubmit }) {
	return (
		<div className="mt-[-35px] flex h-20 w-10/12 rounded bg-gray-light shadow-2xl">
			<Form onSubmit={handleSubmit} formData={data} setFormData={setData} />
		</div>
	);
}

export default SearchBar;
