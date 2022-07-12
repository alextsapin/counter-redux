import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Settings from './components/Settings/Settings';
import Display from './components/Display/Display';
import {useAppDispatch, useAppSelector} from './redux/hooks/hooks';
import {counterSlice, getMinValueThunk, getMaxValueThunk, setMinValue, setMaxValue} from './redux/reducers/countSlice';

const App = () => {
    const dispatch = useAppDispatch();
    const {increment} = counterSlice.actions;
    const {showSettings} = useAppSelector(state => state.counterReducer);
    const {minValue, maxValue} = useAppSelector(state => state.counterReducer)
   
    React.useEffect(() => {
        dispatch(getMaxValueThunk())
        dispatch(getMinValueThunk())
    }, [])

    React.useEffect(() => {
        if(minValue !== null) {
            dispatch(setMinValue(minValue))
            dispatch(increment(minValue))
        }
    }, [minValue])

    React.useEffect(() => {
        if(maxValue !== null) {
            dispatch(setMaxValue(maxValue))
        }
    }, [maxValue])

    return (
        <Container fixed>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item md={4}>
                    <div className="incBox">
                        {
                            ! showSettings
                            ? <Display minValue={minValue} maxValue={maxValue}/>
                            : <Settings minValue={minValue} maxValue={maxValue}/>
                        }
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default App;