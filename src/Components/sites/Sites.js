import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ViewSites from './ViewSites';
import AddSite from './AddSite';
import React, { useState, useEffect } from 'react';
import firebase from '../../base';
import { v4 as uuidv4 } from 'uuid';
import EditSite from './EditSite';
const ref = firebase.firestore().collection('sites');

export default function Sites() {
	const [returnVal, setReturnVal] = useState('test');

	//Add sites to DB
	const addSiteDB = (newSite) => {
		ref
			.doc(newSite.id)
			.set(newSite)
			.then((res) => {
				alert('success');
			})
			.catch((err) => {
				alert('error');
				console.log(err);
			});
	};

	//Get sites from DB
	function getSitesDB() {
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			setReturnVal(items);
		});
		return returnVal;
	}

	//Delete sites from db
	const deleteSiteDB = (site) => {
		ref
			.doc(site.id)
			.delete()
			.then((res) => {
				alert('success');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//Edit Sites in db
	function editSiteDB(updatedSite) {
		ref
			.doc(updatedSite.id)
			.update(updatedSite)
			.then((res) => {
				alert('success');
			})
			.catch((err) => {
				console.log(err);
			});
	}

	//Rendering child components
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
								getSitesDB={getSitesDB}
								returnVal={returnVal}
								deleteSiteDB={deleteSiteDB}
							></ViewSites>
						</Route>
						<Route exact path="/sites/addSite">
							<AddSite addSiteDB={addSiteDB}></AddSite>;
						</Route>
						<Route exact path="/sites/editSite">
							<EditSite editSiteDB={editSiteDB}></EditSite>
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
}
