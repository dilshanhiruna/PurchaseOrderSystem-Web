import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../base";
import "./PurchaseOrder.css";

function PurchaseOrder1() {

    const [order, setOrder] = useState([true]);

    //rerieve the values of the order collection
    useEffect(() => {
        const fetchData = async() => {
            const db = firebase.firestore()
            const data = await db.collection("order").get()
            setOrder(data.docs.map((doc)=>({id:doc.id, ...doc.data()})))
           
        } 
        fetchData()
    }, [])

    return (
        <div>
            <div className="header-box">
                <div>Purchase Order</div>
            </div>
               
                {/* purchase order table */}

                <div className="content-box-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Purchase Date</th>
                                <th>Required Date</th>
                                <th>Order Status</th>
                                <th>Site Name</th>
                                <th>Supplier Name</th>
                                <th>Total Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* display fetched values from firestore order collection */}

                            {order && order.map(o => (
                                <tr>
                                <td key={o.OrderID}> {o.OrderID} </td>
                                <td key={o.Purchase_date}> {o.Purchase_date}</td>
                                <td key={o.Required_date}> {o.Required_date}</td>
                                <td key={o.order_status}> {o.order_status}</td>
                                <td key={o.site_Name}> {o.site_Name}</td>
                                <td key={o.supplierName}> {o.supplierName}</td>
                                <td key={o.total_price}> {o.total_price}</td>
                                <td><Link to={"purchaseorder/view/"+o.id} ><button className="purchaseOrder_viewBtn" >View</button></Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                
                </div>
            </div>
        
    )
}

export default PurchaseOrder1;
