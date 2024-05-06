import { useState, useEffect } from "react";
export const SingleSetting = ({ name, value, callback, options }) => {
	const [val, setVal] = useState(value);

	useEffect(() => {
		callback(name, val);
	}, [val]);
	return (
		<>
			<label htmlFor={name} className="components-base-control__label">
				{name}
			</label>
			<select
				name="pagination"
				type="text"
				className="components-text-control__input is-next-40px-default-size"
				value={val}
				onChange={(e) => {
					setVal(e.target.value);
				}}
			>
				{options.map((option, index) => {
					return (
						<>
							<option key={index} value={option}>
								{option}
							</option>
						</>
					);
				})}
			</select>
		</>
	);
};
