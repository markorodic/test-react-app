import { createStore } from 'redux';
import { initialState } from './components/Product/sample-products'
import rootReducer from './reducers/index';

const store = createStore(rootReducer, initialState);

export default store;