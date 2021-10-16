import {
	addSiteInitiate,
	deleteSiteInitiate,
	getSiteInitiate,
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
	return true;
}
