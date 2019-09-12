import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import rootReducer from './reducers';

const enhancers = [persistState(['app', 'searchForm'], { key: `stash` })];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
   const devToolsExtension = window.devToolsExtension;

   if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
   }
}

const composedEnhancers = compose(
   applyMiddleware(...middleware),
   ...enhancers
);

const store = createStore(rootReducer, composedEnhancers);

export default store;
