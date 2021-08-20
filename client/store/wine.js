import axios from "axios";

const FETCH_SINGLE_WINE = "FETCH_SINGLE_WINE"

export function _fetchSingleWine (singleWine) {
    return {
        type: FETCH_SINGLE_WINE,
        singleWine
    }
}

export const fetchSingleWine = (id) => {
    return async(dispatch) => {
        const singleWine = (await axios.get(`/api/wines/${id}`)).data;
        console.log('SINGLE WINE THUNK', singleWine)
        dispatch(_fetchSingleWine(singleWine))
    }
}

const initialState = [];

const singleWineReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SINGLE_WINE:
            return action.singleWine;    
        default:
            return state;    
    }
}


export default singleWineReducer;