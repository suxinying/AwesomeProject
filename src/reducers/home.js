import {MALL_TYPES} from '../constants/actionsTypes';

const initialState = {
  slider: [],
};

export const homeReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case MALL_TYPES.HOME_CONTENT_REQUEST:
      return state;
    default:
      return state;
  }
};
