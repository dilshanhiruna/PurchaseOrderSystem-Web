import React, { useState, useEffect } from 'react';
import firebase from '../../base';

export default function ViewSites() {
	const [sites, setSites] = useState([]);
	const [loading, setLoading] = useState(false);

	const ref = firebase.firestore().collection('sites');
	console.log(ref);

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

	//Show a h1 tag saying loading if loading is true
	if (loading) {
		return <h1>Loading...</h1>;
	}

	//show table if data is avaialble
	return (
		<div>
			<div className="header-box">
				<div>Sites</div>
			</div>

			<div className="content-box-list" style={{ width: '80%' }}>
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
									<td key={site.name}> {site.name}</td>
									<td key={site.location}> {site.location}</td>
									<td key={site.budget}> {site.budget}</td>
									<td key={site.limit}> {site.limit}</td>
									<td>
										<button className="purchaseOrder_viewBtn">Edit</button>
										<button className="purchaseOrder_viewBtn">Delete</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
