import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '@state/reducer/index';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
