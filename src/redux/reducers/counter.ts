import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type stateType = {
    count: number
    minValue: number
    maxValue: number
    showSettings: boolean
}

const initialState: stateType = {
    count: 0,
    minValue: 0,
    maxValue: 5,
    showSettings: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.count = action.payload
        },
        turnOnSettings: (state, action: PayloadAction<boolean>) => {
            state.showSettings = action.payload
        },
        setMaxValue: (state, action: PayloadAction<number>) => {
            state.maxValue = action.payload
        },
        setMinValue: (state, action: PayloadAction<number>) => {
            state.minValue = action.payload
        }
    }
})

export default counterSlice.reducer