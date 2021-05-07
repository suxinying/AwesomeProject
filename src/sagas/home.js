import {takeLatest, takeEvery, call, put} from 'redux-saga/effects';
import {MALL_TYPES} from '../constants/actionsTypes';
import {getHomeContent} from '../api/home';

function* handleHomeContent() {
  try {
    yield put({type: MALL_TYPES.HOME_CONTENT_LOADING});
    const homeContent = yield call(getHomeContent);
    yield put({
      type: MALL_TYPES.HOME_CONTENT_SUCCESS,
      payload: homeContent.data,
    });
  } catch (e) {}
}

export default function* watcherSaga() {
  yield takeLatest(MALL_TYPES.HOME_CONTENT_REQUEST, handleHomeContent);
}
