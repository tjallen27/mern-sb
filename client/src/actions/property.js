import axios from 'axios';
import { PROPERTY_ADD_NEW, PROPERTY_FETCH_ALL } from './types';

export const addNewProperty = (property, userId) => {
  return async (dispatch) => {
    property['userId'] = userId;
    const res = await axios.post('/api/properties', property);
    dispatch({ type: PROPERTY_ADD_NEW, payload: res.data });
  };
};

export const fetchAllProperties = (userId) => {
  return async (dispatch) => {
    const res = await axios.get('/api/properties', { params: { userId } });
    dispatch({ type: PROPERTY_FETCH_ALL, payload: res.data });
  };
};
