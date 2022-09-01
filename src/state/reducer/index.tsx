import { combineReducers } from 'redux';
import { reducer } from './reducer';

const reducers = combineReducers({ data: reducer });

export default reducers;

export type RootState = ReturnType<typeof reducers>;
