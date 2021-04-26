import axios from 'axios'
import { FETCH_PROGRESS_BAR_REQEST, FETCH_PROGRESS_BAR_SUCESS, FETCH_PROGRESS_BAR_FAILURE } from '../redux-const-types/fetchProgress-const-types'

export const fetchProgressbarRequest = () => {
    return {
        type: FETCH_PROGRESS_BAR_REQEST
    }
}


export const fetchProgressbarSucess = bars => {
    return {
        type: FETCH_PROGRESS_BAR_SUCESS,
        payload: bars
    }
}

export const fetchProgressbarFailure = error => {
    return {
        type: FETCH_PROGRESS_BAR_FAILURE,
        payload: error
    }
}

export const fetchUserMainaction = () => {
    return (dispatch) => {
        dispatch(fetchProgressbarRequest);
        axios.get('https://pb-api.herokuapp.com/bars').then(res => {
            const barsData = res.data;
            console.log(barsData);
            dispatch(fetchProgressbarSucess(barsData));
        }).catch(error => {
            const errorMsg = error.message;
            dispatch(fetchProgressbarFailure(errorMsg))

        })
    }

}
