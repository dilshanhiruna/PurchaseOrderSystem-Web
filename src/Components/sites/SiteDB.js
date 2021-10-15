// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import ViewSites from './ViewSites';
// import AddSite from './AddSite';
// import React, { useState } from 'react';
// import EditSite from './EditSite';

//Importing and initalizing reference to firebase db
import firebase from '../../base';
const ref = firebase.firestore().collection('sites');

//Function to Add sites to firebase DB
export function addSiteDB(newSite) {
	ref
		.doc(newSite.id)
		.set(newSite)
		.then((res) => {
			alert('success!');
			return true;
		})
		.catch((err) => {
			alert('error');
			console.log(err);
			return false;
		});
}

//Function to Get sites from firebase DB
export function getSitesDB() {
	const items = [];

	ref.onSnapshot((querySnapshot) => {
		// const items = [];
		querySnapshot.forEach((doc) => {
			items.push(doc.data());
		});
	});
	console.log(items);

	return items;
}

//Function to Delete sites from firebase db
export function deleteSiteDB(site) {
	ref
		.doc(site.id)
		.delete()
		.then((res) => {
			alert('success');
		})
		.catch((err) => {
			console.log(err);
		});
}

//Function to Edit Sites from firebase db
export function editSiteDB(updatedSite) {
	ref
		.doc(updatedSite.id)
		.update(updatedSite)
		.then((res) => {
			alert('success');
			return true;
		})
		.catch((err) => {
			console.log(err);
			return false;
		});
}
