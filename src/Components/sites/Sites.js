import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ViewSites from './ViewSites';
import AddSite from './AddSite';
import React, { useState } from 'react';
import EditSite from './EditSite';

//Importing and initalizing reference to firebase db
import firebase from '../../base';
const ref = firebase.firestore().collection('sites');

//Parent of all add,view and edit site components
export default function Sites() {
	//react hook to return retrevied data to viewSites component
	// const [returnVal, setReturnVal] = useState('');

	//Function to Add sites to firebase DB
	// const addSiteDB = (newSite) => {
	// 	ref
	// 		.doc(newSite.id)
	// 		.set(newSite)
	// 		.then((res) => {
	// 			alert('success!');
	// 			return true;
	// 		})
	// 		.catch((err) => {
	// 			alert('error');
	// 			console.log(err);
	// 			return false;
	// 		});
	// };

	//Function to Get sites from firebase DB
	// function getSitesDB() {
	// 	ref.onSnapshot((querySnapshot) => {
	// 		const items = [];
	// 		querySnapshot.forEach((doc) => {
	// 			items.push(doc.data());
	// 		});
	// 		setReturnVal(items);
	// 	});
	// 	return returnVal;
	// }

	//Function to Delete sites from firebase db
	// const deleteSiteDB = (site) => {
	// 	ref
	// 		.doc(site.id)
	// 		.delete()
	// 		.then((res) => {
	// 			alert('success');
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	//Function to Edit Sites from firebase db
	// function editSiteDB(updatedSite) {
	// 	ref
	// 		.doc(updatedSite.id)
	// 		.update(updatedSite)
	// 		.then((res) => {
	// 			alert('success');
	// 			return true;
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 			return false;
	// 		});
	// }

	//Rendering child components (ViewSite, AddSite and EditSite)
	return (
		<>
			<Router>
				<div>
					<Link to="/sites">
						<button type="button">View Sites</button>
					</Link>
					<Link to="/sites/addSite">
						<button type="button">Add Site</button>
					</Link>

					<Switch>
						<Route exact path="/sites">
							<ViewSites
							// getSitesDB={getSitesDB}
							// returnVal={returnVal}
							// deleteSiteDB={deleteSiteDB}
							></ViewSites>
						</Route>
						<Route exact path="/sites/addSite">
							<AddSite></AddSite>;
						</Route>
						<Route exact path="/sites/editSite">
							<EditSite></EditSite>
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
}
