import React from 'react';
import TextField from '@mui/material/TextField';
import Submit from '../Submit/Submit';

type PropsType = {
    minValue: number
    maxValue: number
    errorMinVal: boolean
    errorMaxVal: boolean
    changeMinValue: (value: string) => void
    changeMaxValue: (value: string) => void
    turnOffSettings: () => void
}

const Settings = (props: PropsType) => {
    return (
        <div>
            <TextField 
                value={props.maxValue}
                onChange={e => props.changeMaxValue(e.currentTarget.value)}
                label="Max value" 
                color="primary" 
                type="number" 
                error={props.errorMaxVal}
                focused 
            />

            <TextField 
                value={props.minValue}
                onChange={e => props.changeMinValue(e.currentTarget.value)}
                className="incBox__input" 
                label="Min value" 
                color="primary" 
                type="number" 
                error={props.errorMinVal}
                focused 
            />

            <div className="btnBox btnBox_set">
                <Submit title='SET' callBack={props.turnOffSettings} disabled={props.errorMinVal || props.errorMaxVal}/>
            </div>
        </div>
    )

}

export default Settings;