const {TestWatcher} = require('@jest/core');
import {render,screen,act} from "@testing-library/react";
const PurchaseOrder1 = require('./PurchaseOrder1');
//test rerieve data 
describe("retrieve data from firebase", ()=> {
	it("loads ....",async () => {
		await act(async () => render (<PurchaseOrder1/>));
		expect(screen.getByText("order")).toBeInTheDocument();
	})
})