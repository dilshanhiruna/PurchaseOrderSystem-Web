import React, { useState, useEffect } from 'react';
import firebase from '../../base';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function ViewSites(props) {
	const ref = firebase.firestore().collection('sites');
	const [sites, setSites] = useState([]);
	const [loading, setLoading] = useState(false);

	//The function to retreive sites data from the database
	function getSitesDB() {
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			setSites(items);
		});
	}

	useEffect(() => {
		try {
			// setLoading(true);
			// const returnVal = props.getSitesDB();
			// setSites(returnVal);
			// alert('done');
			// setLoading(false);
			getSitesDB();
		} catch (error) {}
	}, []);

	function deleteSite(site) {
		props.deleteSiteDB(site);
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
											<Link
												to={{
													pathname: '/sites/editSite',
													state: { fromViewComponent: true, data: site },
												}}
											>
												<button className="purchaseOrder_viewBtn">Edit</button>
											</Link>
											{/* <Link to="/editSite" params={{}}>
												<button className="purchaseOrder_viewBtn">Edit</button>
											</Link> */}

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
