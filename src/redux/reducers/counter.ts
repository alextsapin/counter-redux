import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type stateType = {
    count: number
}

const initialState: stateType = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.count = action.payload
        }
    }
})

export default counterSlice.reducer