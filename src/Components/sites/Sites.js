import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ViewSites from './ViewSites';
import AddSite from './AddSite';
import React, { useState, useEffect } from 'react';
import firebase from '../../base';
import { v4 as uuidv4 } from 'uuid';
import EditSite from './EditSite';

export default function Sites() {
	return (
		<Router>
			<div>
				<Link to="/sites">
					<button type="button">View Sites</button>
				</Link>
				<Link to="/sites/addSite">
					<button type="button">Add Site</button>
				</Link>
				{/* A <Switch> looks through its children <Route>s and
		renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path="/sites">
						<V />
					</Route>
					<Route exact path="/sites/addSite">
						<A />
					</Route>
					<Route exact path="/sites/editSite">
						<EditSite></EditSite>
					</Route>
				</Switch>
			</div>
		</Router>
	);

	function V() {
		return <ViewSites></ViewSites>;
	}

	function A() {
		return <AddSite></AddSite>;
	}
}
