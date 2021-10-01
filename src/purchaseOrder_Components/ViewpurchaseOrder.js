import React, { useState } from 'react'
import firebase from '../base'
import "./PurchaseOrder.css";
import "./ViewpurchaseOrder.css"
import { useParams } from "react-router-dom";


function ViewpurchaseOrder() {

    const { id } = useParams();


    return (
        <div>
            <div className="header-box">
                <div>Purchase Order</div>
            </div>

            <div className="content-cards">

                <div className="row">
                    <div class="card-view-column">
                        <div class="container-card-view">
                            <h4><b>Site Details</b></h4>
                            <p>
                                    <li>ID</li>
                                    <li>Name</li>
                                    <li>Address</li>
                                    <li>Budget</li>
                                    <li>Limit</li>
                            </p>
                        </div>
                    </div>

                    <div class="card-view-column">
                        <div class="container-card-view">
                            <h4><b>Order details</b></h4>
                            <p>
                                    <li>Reference ID</li>
                                    <li>Purchase Date</li>
                                    <li>Required Date</li>
                                    <li>Supplier Name</li>
                                    <li>Total Price</li>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="content-box-list">
                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Description</th>
                            <th>Measurement</th>
                            <th>Price</th>
                            <th>Quntity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                    </tbody>
                </table>
            </div>

            <div className="content-cards">

                    <div class="card-view-row">
                        <div class="container-card-view">
                            <br/>

                                <div class="dropdown">
                                    <button class="dropbtn">Order status</button>
                                    <div class="dropdown-content">
                                        <a href="#">Approve</a>
                                        <a href="#">Partially Approve</a>
                                        <a href="#">Decline</a>
                                    </div>
                                </div>
                            
                                <label for="fname">Comment</label>
                                <input type="text" id="fname" name="fname"></input>
                            
                        </div>
                    </div>
            </div>  

        </div>
    )
}

export default ViewpurchaseOrder

