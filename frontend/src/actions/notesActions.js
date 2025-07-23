import axios from 'axios';
import {
    NOTES_LIST_SUCCESS,
    NOTES_LIST_REQUEST,
    NOTES_LIST_FAIL,
    NOTES_CREATE_REQUEST,
    NOTES_CREATE_SUCCESS,
    NOTES_CREATE_FAIL
} from '../constants/notesConstants';

export const listNotes = () => async (dispatch, getState) => {
  try {
    dispatch({ type: NOTES_LIST_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,    //sending bearer token for authentication
      },
    };

    const { data } = await axios.get('/api/notes', config);

    dispatch({
      type: NOTES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTES_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
}

export const createNote = (title, content, category) => async (dispatch, getState) => {
  try {
    dispatch({ type: NOTES_CREATE_REQUEST });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,    //sending bearer token for authentication
      },
    };

    const { data } = await axios.post('/api/notes/create', { title, content, category }, config);

    dispatch({
      type: NOTES_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTES_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
}