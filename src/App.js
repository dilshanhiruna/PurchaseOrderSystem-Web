import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import ViewpurchaseOrder from "./purchaseOrder_Components/ViewpurchaseOrder";
import PurchaseOrder1 from "./purchaseOrder_Components/PurchaseOrder1";
import Navbar from "./Components/Sidebar/Navbar";
import Sites from './Components/sites/Sites';
import AddSite from './Components/sites/AddSite';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/purchaseorder" component={PurchaseOrder1} />
          <PrivateRoute exact path="/purchaseorder/view/:id" component={ViewpurchaseOrder} />
          
				  <Route exact path="/login" component={Login} />
				  <Route exact path="/signup" component={SignUp} />
				  
					<Route exact path="/suppliers" component={Suppliers} />
					<Route exact path="/sites" component={Sites} />
					{/* <Route exact path="/addSite" component={AddSite} /> */}
        </div>
      </Router>
    </AuthProvider>
  );

};

export default App;
