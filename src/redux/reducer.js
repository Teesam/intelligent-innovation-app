import {
    SET_SEARCHED_IMAGES
} from './actions';

const initialState = {
  searchedImages: null

};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCHED_IMAGES:
          return{
              ...state, searchedImages: action.payload
          }
        default:
            return state ;
    }

}

export default reducer;