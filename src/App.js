import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Suppliers from './Suppliers';
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import PurchaseOrder1 from "./purchaseOrder_Components/purchaseOrder1";
import Navbar from "./Components/Sidebar/Navbar";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute
            exact
            path="/purchaseorder"
            component={PurchaseOrder1}
          />
          <PrivateRoute exact path="/suppliers" component={Suppliers} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
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
