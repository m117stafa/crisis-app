interface InputProps {
	id: string;
	name: string;
	type: string;
	autoComplete?: string;
	required?: boolean;
	placeholder?: string;
	onClick?: () => void;
}

const Input = (props: InputProps) => {
	return (
		<input
			id={props.id}
			name={props.name}
			type={props.type}
			autoComplete={props.autoComplete}
			required={props.required}
			placeholder={props.placeholder}
			className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
		/>
	);
};

export const SearchInput = (props: InputProps) => {
	return (
		<>
			<input
				id={props.id}
				name={props.name}
				type={props.type}
				autoComplete={props.autoComplete}
				required={props.required}
				placeholder={props.placeholder}
				className="block w-full rounded-l-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			/>
			<button onClick={props.onClick} className="rounded-r-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
			</button>
		</>
	);
};

export default Input;
