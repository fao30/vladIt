import {
  ITEMS_LOADING,
  CITIES,
} from "../actionType/itemActionType";

const initialState = {
  cities: [],
  isLoading: true,
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case CITIES:
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case ITEMS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
