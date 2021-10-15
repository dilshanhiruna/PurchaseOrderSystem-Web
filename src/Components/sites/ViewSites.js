import React, { useState, useEffect } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { getSitesDB } from './SiteDB';
import firebase from '../../base';

export default function ViewSites(props) {
	const ref = firebase.firestore().collection('sites');

	//constants to store retreived site data
	// let sites = [];

	const [sites, setSites] = useState([]);
	const [loading, setLoading] = useState(false);

	//The function to call retreived data
	//If success, data is saved in sites constant and true is returned
	// function getSites() {

	// }

	//useEffect hook to call getSites function at the initilization of the component
	useEffect(() => {
		try {
			const items = [];

			ref.onSnapshot((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					items.push(doc.data());
				});
				setSites(items);
				console.log(sites);
			});
		} catch (error) {}
	}, []);

	//calling deleteSiteDB function to delete data
	//returns true if success
	function deleteSite(site) {
		const isSuccess = props.deleteSiteDB(site);

		if (isSuccess === true) {
			return true;
		} else {
			return false;
		}
	}
	// Show a h1 tag saying loading if loading is true
	if (loading) {
		return <h1>Loading...</h1>;
	}

	//Render html to display a table of retrieved site data
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
