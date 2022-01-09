import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import movieSlice from './state/slices/moviesSlice';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  movieStore: movieSlice,
});

const store = createStore(rootReducer, composedEnhancer);
export default store;
