import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import movieSlice from './state/slices/moviesSlice';
import authSlice from './state/slices/authSlice';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  movieStore: movieSlice,
  authStore: authSlice,
});

const store = createStore(rootReducer, composedEnhancer);
export default store;
