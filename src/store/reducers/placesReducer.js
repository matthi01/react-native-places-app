import * as actionTypes from "../actions/actionTypes";

import placeImage from "../../../src/assets/image1.jpg";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: placeImage
        })
      };

    case actionTypes.DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(
          place => place.key !== state.selectedPlace.key
        )
      };

    default:
      return state;
  }
};

export default reducer;
