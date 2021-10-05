import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {PurchaseOrder1} from '../purchaseOrder_Components/PurchaseOrder1'
import {ViewpurchaseOrder} from './ViewpurchaseOrder'

describe('PurchaseOrder1', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PurchaseOrder1/>,div);
    });
});

describe('ViewpurchaseOrder', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ViewpurchaseOrder></ViewpurchaseOrder>,div);
    });
});