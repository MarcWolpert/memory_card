import { useState } from 'react';

export function BasicInformation({ onChange, name, email, phoneNumber }) {
	const [items, handleItem] = useState({ name, email, phoneNumber });
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
		<form className='formInput divided' id='personalInfo' action=''>
			<h2>Personal Details : </h2>
			<label htmlFor='name'>Name:</label>
			<input
				className='inputBox'
				type='text'
				name='name'
				id='nameInput'
				required
				maxLength={40}
				value={items.name}
				onChange={handleChange}
				placeholder='John Smith'
			/>
			<label htmlFor='email'>Email:</label>
			<input
				className='inputBox'
				type='email'
				name='email'
				id='emailInput'
				placeholder='b@domain.com'
				required
				value={items.email}
				onChange={handleChange}
				pattern='[a-z]{0,30}@[a-z]{0,30}.[a-z]{1,4}'
			/>
			<label htmlFor='phone'>Phone Number:</label>
			<input
				className='inputBox'
				type='tel'
				name='phoneNumber'
				id='phoneInput'
				minLength={10}
				maxLength={15}
				placeholder='5554446666'
				value={items.phoneNumber}
				onChange={handleChange}
				max={100000000000000}
			/>
			<input
				className='interactiveButton'
				type='submit'
				value='Submit'
				onSubmit={handleSubmit}
				onClick={handleSubmit}
			/>
		</form>
	);
}
