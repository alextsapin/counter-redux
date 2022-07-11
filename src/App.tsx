import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Settings from './components/Settings/Settings';
import Display from './components/Display/Display';
import {useAppDispatch, useAppSelector} from './redux/hooks/hooks';
import {counterSlice} from './redux/reducers/counter'

const App = () => {
    const dispatch = useAppDispatch()
    const {increment} = counterSlice.actions
    const {count} = useAppSelector(state => state.rootReducer.counterReducer)

    return (
        <Container fixed>
           {count}
           <button onClick={() => dispatch(increment(count + 1))}>INCREMENT</button>
        </Container>
    );
}

export default App;