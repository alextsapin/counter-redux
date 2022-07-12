import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {AppDispatch} from "../store";

type stateType = {
    count: number
    minValue: null | number
    maxValue: null | number
    showSettings: boolean
}

const initialState: stateType = {
    count: 0,
    minValue: null,
    maxValue: null,
    showSettings: false
}

export const setMinValue = (min: number) => async (dispatch: AppDispatch) => {
    localStorage.setItem('minValue', JSON.stringify(min))
}

export const setMaxValue = (max: number) => async (dispatch: AppDispatch) => {
    localStorage.setItem('maxValue', JSON.stringify(max))
}

export const getMinValueThunk = createAsyncThunk (
    'counter/getMinValue',
    async () => {
        const response = localStorage.getItem('minValue')
        if(response !== null) {
            return JSON.parse(response)
        } else {
            return 0
        }
    }
)

export const getMaxValueThunk = createAsyncThunk (
    'counter/getMaxValue',
    async () => {
        const response = localStorage.getItem('maxValue')
        if(response !== null) {
            return JSON.parse(response)
        } else {
            return 5
        }
    }
)

// SLICE
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
        setMaxValue: (state, action: PayloadAction<null | number>) => {
            state.maxValue = action.payload
        },
        setMinValue: (state, action: PayloadAction<null | number>) => {
            state.minValue = action.payload
        }
    },
    extraReducers: {
        [getMinValueThunk.fulfilled.type]: (state: stateType, action: PayloadAction<number>) => {
            state.minValue = action.payload
        },
        [getMaxValueThunk.fulfilled.type]: (state: stateType, action: PayloadAction<number>) => {
            state.maxValue = action.payload
        }
      }
})

export default counterSlice.reducer