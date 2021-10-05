const Suppliers = require('./Suppliers');


//Positive test case for add supplier
test('properly add a supplier', () => {
    var newSupplierObject1 = {
        name: 'ABC Company',
        address: 'N0 15, Malabe, Sri Lanka',
        contact: '0112555555'
    };
    expect(Suppliers.addSupplier()).toBe(true);
});


//Negative test case for add supplier
test('properly add a supplier', () => {
    var newSupplierObject2 = {
        name: 'ABC Company',
        address: 'N0 15, Malabe, Sri Lanka',
        contact: ''
    };
    expect(Suppliers.addSupplier()).toBe(true);
});


//Positive test case for update the details of a supplier
test('properly update the supplier', () => {
    var newSupplierObject3 = {
        name: 'ABC Company',
        address: 'N0 50, Malabe, Sri Lanka',
        contact: '0112533333'
    };
    expect(Suppliers.updateSupplier(id)).toBe(true);
});


//Negative test case for update the details of a supplier
test('properly update the supplier', () => {
    var newSupplierObject4 = {
        name: 'ABC Company',
        address: 'N0 50, Malabe, Sri Lanka',
        contact: ''
    };
    expect(Suppliers.updateSupplier(id)).toBe(true);
});


//Test case for view all the suppliers
test('properly view all the suppliers', () => {
    expect(Suppliers.getSuppliers(suppliers)).toBe(true);
});


//Test case for delete a supplier
test('properly delete the supplier', () => {
    expect(Suppliers.deleteSupplier(id)).toBe(true);
});