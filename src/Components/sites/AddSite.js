import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddSite(props) {
	//initalizing constants
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [budget, setBudget] = useState('');
	const [limit, setLimit] = useState('');

	//calling add function to add site data
	function addSite(newSite) {
		props.addSiteDB(newSite);
	}

	//rendering html
	return (
		<form style={{ width: '50%' }}>
			<div className="form-row">
				<div className="form-group">
					<label>Site Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						aria-describedby="emailHelp"
						placeholder="Enter the site name"
						onChange={(e) => {
							setName(e.target.value);
						}}
					></input>
				</div>
				<div className="form-group">
					<label>Location</label>
					<input
						type="text"
						className="form-control"
						id="location"
						placeholder="Enter the site address"
						onChange={(e) => {
							setLocation(e.target.value);
						}}
					></input>
				</div>
				<div className="form-group">
					<label>Budget</label>
					<input
						type="number"
						className="form-control"
						id="budget"
						placeholder="Enter the site budget"
						onChange={(e) => {
							setBudget(e.target.value);
						}}
					></input>
				</div>
				<div className="form-group">
					<label>Auto Approval Limit</label>
					<input
						type="number"
						className="form-control"
						id="limit"
						placeholder="Enter the site auto approval limit for oders"
						onChange={(e) => {
							setLimit(e.target.value);
						}}
					></input>
				</div>
			</div>
			<br />
			<button
				onClick={() => addSite({ name, location, budget, limit, id: uuidv4() })}
				className="btn btn-primary"
			>
				Submit
			</button>
		</form>
	);
}
