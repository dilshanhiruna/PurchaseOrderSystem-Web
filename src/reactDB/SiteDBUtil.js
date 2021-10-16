import {
	addSiteInitiate,
	getSitesInitiate,
	updateSiteInitiate,
} from '../sitesDB/actions';

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

export function getSite() {
	getSitesInitiate();
	return true;
}

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
