// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';

// const reducer = combineReducers({
//   // your reducers here
// });

// const initialState = {
//   // your initial state here
// };
// const middleware = [thunk];

// const store = createStore(
//     reducer,
//     initialState,
//     // applyMiddleware(...middleware)
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import { userLoginReducer } from './reducers/userReducers';

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
  },
  // DevTools are automatically enabled in development
});

export default store;
