import * as types from "./actionTypes";
import app from "../base";

const getSuppliers = (suppliers) => ({
    type: types.GET_SUPPLIERS,
    payload: suppliers,
});

const addSupplier = () => ({
    type: types.ADD_SUPPLIER,
});

const deleteSupplier = () => ({
    type: types.DELETE_SUPPLIER,
});

const updateSupplier = () => ({
    type: types.UPDATE_SUPPLIER,
});

const getSupplier = (supplier) => ({
    type: types.GET_SUPPLIER,
    payload: supplier,
});


//To fetch all the suppliers from Firestore database
export const getSuppliersInitiate = () => {
    return function(dispatch) {
        app.collection("suppliers").onSnapshot((querySnapshot) => {
            const suppliers = [];
            querySnapshot.forEach((doc) => {
                suppliers.push({...doc.data(), id: doc.id});
            });
            dispatch(getSuppliers(suppliers));
        });
    };
};


//Define the action to initiate adding supplier
export const addSupplierInitiate = (supplier) => {
    return function(dispatch) {

        //To insert data into Firestore collection
        app.collection("suppliers").doc().set(supplier);
        dispatch(addSupplier());
    };
};

export const deleteSupplierInitiate = (id) => {
    return function(dispatch) {
        app.collection("suppliers").doc(id).delete();
        dispatch(deleteSupplier());
    };
};

export const updateSupplierInitiate = (id, supplier) => {
    return function(dispatch) {
        app.collection("suppliers").doc(id).update(supplier);
        dispatch(updateSupplier());
    };
};

export const getSupplierInitiate = (id) => {
    return function(dispatch) {
        app.collection("suppliers").doc(id).get().then((supplier) => {
            dispatch(getSupplier({...supplier.data()}))
        }).catch((error) => console.log(error));
    };
};