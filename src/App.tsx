import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Settings from './components/Settings/Settings';
import Display from './components/Display/Display';

const App = () => {
    let minValueLS = localStorage.getItem('minValue');
    let maxValueLS = localStorage.getItem('maxValue');

    const [minValue, setMinValue] = React.useState(minValueLS !== null ? JSON.parse(minValueLS) : 0)
    const [maxValue, setMaxValue] = React.useState(maxValueLS !== null ? JSON.parse(maxValueLS) : 5)

    // Ошибки
    const [errorMinVal, setErrorMinVal] = React.useState(false)
    const [errorMaxVal, setErrorMaxVal] = React.useState(false)

    // Текущее значение
    const [inc, setInc] = React.useState(minValue);

    // Переключим дисплей
    const [showSettings, setShowSettings] = React.useState(false)

    function changeMinValue (value: string) {
        if(+value >= maxValue) {
            setErrorMinVal(true)
        } 
        else {
            setErrorMinVal(false)
        }
        setMinValue(+value)
    }

    function changeMaxValue (value: string) {
        if(+value <= minValue) {
            setErrorMaxVal(true)
        } 
        else {
            setErrorMaxVal(false)
        }

        if(value !== null) {
            setMaxValue(+value)
        }
    }

    // Установим настройки
    function turnOffSettings() {
        localStorage.removeItem('minValue')
        localStorage.removeItem('maxValue')

        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setInc(minValue)
        setShowSettings(false)
    }

    // Уберем панель настроек
    function turnOnSettings() {
        setShowSettings(true)
    }

    // Increment
    function callBackInc() {
        setInc(inc + 1)
    }

    // Reset
    function callBackReset() {
        setInc(minValue)
    }

    return (
        <Container fixed>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item md={4}>
                    <div className="incBox">
                        {
                            showSettings
                            ? <Settings 
                                minValue={minValue} 
                                maxValue={maxValue} 
                                errorMinVal={errorMinVal}
                                errorMaxVal={errorMaxVal}
                                changeMinValue={changeMinValue}
                                changeMaxValue={changeMaxValue}
                                turnOffSettings={turnOffSettings}
                            />
                            : <Display 
                                inc={inc} 
                                maxValue={maxValue} 
                                callBackInc={callBackInc}
                                callBackReset={callBackReset}
                                turnOnSettings={turnOnSettings}
                            />
                        }
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;