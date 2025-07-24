import { configureStore } from '@reduxjs/toolkit';
import { userLoginReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import { notesCreateReducer, notesDeleteReducer, notesListReducer, notesUpdateReducer } from './reducers/notesReducers';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const preloadedState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    notesList: notesListReducer,
    notesCreate: notesCreateReducer,
    notesUpdate: notesUpdateReducer,
    notesDelete: notesDeleteReducer,
    userUpdate: userUpdateReducer,
  },
  preloadedState,
  // DevTools are automatically enabled in development
});

export default store;
