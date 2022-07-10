import React from 'react';
import Button from '@mui/material/Button';

type PropsType = {
    title: string
    disabled?: boolean
    callBack: () => void
}

const Submit = (props: PropsType) => {
    return <Button onClick={props.callBack} variant="contained" disabled={props.disabled}>{props.title}</Button>

}

export default Submit;