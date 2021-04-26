import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import './buttons-style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBarDisplay from '../ProgressBarcompo/progress-bar-component';
import SelectOption from '../optionSelectBars/optionSelect-component';
const ProrgessBarbuttons = (props) => {
    let databarValues = props.progressData.bars.bars;
    let  percentage1 = [];
    percentage1 = databarValues;
    let selectOptionvalue;
    const [percentage, setPercentage] = useState(percentage1)
    const [selectIndex, setselectIndex] = useState()
    const limit = props.progressData.bars.limit;
    let preState = null;
    const buttonClickValue = (e) => {
        const btnvale = parseInt(e.target.innerText);

        setPercentage((prevState) => {
            preState = [...prevState];
            preState[selectIndex] = preState[selectIndex] + btnvale;
            console.log("prestate", preState);
            return preState
        })

        console.log("percentage", percentage)
    }
    const handleChngeProgress = (e) => {
        selectOptionvalue = e.target.value;
        setselectIndex(parseInt(e.target.value))

    }
    return (

        <div className="borderProgressbar">
            {
                <ProgressBarDisplay percentage={percentage} limit={limit} />
               
            }
            <br />
            {
                <SelectOption percentage1 ={databarValues} handleChngeProgress={handleChngeProgress} />
                
            }
            <br />
            <br/>
            {
                props.progressData.bars.buttons.map((button, index) => (<Button className='_ml5' variant="info" onClick={buttonClickValue} key={index}>{button}</Button>))
            }
        </div>

    )
}

export default ProrgessBarbuttons;