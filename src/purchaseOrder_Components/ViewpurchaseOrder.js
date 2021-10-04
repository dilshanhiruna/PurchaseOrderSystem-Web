import React, { useState,useEffect,useRef } from 'react'
import firebase from '../base'
import "./PurchaseOrder.css";
import "./ViewpurchaseOrder.css"
import { useParams } from "react-router-dom";

function ViewpurchaseOrder() {

    //object ID
    const { id } = useParams();
  
    const [site, setsite] = useState([])
    const [order, setorder] = useState([])
    const [items, setitems] = useState([])

        //get the values of an object using object ID
        useEffect(() => {
          const subscriber = firebase.firestore()
            .collection('order')
            .doc(id)
            .onSnapshot(documentSnapshot => {
                setorder(documentSnapshot.data())              
                setitems(documentSnapshot.data().items)

                //using the site ID foregin key get the site collection details of that particular object
                firebase.firestore()
                .collection('sites')
                .doc(documentSnapshot.data().site_ID)
                .onSnapshot(documentSnapshot => {
                    setsite(documentSnapshot.data())
                
              })
            })
            console.log(order.items)
      },[])

      /**
      **function to update the order_state value and the level
      **@param status
      **/

      const updateState = (status)=>{

        const db = firebase.firestore()
        db.collection("order").doc(id).update({order_status: status, level: status})

      }
      
      //add comment
      const commentRef = useRef();
      const adcomment = ()=>{

        const comment1 = commentRef.current.value;
        const db = firebase.firestore()
        db.collection("order").doc(id).update({comments: comment1 })

      }

    return (
        <div>
            <div className="header-box">
                <div>Purchase Order</div>
            </div>

            {/* display site details according to that place order request*/}
            <div className="content-cards">

                <div className="row">
                    <div class="card-view-column">
                        <div class="container-card-view">
                            <h4><b>Site Details</b></h4>
                            <p>
                                    <li><b>Name</b>      : {site.name} </li>
                                    <li><b>Address</b>    : {site.location} </li>
                                    <li><b>Budget</b>     : {site.budget} </li>
                                    <li><b>Limit</b>      : {site.limit} </li>
                            </p>
                        </div>
                    </div>

                    {/* display order details */}
                    <div class="card-view-column">
                        <div class="container-card-view">
                            <h4><b>Order details</b></h4>
                            <p>
                                    <li><b>Reference ID</b>  : {order.OrderID}</li>
                                    <li><b>Purchase Date </b>: {order.Purchase_date}</li>
                                    <li><b>Required Date</b> : {order.Required_date}</li>
                                    <li><b>Supplier Name</b> : {order.supplierName}</li>
                                    <li><b>Total Price</b>   : {order.total_price}</li>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* display items detail*/}
            <div className="content-box-list">
                <table>
                    <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items && items.map(po =>(
                            <tr>
                            <td key={po.item_id}> {po.item_id} </td>
                            <td key={po.item_name}> {po.item_name} </td>
                            <td key={po.price}> {po.price} </td>
                            <td key={po.quantity}> {po.quantity} </td>
                            <td key={po.price*po.quantity}> {po.price*po.quantity} </td>
                            
                            </tr>
                        ))} 

                    </tbody>
                </table>
            </div>

            <div className="content-cards">

                    <div class="card-view-row">
                        <div class="container-card-view">

                                {/* buttons to approve the order */}

                                <button onClick={() => updateState('Approved')} className="status-Btn">Approved</button>
                                <button onClick={() => updateState('Partially Approved')} className="status-Btn">Partially Approved</button>
                                <button onClick={() => updateState('Decline')} className="status-Btn"> Decline</button>

                                {/* text input for the comment */}
                                <label><b>Comment:</b></label>
                                <input type='text' ref={commentRef}/>
                                <button type='button' onClick={adcomment} className="status-Btn">
                                    Add
                                </button>
                        </div>
                    </div>
            </div>  

        </div>
    )
}
export default ViewpurchaseOrder;
