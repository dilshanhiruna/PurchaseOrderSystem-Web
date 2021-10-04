import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import PurchaseOrder1 from './purchaseOrder_Components/purchaseOrder1';
import Navbar from './Components/Sidebar/Navbar';
import Sites from './Components/sites/Sites';
import AddSite from './Components/sites/AddSite';

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<Navbar />
				<div className="container">
					<PrivateRoute exact path="/" component={Home} />
					<PrivateRoute
						exact
						path="/purchaseorder"
						component={PurchaseOrder1}
					/>
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/suppliers" component={SignUp} />
					<Route exact path="/sites" component={Sites} />
					{/* <Route exact path="/addSite" component={AddSite} /> */}
				</div>
			</Router>
		</AuthProvider>
	);
};

/*<sideNavigation/>
            <Switch>
              <Route path='/' />
            </Switch>*/

export default App;
