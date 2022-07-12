import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit'
import counterReducer from './reducers/countSlice';

export const store = configureStore({
    reducer: {
        counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export default store

//@ts-ignore
window.state = store.getState()