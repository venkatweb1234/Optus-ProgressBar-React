import './optionselect-style.scss'
import React from 'react';

const SelectOption = ({percentage1,handleChngeProgress}) => {
    return (<div>
        <select className='_mlso'
            onChange={handleChngeProgress}
        >
            <option selected disabled>Choose one</option>
            {percentage1.map((value, index) => <option key={index} value={index}>{value}</option>)}
        </select>
    </div>)
}

export default SelectOption;