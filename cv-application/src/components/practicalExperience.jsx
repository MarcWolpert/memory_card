// PracticalExperience.jsx
import { useState } from 'react';

export function PracticalExperience({ onChange }) {
	const [forms, setForms] = useState({
		0: {
			companyName: '',
			positionTitle: '',
			responsibilities: '',
			dateFrom: '',
			dateTo: '',
		},
	});
	const [id, idCounter] = useState(1);

	const handleChange = (formId, e) => {
		setForms({ ...forms, [formId]: { ...forms[formId], [e.target.name]: e.target.value } });
	};

	const addNewForm = (newId) => {
		idCounter(id + 1);
		setForms({
			...forms,
			[newId]: {
				companyName: '',
				positionTitle: '',
				responsibilities: '',
				dateFrom: '',
				dateTo: '',
			},
		});
	};

	const deleteForm = (deleteId) => {
		if (Object.keys(forms).length > 1) {
			let updatedForms = { ...forms };
			delete updatedForms[deleteId];
			setForms(updatedForms);
			onChange({ ...updatedForms });
		}
	};

	return (
		<div className='workExperienceContainer'>
			{Object.entries(forms).map(([key, form]) => (
				<form key={key} className='formInput divided'>
					<h2 className='experienceCounter'>
						Work Experience #{Object.keys(forms).indexOf(key) + 1}:
					</h2>
					<button
						className='deleteButton interactiveButton'
						onClick={(e) => {
							e.preventDefault();
							deleteForm(key);
						}}
					>
						X
					</button>
					<label htmlFor={`companyName-${key}`}>Company Name:</label>
					<input
						className='inputBox'
						type='text'
						name='companyName'
						id={`companyName-${key}`}
						value={form.companyName}
						onChange={(e) => handleChange(key, e)}
						maxLength={70}
						placeholder='Google'
					/>
					<label htmlFor={`positionTitle-${key}`}>Position Title:</label>
					<input
						className='inputBox'
						type='text'
						name='positionTitle'
						id={`positionTitle-${key}`}
						value={form.positionTitle}
						onChange={(e) => handleChange(key, e)}
						maxLength={70}
						placeholder='Data Scientist'
					/>
					<label htmlFor={`responsibilities-${key}`}>Description:</label>
					<textarea
						className='inputBox'
						name='responsibilities'
						id={`responsibilities-${key}`}
						value={form.responsibilities}
						placeholder='Analyzed Data'
						onChange={(e) => handleChange(key, e)}
					></textarea>
					<label htmlFor={`dateFrom-${key}`}>Date Worked From:</label>
					<input
						className='inputBox'
						type='date'
						name='dateFrom'
						id={`dateFrom-${key}`}
						value={form.dateFrom}
						onChange={(e) => handleChange(key, e)}
					/>
					<label htmlFor={`dateTo-${key}`}>Date Worked Until:</label>
					<input
						className='inputBox'
						type='date'
						name='dateTo'
						id={`dateTo-${key}`}
						value={form.dateTo}
						onChange={(e) => handleChange(key, e)}
					/>

					<input
						className='interactiveButton'
						type='submit'
						value='Submit'
						onSubmit={(e) => {
							e.preventDefault();
							onChange({ ...forms });
						}}
						onClick={(e) => {
							e.preventDefault();
							onChange({ ...forms });
						}}
					/>
				</form>
			))}
			<button
				className='addMore interactiveButton'
				id='addMoreID'
				type='button'
				onClick={(e) => {
					e.preventDefault();
					addNewForm(id);
				}}
			>
				{'+'}
			</button>
		</div>
	);
}
