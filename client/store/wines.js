import axios from "axios";

const _FETCH_WINES = "_FETCH_WINES"

export function _fetchWines (merlotWines) {
    return {
        type: _FETCH_WINES,
        merlotWines
    }
}

export const fetchMerlotWines = () => {
    return async(dispatch) => {
        //const merlotWinesUrl = 'https://api.spoonacular.com/food/wine/recommendation?apiKey=c92390ad3d4f4c4b98aff586bce81688&wine=merlot&number=20';
        const merlotWines = (await axios.get(merlotWinesUrl)).data;
        console.log(merlotWines)
        dispatch(_fetchWines(merlotWines))
    }
}

const initialState = [];

const wineReducer = (state = initialState, action) => {
    switch(action.type) {
        case _FETCH_WINES:
            return action.merlotWines;
        default:
            return state;    
    }
}


export default wineReducer;
