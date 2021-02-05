import { PROPERTY_ADD_NEW, PROPERTY_FETCH_ALL } from '../actions/types';

const initialState = {
  propertyList: [],
};

export default function propertyReducer(state = initialState, action) {
  switch (action.type) {
    case PROPERTY_FETCH_ALL: {
      return { ...state, propertyList: action.payload };
    }
    case PROPERTY_ADD_NEW: {
      return { ...state, propertyList: [...state.propertyList, action.payload] };
    }
    default:
      return state;
  }
}
