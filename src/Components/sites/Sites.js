import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ViewSites from './ViewSites';
import AddSite from './AddSite';
import React, { useState, useEffect } from 'react';
import firebase from '../../base';

export default function Sites() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						{/* <li>
							<Link to="/sites">View</Link>
						</li>
						<li>
							<Link to="/addSite">Add</Link>
						</li> */}
						<Link to="/addSite">
							<button type="button">Add Site</button>
						</Link>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/sites">
						<V />
					</Route>
					<Route path="/addSite">
						<A />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function V() {
	return <ViewSites></ViewSites>;
}

function A() {
	return <AddSite></AddSite>;
}
