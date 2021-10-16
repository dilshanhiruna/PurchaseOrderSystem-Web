import {
	addSiteInitiate,
	getSitesInitiate,
	updateSiteInitiate,
} from '../sitesDB/actions';

//function returns true if data can be added to the db false if not
export function addSite(newSite) {
	const budgetType = typeof newSite.limit;
	const limitType = typeof newSite.limit;
	if (budgetType === 'number' && limitType === 'number') {
		addSiteInitiate(newSite);
		return true;
	} else {
		return false;
	}
}

//function returns true if data retrieve is success
export function getSite() {
	getSitesInitiate();
	return true;
}

//function returns true if data can be edited int the db false if not
export function updateSite(editedSite) {
	const budgetType = typeof editedSite.limit;
	const limitType = typeof editedSite.limit;
	if (budgetType === 'number' && limitType === 'number') {
		updateSiteInitiate(editedSite);
		return true;
	} else {
		return false;
	}
}
