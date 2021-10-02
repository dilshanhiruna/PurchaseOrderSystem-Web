import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import firebase from '../../base';

export default function ViewSites(props) {
	// const sites = props.sites;
	// const loading = props.loading;

	const ref = firebase.firestore().collection('sites');
	const [sites, setSites] = useState([]);
	const [loading, setLoading] = useState(false);

	//The function to retreive sites data from the database
	function getSites() {
		setLoading(true);
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			setSites(items);
			setLoading(false);
		});
	}

	useEffect(() => {
		getSites();
	}, []);

	//delete function
	function deleteSite(site) {
		ref
			.doc(site.id)
			.delete()
			.catch((err) => {
				console.log(err);
			});
	}

	//edit function
	function editSite(updatedSite) {
		ref
			.doc(updatedSite.id)
			.update(updatedSite)
			.catch((err) => {
				console.log(err);
			});
	}

	// Show a h1 tag saying loading if loading is true
	if (loading) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			<div>
				<div className="header-box">
					<div>Sites</div>
				</div>

				<div className="content-box-list">
					<table>
						<thead>
							<tr>
								<th>Site Name</th>
								<th>Location</th>
								<th>Budget</th>
								<th>Auto Approval Limit</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{sites &&
								sites.map((site) => (
									<tr>
										<td> {site.name}</td>
										<td> {site.location}</td>
										<td> {site.budget}</td>
										<td> {site.limit}</td>
										<td>
											<Link to="/editSite" params={{ testvalue: 'hello' }}>
												<button className="purchaseOrder_viewBtn">Edit</button>
											</Link>
											<button
												onClick={() => deleteSite(site)}
												className="purchaseOrder_viewBtn"
											>
												Delete
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
