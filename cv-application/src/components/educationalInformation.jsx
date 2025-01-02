import { useState } from 'react';
export function EducationalInformation({ onChange, school, studyTitle, dateStudy }) {
	const [items, handleItem] = useState({ school, studyTitle, dateStudy });
	const handleChange = (e) => {
		handleItem({
			...items,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		onChange(items);
	};
	return (
		<form className='formInput divided' action=''>
			<h2 className='subheader'>Education Information: </h2>
			<label htmlFor='school'>School:</label>
			<input
				type='text'
				className='inputBox'
				name='school'
				id='schoolInput'
				value={items.school}
				onChange={handleChange}
				maxLength={70}
				placeholder='UCLA'
			/>
			<label htmlFor='studyTitle'>Area of Study:</label>
			<input
				placeholder='Computer Science'
				className='inputBox'
				name='studyTitle'
				id='studyTitleInput'
				type='text'
				value={items.studyTitle}
				onChange={handleChange}
				maxLength={40}
			/>
			<label htmlFor='dateStudy'>Date of Study:</label>
			<input
				type='number'
				className='inputBox'
				name='dateStudy'
				id='dateStudyInput'
				value={items.dateStudy}
				onChange={handleChange}
				min={1900}
				max={2099}
			/>
			<input
				tabIndex={'0'}
				className='interactiveButton'
				type='submit'
				value='Submit'
				onSubmit={handleSubmit}
				onClick={handleSubmit}
			/>
		</form>
	);
}
