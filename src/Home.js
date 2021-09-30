import React from "react";
import app from "./base";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="sidenav">
        <Link to="/">
          <i class="fa fa-fw fa-home"></i> Dashboard
        </Link>
        <Link href="/">
          <i class="fa fa-fw fa-phone"></i> Contacts
        </Link>
        <Link href="/">
          <i class="fa fa-fw fa-user-circle-o"></i> Admin
        </Link>
        <Link to="/purchaseorder">
          <i class="fa fa-fw fa-shopping-cart"></i> Purchase Orders
        </Link>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <button onClick={() => app.auth().signOut()}>Sign out</button>
      </div>

      <div className="puchaseOrdermain">
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;
