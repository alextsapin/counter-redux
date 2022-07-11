import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit'
import counterReducer from './reducers/counter';

const rootReducer = combineReducers({
    counterReducer 
})

export const store = configureStore({
    reducer: {
        rootReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export default store