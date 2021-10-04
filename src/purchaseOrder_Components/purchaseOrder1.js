import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "../base";
import "./PurchaseOrder.css";

function PurchaseOrder1() {

    const [order, setOrder] = useState([true]);
    const [search,setsearch] = useState("");

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
                <div>Purchase Order

                    <input type="text" placeholder="Search.." className="searchbar" style={{ marginLeft:650, width: "30%"}}
                        onChange={(e) => setsearch(e.target.value)} />

                </div>
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

                            {/* 
                            **Retrieve order table details 
                            **can search using supplier name , site name and order_status
	                        **@return the item
                            */}
                            {order && order.filter((item) =>{
                                if(setsearch === ''){
                                    return item;
                                }
                                else if(item.site_Name && item.site_Name.toLowerCase().includes(search.toLowerCase())
                                    || (item.supplierName && item.supplierName.toLowerCase().includes(search.toLowerCase()))
                                    || item.order_status && item.order_status.toLowerCase().includes(search.toLowerCase())
                                ){
                                    return item;
                                }
                            }
                            ).map(o => (
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
                    </table> {/*end of the order table*/}
                
                </div>
            </div>
        
    )
}

export default PurchaseOrder1;
