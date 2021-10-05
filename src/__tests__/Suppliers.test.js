const Suppliers = require('./Suppliers');

test('properly add a supplier', () => {
    var newSupplierObject = {
        name: 'ABC Company',
        address: 'N0 15, Malabe, Sri Lanka',
        contact: '0112555555'
    };
    expect(Suppliers.addSupplier()).toBe(true);
});