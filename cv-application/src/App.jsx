// App.jsx
import { useState } from 'react';
import './App.css';
import { BasicInformation } from './components/basicInformation';
import { EducationalInformation } from './components/educationalInformation';
import { PracticalExperience } from './components/practicalExperience';

function App() {
	const [basicInformation, setBasicInformation] = useState({});
	const [educationalInformation, setEducationalInformation] = useState({});
	const [practicalInformation, setPracticalInformation] = useState({});

	return (
		<div id='pageContainer'>
			<h1>CV Maker</h1>
			<div id='container'>
				<div id='inputContent'>
					<BasicInformation
						onChange={setBasicInformation}
						name={''}
						email={''}
						phoneNumber={''}
					/>
					<EducationalInformation
						onChange={setEducationalInformation}
						school={''}
						studyTitle={''}
						dateStudy={''}
					/>
					<PracticalExperience onChange={setPracticalInformation} />
				</div>
				<div id='displayContent'>
					<div className='basicContainer'>
						<p id='name'>{basicInformation.name}</p>
						<div id='contactInformation'>
							<p id='email'>{basicInformation.email}</p>
							<p id='phoneNumber'>
								{basicInformation.phoneNumber}
							</p>
						</div>
					</div>
					<h2 className='headers'>Education</h2>
					<div className='educationInformation'>
						<p>
							{educationalInformation.school} -{' '}
							{educationalInformation.studyTitle}{' '}
						</p>
						<p className='rightAlign'>
							{educationalInformation.dateStudy}
						</p>
					</div>
					<h2>Experience</h2>
					<div className='workInformation'>
						{Object.entries(practicalInformation).map(
							([infoKey, infoValues]) => {
								return (
									<div className='singleExperience'>
										{Object.entries(infoValues).map(
											([fieldKey, fieldValue]) => {
												switch (fieldKey) {
													case 'companyName':
														return (
															<p
																className='companyName'
																key={`${infoKey}-${fieldKey}`}
															>
																{fieldValue}
															</p>
														);
													case 'positionTitle':
														return (
															<p
																className='positionTitle'
																key={`${infoKey}-${fieldKey}`}
															>
																{fieldValue}
															</p>
														);
													case 'responsibilities':
														return (
															<p
																className='responsibilities'
																key={`${infoKey}-${fieldKey}`}
															>
																{fieldValue}
															</p>
														);
													case 'dateFrom':
														return (
															<p
																className='dateFrom'
																key={`${infoKey}-${fieldKey}`}
															>
																Worked from:{' '}
																{fieldValue} to
															</p>
														);
													case 'dateTo':
														return (
															<p
																className='dateTo'
																key={`${infoKey}-${fieldKey}`}
															>
																{fieldValue}
															</p>
														);
													default:
														break;
												}
											},
										)}
									</div>
								);
							},
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
