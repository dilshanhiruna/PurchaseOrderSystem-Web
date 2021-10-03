import { useParams, useLocation } from 'react-router-dom';
import { React } from 'react-dom';

import { useState, useEffect } from 'react';
import firebase from '../../base';
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router-dom';

export default function EditSite(props) {
	//getting data using props
	const { handle } = useParams();
	const loc = useLocation();
	const { fromViewComponent } = loc.state;
	const { data } = loc.state;

	//
	const ref = firebase.firestore().collection('sites');
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [budget, setBudget] = useState('');
	const [limit, setLimit] = useState('');

	const id = data.id;

	//edit function
	//edit function
	function editSite(updatedSite) {
		// alert(id);
		// alert(name);
		// alert(location);
		// alert(budget);
		// alert(limit);

		console.log('id ' + id);
		console.log('name ' + name);
		console.log('location ' + location);
		console.log('budget ' + budget);
		console.log('limit ' + limit);

		ref
			.doc(updatedSite.id)
			.update(updatedSite)
			.then((res) => {
				alert('success');
				<Redirect to="/sites" />;
			})
			.catch((err) => {
				console.log(err);
			});
	}
	// console.log(data);
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
								onChange={(e) => setName(e.target.value)}
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
								onChange={(e) => setLocation(e.target.value)}
							></input>
						</div>
						<div className="form-group">
							<label>Budget</label>
							<input
								type="text"
								className="form-control"
								id="budget"
								defaultValue={data.budget}
								placeholder="Enter the site budget"
								onChange={(e) => setBudget(e.target.value)}
							></input>
						</div>
						<div className="form-group">
							<label>Auto Approval Limit</label>
							<input
								type="text"
								className="form-control"
								id="limit"
								defaultValue={data.limit}
								placeholder="Enter the site auto approval limit for oders"
								onChange={(e) => setLimit(e.target.value)}
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
