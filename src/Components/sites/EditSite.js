import { useLocation } from 'react-router-dom';
import { React } from 'react-dom';

import { useState } from 'react';

export default function EditSite(props) {
	//getting data using props
	const loc = useLocation();
	const { fromViewComponent } = loc.state;
	const { data } = loc.state;

	//assigning values to variables
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [budget, setBudget] = useState('');
	const [limit, setLimit] = useState('');
	const id = data.id;

	//calling function in parent component to edit site data
	function editSite(updatedSite) {
		alert('success');
		props.editSiteDB(updatedSite);
	}

	//rendering html
	return (
		<>
			{fromViewComponent ? (
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
								defaultValue={data.name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							></input>
						</div>
						<div className="form-group">
							<label>location</label>
							<input
								type="text"
								className="form-control"
								id="location"
								defaultValue={data.location}
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
								defaultValue={data.budget}
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
								defaultValue={data.limit}
								placeholder="Enter the site auto approval limit for oders"
								onChange={(e) => {
									setLimit(e.target.value);
								}}
							></input>
						</div>
					</div>
					<br />
					<button
						onClick={() => editSite({ name, location, budget, limit, id })}
						className="btn btn-primary"
					>
						Submit
					</button>
				</form>
			) : (
				<div>hey from other</div>
			)}
		</>
	);
}
