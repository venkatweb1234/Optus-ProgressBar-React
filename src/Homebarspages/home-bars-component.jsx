import React, { useEffect } from 'react';
import {connect,useSelector,useDispatch} from 'react-redux';
import {fetchUserMainaction} from '../redux'
import ProrgessBarbuttons from '../ButtonsPrgoressBar/buttons-component'
import './home-bars-style.scss'
const HomeProgressBarpage = () => {
    const barsInfo= useSelector(state=>state.bars);
    const mapDispatch = useDispatch()
    useEffect(() => {
        mapDispatch(fetchUserMainaction())
    }, [])
    return barsInfo.loading ? (<h2>Loading</h2>):
    barsInfo && (<div>
        <h2 className='_mrl'>Optus Progress Bar List</h2>
        <div>{
             <ProrgessBarbuttons progressData={barsInfo} />
            }</div>
    </div>)
}

// const mapStateToProps = state => {
//     console.log(state.bars)
//     return {
//         barsInfo: state.bars
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUserMainaction: () => dispatch(fetchUserMainaction())
//     }
// }

export default HomeProgressBarpage