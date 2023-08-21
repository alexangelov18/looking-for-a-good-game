import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_LOL_GROUP, COMMENT_LOL_GROUP } from '../constants/actionTypes.js';

export default (state = { isLoading: true, lolGroups: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true};

        case END_LOADING:
            return { ...state, isLoading: false};
            
        case FETCH_ALL:
            return {
                ...state,
                lolGroups: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };

        case FETCH_BY_SEARCH:
            return {...state, lolGroups: action.payload.data };

        case FETCH_LOL_GROUP:
            return {...state, lolGroup: action.payload.lolGroup };

        case CREATE:
            return { ...state, lolGroups: [ ...state.lolGroups, action.payload ] };

        case UPDATE:
            return { ...state, lolGroups: state.lolGroups.map((lolGroup) => lolGroup._id === action.payload._id ? action.payload : lolGroup ) };

        case DELETE:
            return { ...state, lolGroups: state.lolGroups.filter((lolGroup) => lolGroup._id !== action.payload) };

        case COMMENT_LOL_GROUP:
            return {
                ...state,
                lolGroups: state.lolGroups.map((lolGroup) => {
                    if(lolGroup._id === action.payload._id) return action.payload;

                    return lolGroup;
                })
            }

        default:
            return state;
    }
};