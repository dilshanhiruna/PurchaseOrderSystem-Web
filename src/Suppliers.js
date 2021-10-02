import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBTypography, MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { addSupplierInitiate, deleteSupplierInitiate, getSupplierInitiate, getSuppliersInitiate, updateSupplierInitiate } from "./redux/actions";
import { DELETE_SUPPLIER } from './redux/actionTypes';


const initialState = {
    name: "",
    address: "",
};

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 70,
        margin: "auto",
        padding: "15px",
        maxWidth: "500px",
        alignContent: "center",
        "& > *": {
            margin: theme.spacing(1),
            width: "45ch",
        },
    },
})); 

const Suppliers = () => {
    const classes = useStyles(); 
    const [state, setState] = useState(initialState);
    const [editMode, setEditMode] = useState(false);
    const [userId, setUserId] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const {name, address} = state;
    const dispatch = useDispatch();
    const {suppliers, supplier} = useSelector(state => state.data);

    useEffect(() => {
        dispatch(getSuppliersInitiate());
    }, []);

    useEffect(() => {
        if(supplier) {
            setState({...supplier});
        }
    }, [supplier]);

    const deleteSupplier = (id) => {
        if(window.confirm("Are you sure that you want to delete the supplier?")) {
            dispatch(deleteSupplierInitiate(id));
        }
    };

    const editSupplier = (id) => {
        setEditMode(true);
        setUserId(id);
        dispatch(getSupplierInitiate(id));
    };

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validations
        if(!name || !address) {
            setErrorMessage("Fields cannot be empty!");
        } else {

            //If the user is not in the edit mode
            if(!editMode) {
                dispatch(addSupplierInitiate(state));

                //To clear the input fields after inserting the record to the table (after submitting the form)
                setState({name: "", address: ""});

                //If all the input fields contain values
                setErrorMessage("");
            } else {
                dispatch(updateSupplierInitiate(userId, state));
                setUserId(null);
                setEditMode(false);

                //To clear the input fields after updating the details
                setState({name: "", address: ""});

                //If all the input fields contain values
                setErrorMessage("");
            }

        }

    };

    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol md="8">
                    <MDBTable style={{marginTop: "100px"}} bordered>
                        <MDBTableHead dark>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Address</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </MDBTableHead>
                        {suppliers && suppliers.map((item, index) => (
                            <MDBTableBody key={index}>
                            <tr>
                                <th scope='row'>{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>
                                    <MDBBtn className="m-1" tag="a" color="none" style={{color: "#55acee"}} onClick={() => editSupplier(item.id)}>
                                        <MDBIcon fas icon="pen" size="lg" />
                                    </MDBBtn>
                                    <MDBBtn className="m-1" tag="a" color="none" style={{color: "#dd4b39"}} onClick={() => deleteSupplier(item.id)}>
                                        <MDBIcon fas icon="trash" size="lg" />
                                    </MDBBtn>
                                </td>
                            </tr>
                            </MDBTableBody>
                        ))}
                    </MDBTable>   
                </MDBCol>



                <MDBCol md="4">
                    <form onSubmit={handleSubmit} className={classes.root}>
                        <MDBTypography className="text-start" variant="h5">
                            {!editMode ? "Add Supplier" : "Update Supplier"}
                        </MDBTypography>
                        {errorMessage && <h6 style={{color: "red"}}>{errorMessage}</h6>}
                        <MDBInput 
                            label="Name"
                            value={name || ""}
                            name="name"
                            type="text"
                            onChange={handleInputChange}
                        />
                        <br />
                        <MDBInput 
                            label="Address"
                            value={address || ""}
                            name="address"
                            type="text"
                            onChange={handleInputChange}
                        />
                        <br />
                        <MDBBtn style={{width: "100px"}} color={!editMode ? "success" : "warning"} type="submit">
                            {!editMode ? "Submit" : "Update"} 
                        </MDBBtn>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Suppliers; 