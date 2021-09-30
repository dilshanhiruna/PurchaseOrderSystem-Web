import React, { useState } from 'react'
import firebase from '../base'

function PurchaseOrder2() {



    return (
        <div>

            <div className="sidenav">
                <a href="/"><i class="fa fa-fw fa-home"></i>  Dashboard</a>
                <a href="#"><i class="fa fa-fw fa-phone"></i>  Contacts</a>
                <a href="#"><i class="fa fa-fw fa-user-circle-o"></i>  Admin</a>
                <a href="/purchaseorder"><i class="fa fa-fw fa-shopping-cart"></i>  Purchase Orders</a>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <a href="#"><i class="fa fa-fw fa-sign-out"></i>  Logout</a>
            </div>


            <div className="puchaseOrdermain">

                
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Site details</h5>
                                <p class="card-text">
                                    <li>ID</li>
                                    <li>Name</li>
                                    <li>Address</li>
                                    <li>Budget</li>
                                    <li>Limit</li>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Order details</h5>
                                <p class="card-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            </div>
                        </div>
                    </div>
                </div>

                    <br/>


                <table border="1" id="myt">
                <tr>
                    <th>Item Name</th>
                    <th>Unit price</th>
                    <th>Qunatity</th>
                </tr>
                    <tr>
                    <td > xxxxxx </td>
                    <td > xxxxxx </td>
                    <td > xxxxxx </td>
                   </tr>
            </table>


            </div>/*end of the main  */

        </div>
    )
}

export default PurchaseOrder2

