import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.js';

export default (lolGroups = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...lolGroups, action.payload];

        case UPDATE:
            return lolGroups.map((lolGroup) => lolGroup._id === action.payload._id ? action.payload : lolGroup );

        case DELETE:
            return lolGroups.filter((lolGroup) => lolGroup._id !== action.payload);

        default:
            return lolGroups;
    }
};