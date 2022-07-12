import React from 'react';
import TextField from '@mui/material/TextField';
import Submit from '../Submit/Submit';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import {counterSlice} from '../../redux/reducers/counter';

type PropsType = {
    minValue?: number
    maxValue?: number
    errorMinVal?: boolean
    errorMaxVal?: boolean
    changeMinValue?: (value: string) => void
    changeMaxValue?: (value: string) => void
    turnOffSettings?: () => void
}

const Settings = (props: PropsType) => {
    const dispatch = useAppDispatch();
    const {increment, setMaxValue, setMinValue, turnOnSettings} = counterSlice.actions;
    const {count, minValue, maxValue} = useAppSelector(state => state.rootReducer.counterReducer);

    function turnOnSettingsHandler() {
        dispatch(turnOnSettings(false))
        dispatch(increment(minValue))
    }

    return (
        <div>
            <TextField 
                value={maxValue}
                onChange={e => dispatch(setMaxValue(+e.currentTarget.value))}
                label="Max value" 
                color="primary" 
                type="number" 
                error={props.errorMaxVal}
                focused 
            />

            <TextField 
                value={minValue}
                onChange={e => dispatch(setMinValue(+e.currentTarget.value))}
                className="incBox__input" 
                label="Min value" 
                color="primary" 
                type="number" 
                error={props.errorMinVal}
                focused 
            />

            <div className="btnBox btnBox_set">
                <Submit title='SET' callBack={turnOnSettingsHandler} disabled={props.errorMinVal || props.errorMaxVal}/>
            </div>
        </div>
    )

}

export default Settings;