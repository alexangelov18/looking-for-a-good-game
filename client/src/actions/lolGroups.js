import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes.js';

export const getLolGroups = () => async (dispatch) => {
    
    try {
        const { data } = await api.fetchLolGroups();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }  
};

export const createLolGroup = (lolGroup) => async (dispatch) => {
    try {
        const { data } = await api.createLolGroup(lolGroup);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.request)
        console.log(error.response);
    }
};

export const updateLolGroup = (id, lolGroup) => async (dispatch) => {
    try {
        const { data } = await api.updateLolGroup(id, lolGroup);

        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
};

export const deleteLolGroup = (id) => async (dispatch) => {
    try {
        await api.deleteLolGroup(id);

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
};

export const joinLolGroup = (id) => async (dispatch) => {
    try {
        const { data } = await api.joinLolGroup(id);

        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}