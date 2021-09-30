import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import PurchaseOrder1 from "./purchaseOrder_Components/PurchaseOrder1";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/purchaseorder" component={PurchaseOrder1} />
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
