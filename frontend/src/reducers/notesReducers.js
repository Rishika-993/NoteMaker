import { NOTES_LIST_FAIL, NOTES_LIST_REQUEST, NOTES_LIST_SUCCESS } from "../constants/notesConstants";

export const notesListReducer = (state = { notes: [] }, action) => {
    switch (action.type) {
        case NOTES_LIST_REQUEST:
            return { loading: true, notes: [] };
        case NOTES_LIST_SUCCESS:
            return { loading: false, notes: action.payload };
        case NOTES_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}