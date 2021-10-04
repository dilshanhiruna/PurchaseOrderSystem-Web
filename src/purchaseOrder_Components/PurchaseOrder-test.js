import {PurchaseOrder1} from './PurchaseOrder1'
import {act,renderHook} from '@testing-library/react-hooks'

describe("fetchData", () => {
    it("retrieve order collection" , () => {
        const {result} = renderHook(PurchaseOrder1)

        act(() => {
            result.current.fetchData()
        })

        //expect(result.current.count).toBe(1)
    })
})