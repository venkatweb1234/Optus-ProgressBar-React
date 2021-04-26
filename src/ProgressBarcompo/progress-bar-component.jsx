import React from 'react'
import { ProgressBar } from 'react-bootstrap';

const ProgressBarDisplay = ({percentage,limit}) => {
    return (<div>
        {
            percentage.map((perValue, index) => (

                <div key={index}>


                    {/* <input className='progressBarradio' onChange={handleChngeProgress} type="radio" name="radio" value={index} /> */}

                    <br /><ProgressBar animated className='progressBarw' variant={(perValue < limit) ? 'Sucess' : 'danger'} now={(perValue > 0) ? perValue : 0} label={`${(perValue > 0) ? perValue : 0}%`}></ProgressBar><br />


                </div>))
        }
    </div>)
}

export default ProgressBarDisplay;