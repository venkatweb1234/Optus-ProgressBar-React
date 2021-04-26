import { FETCH_PROGRESS_BAR_REQEST, FETCH_PROGRESS_BAR_SUCESS, FETCH_PROGRESS_BAR_FAILURE } from '../redux-const-types/fetchProgress-const-types'

const initialState = {
    loading: true,
    bars: [],
    error: ''
}

const fetchBarsReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PROGRESS_BAR_REQEST:return{
            ...state, loading:true
        }
        case FETCH_PROGRESS_BAR_SUCESS:return{
            loading:false,
            bars:action.payload
        }
        case FETCH_PROGRESS_BAR_FAILURE: return{
            loading:false,
            bars:[],
            error:action.payload
        }
        default: return state
    }
}

export default fetchBarsReducer;