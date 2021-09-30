import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import firebase from '../base'
import './PurchaseOrder1.css'

function PurchaseOrder1() {

    const [order, setOrder] = useState([true])
 
    useEffect(() => {
        const fetchData = async() => {
            const db = firebase.firestore()
            const data = await db.collection("order").get()
            setOrder(data.docs.map(doc => doc.data()))
        } 
        fetchData()
    }, [])

    return (
        <div>
            <div className="sidenav">
                <a href="/"><i class="fa fa-fw fa-home"></i>  Dashboard</a>
                <a href="#"><i class="fa fa-fw fa-phone"></i>  Contacts</a>
                <a href="#"><i class="fa fa-fw fa-user-circle-o"></i>  Admin</a>
                <a href="#"><i class="fa fa-fw fa-shopping-cart"></i>  Purchase Orders</a>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <a href="#"><i class="fa fa-fw fa-sign-out"></i>  Logout</a>
            </div>
            <div className="puchaseOrdermain">
                <div className="purchaseOrderTOP">
                    <h5>Purchase Order</h5>

                    
                </div>
                <br/>
                <table border="1" id="myt">
                <tr>
                    <th>Order ID</th>
                    <th>Purchase_date</th>
                    <th>Required_date</th>
                    <th>order_status</th>
                    <th>site_Name</th>
                    <th>supplierName</th>
                    <th>Total Price</th>
                    <th>comments</th>
                    <th>Action</th>
                </tr>
                {order && order.map(o => (
                    <tr>
                    <td key={o.OrderID}> {o.OrderID} </td>
                    <td key={o.Purchase_date}> {o.Purchase_date}</td>
                    <td key={o.Required_date}> {o.Required_date}</td>
                    <td key={o.order_status}> {o.order_status}</td>
                    <td key={o.site_Name}> {o.site_Name}</td>
                    <td key={o.supplierName}> {o.supplierName}</td>
                    <td key={o.total_price}> {o.total_price}</td>
                    <td key={o.comments}> {o.comments}</td>
                    <td><button className="purchaseOrder_viewBtn">View</button></td>
                    </tr>
                ))}
            </table>
                
            </div>
            
        </div>
    )
}

export default PurchaseOrder1
