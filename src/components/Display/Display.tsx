import React from 'react';
import Submit from '../Submit/Submit';

type PropsType = {
    inc: number
    maxValue: number
    turnOnSettings: () => void
    callBackInc: () => void
    callBackReset: () => void
}

const Display = (props: PropsType) => {
    return (
        <div>
            <p className={props.inc === props.maxValue ? 'incBox__text incBox__text_red' : 'incBox__text'}>{props.inc}</p>

            <div className="btnBox">
                <Submit title='INC' disabled={props.inc === props.maxValue ? true : false} callBack={props.callBackInc}/>
                <Submit title='RESET' disabled={false} callBack={props.callBackReset}/>
                <Submit title='SET' disabled={false} callBack={props.turnOnSettings}/>
            </div>
        </div>
    )
}

export default Display;