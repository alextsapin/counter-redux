import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Submit from '../Submit/Submit';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import {counterSlice} from '../../redux/reducers/counter';

const Settings = () => {
    const dispatch = useAppDispatch();
    const {increment, setMaxValue, setMinValue, turnOnSettings} = counterSlice.actions;
    const {count, minValue, maxValue} = useAppSelector(state => state.rootReducer.counterReducer);

    const [errorMaxVal, setErrorMaxVal] = React.useState(false);
    const [errorMinVal, setErrorMinVal] = React.useState(false);

    function turnOnSettingsHandler() {
        dispatch(turnOnSettings(false))
        dispatch(increment(minValue))
    }

    React.useEffect(() => {
        if(maxValue <= minValue) {
            setErrorMaxVal(true)
        } else {
            setErrorMaxVal(false)
        }

    }, [maxValue])

    React.useEffect(() => {
        if(maxValue <= minValue) {
            setErrorMinVal(true)
        } else {
            setErrorMinVal(false)
        }

    }, [minValue])

    return (
        <div>
            <TextField 
                value={maxValue}
                onChange={e => dispatch(setMaxValue(+e.currentTarget.value))}
                label="Max value" 
                color="primary" 
                type="number" 
                error={errorMaxVal}
                focused 
            />

            <TextField 
                value={minValue}
                onChange={e => dispatch(setMinValue(+e.currentTarget.value))}
                className="incBox__input" 
                label="Min value" 
                color="primary" 
                type="number" 
                error={errorMinVal}
                focused 
            />

            <div className="btnBox btnBox_set">
                <Submit title='SET' callBack={turnOnSettingsHandler} disabled={errorMinVal || errorMaxVal}/>
            </div>
        </div>
    )

}

export default Settings;