import {fork} from 'redux-saga/effects';
import homeSagas from '../sagas/home';
export default function* root() {
  yield fork(homeSagas);
}
