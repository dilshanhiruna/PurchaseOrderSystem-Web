import * as types from './actionTypes';
import firebase from 'firebase';

//definition of getSites function
const getSites = (sites) => ({
	type: types.GET_SITES,
	payload: sites,
});

//definition of addSite function
const addSite = () => ({
	type: types.ADD_SITE,
});

//definition of deleteSite function
const deleteSite = () => ({
	type: types.DELETE_SITE,
});

//definition of updateSite function
const updateSite = () => ({
	type: types.UPDATE_SITE,
});

//definition of getSite function
const getSite = (site) => ({
	type: types.GET_SITE,
	payload: site,
});

//Function to get all sites from the database
export const getSitesInitiate = () => {
	return function (dispatch) {
		firebase
			.firestore()
			.collection('Sites')
			.onSnapshot((querySnapshot) => {
				const site = [];
				querySnapshot.forEach((doc) => {
					site.push({ ...doc.data(), id: doc.id });
				});
				dispatch(getSites(site));
			});
	};
};

//Function to add onae site to the database
export const addSiteInitiate = (site) => {
	return function (dispatch) {
		//To insert data into Firestore collection
		firebase.firestore().collection('Sites').doc().set(site);
		dispatch(addSite());
	};
};

//Function to delete a site from the database
export const deleteSiteInitiate = (id) => {
	return function (dispatch) {
		firebase.firestore().collection('Sites').doc(id).delete();
		dispatch(deleteSite());
	};
};

//Function to updated a site from the database
export const updateSiteInitiate = (id, site) => {
	return function (dispatch) {
		firebase.firestore().collection('Sites').doc(id).update(site);
		dispatch(updateSite());
	};
};

//Function to get one site from the database
export const getSiteInitiate = (id) => {
	return function (dispatch) {
		firebase
			.firestore()
			.collection('Sites')
			.doc(id)
			.get()
			.then((site) => {
				dispatch(getSite({ ...site.data() }));
			})
			.catch((error) => console.log(error));
	};
};
