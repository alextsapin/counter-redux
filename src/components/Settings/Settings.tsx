import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Submit from '../Submit/Submit';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import {counterSlice, getMinValueThunk} from '../../redux/reducers/countSlice';

type propsType = {
    minValue: null | number
    maxValue: null | number
}

const Settings = (props: propsType) => {
    const dispatch = useAppDispatch();
    const {increment, setMaxValue, setMinValue, turnOnSettings} = counterSlice.actions;

    const [minValue, changeMinValue] = React.useState(props.minValue);
    const [maxValue, changeMaxValue] = React.useState(props.maxValue);

    const [errorMaxVal, setErrorMaxVal] = React.useState(false);
    const [errorMinVal, setErrorMinVal] = React.useState(false);

    function turnOnSettingsHandler() {
        if(props.minValue !== null && props.maxValue !== null) {
            dispatch(setMinValue(minValue))
            dispatch(setMaxValue(maxValue))
        }

        if(minValue !== null) {
            dispatch(increment(minValue))
        }

        dispatch(turnOnSettings(false))
    }

    React.useEffect(() => {
        if(maxValue !== null && minValue !== null) {
            if(maxValue <= minValue) {
                setErrorMaxVal(true)
            } else {
                setErrorMaxVal(false)
            }
        }

    }, [maxValue])

    React.useEffect(() => {
        if(maxValue !== null && minValue !== null) {
            if(maxValue <= minValue) {
                setErrorMinVal(true)
            } else {
                setErrorMinVal(false)
            }
        }

    }, [minValue])

    return (
        <div>
            <TextField 
                value={maxValue}
                onChange={e => changeMaxValue(+e.currentTarget.value)}
                label="Max value" 
                color="primary" 
                type="number" 
                error={errorMaxVal}
                focused 
            />

            <TextField 
                value={minValue}
                onChange={e => changeMinValue(+e.currentTarget.value)}
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