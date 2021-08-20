import axios from "axios";

const _FETCH_WINES = "_FETCH_WINES"


export function _fetchWines (wines) {
    return {
        type: _FETCH_WINES,
        wines
    }
}

export const fetchWines = () => {
    return async(dispatch) => {
        const wines = (await axios.get('/api/wines')).data;
        dispatch(_fetchWines(wines))
    }
}

const initialState = [];

const wineReducer = (state = initialState, action) => {
    switch(action.type) {
        case _FETCH_WINES:
            return action.wines;
        default:
            return state;    
    }
}


export default wineReducer;
