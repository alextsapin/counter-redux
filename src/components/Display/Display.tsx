import React from 'react';
import Submit from '../Submit/Submit';
import {useAppDispatch, useAppSelector} from '../../redux/hooks/hooks';
import {counterSlice} from '../../redux/reducers/counter';

const Display = () => {
    const dispatch = useAppDispatch();
    const {increment, turnOnSettings} = counterSlice.actions;
    const {count, minValue, maxValue} = useAppSelector(state => state.rootReducer.counterReducer)

    return (
        <div>
            <p className={count === maxValue ? 'incBox__text incBox__text_red' : 'incBox__text'}>{count}</p>

            <div className="btnBox">
                <Submit title='INC' disabled={count === maxValue ? true : false} callBack={() => dispatch(increment(count + 1))}/>
                <Submit title='RESET' disabled={count === minValue ? true : false} callBack={() => dispatch(increment(minValue))}/>
                <Submit title='SET' disabled={false} callBack={() => dispatch(turnOnSettings(true))}/>
            </div>
        </div>
    )
}

export default Display;