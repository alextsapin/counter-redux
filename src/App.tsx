import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Settings from './components/Settings/Settings';
import Display from './components/Display/Display';
import {useAppDispatch, useAppSelector} from './redux/hooks/hooks';

const App = () => {
    const {showSettings} = useAppSelector(state => state.rootReducer.counterReducer)
    return (
        <Container fixed>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item md={4}>
                    <div className="incBox">
                        {
                            ! showSettings
                            ? <Display/>
                            : <Settings/>
                        }
                        
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default App;