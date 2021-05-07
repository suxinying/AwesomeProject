import {MALL_TYPES} from '../constants/actionsTypes';
import Status from '../util/Status';

const initialState = {
  brandList: [],
  advertiseList: [],
  homeFlashPromotion: [],
  newProductList: [],
  hotProductList: [],
  subjectList: [],
  status: Status.DEFAULT,
};

export const homeReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case MALL_TYPES.HOME_CONTENT_LOADING:
      return {...state, status: Status.LOADING};
    case MALL_TYPES.HOME_CONTENT_SUCCESS:
      return {...state, status: Status.SUCCESS, ...payload};
    default:
      return state;
  }
};
