import * as types from './actionTypes';
import app from '../base';
import firebase from 'firebase';

const getSites = (sites) => ({
	type: types.GET_SITES,
	payload: sites,
});

const addSite = () => ({
	type: types.ADD_SITE,
});

const deleteSite = () => ({
	type: types.DELETE_SITE,
});

const updateSite = () => ({
	type: types.UPDATE_SITE,
});

const getSite = (site) => ({
	type: types.GET_SITE,
	payload: site,
});

//To fetch all the Sites from Firestore database
export const getSitesInitiate = () => {
	return function (dispatch) {
		firebase
			.firestore()
			.collection('sites')
			.onSnapshot((querySnapshot) => {
				const site = [];
				querySnapshot.forEach((doc) => {
					site.push({ ...doc.data(), id: doc.id });
				});
				dispatch(getSites(site));
				// console.log(Sites);
			});
	};
};

//Define the action to initiate adding Site
export const addSiteInitiate = (site) => {
	return function (dispatch) {
		//To insert data into Firestore collection
		firebase.firestore().collection('sites').doc().set(site);
		dispatch(addSite());
	};
};

export const deleteSiteInitiate = (id) => {
	return function (dispatch) {
		firebase.firestore().collection('sites').doc(id).delete();
		dispatch(deleteSite());
	};
};

export const updateSiteInitiate = (id, site) => {
	return function (dispatch) {
		firebase.firestore().collection('sites').doc(id).update(site);
		dispatch(updateSite());
	};
};

export const getSiteInitiate = (id) => {
	return function (dispatch) {
		firebase
			.firestore()
			.collection('sites')
			.doc(id)
			.get()
			.then((site) => {
				dispatch(getSite({ ...site.data() }));
			})
			.catch((error) => console.log(error));
	};
};
