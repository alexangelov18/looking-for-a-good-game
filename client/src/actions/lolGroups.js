import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_LOL_GROUP, COMMENT_LOL_GROUP } from '../constants/actionTypes.js';

export const getLolGroup = (id) => async (dispatch) => {
    
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchLolGroup(id);

        dispatch({ type: FETCH_LOL_GROUP, payload: { lolGroup: data }});
        dispatch({ type: END_LOADING});
        
    } catch (error) {
        console.log(error);
    }  
};

export const getLolGroups = (page) => async (dispatch) => {
    
    try {
        dispatch({ type: START_LOADING });
        const { data: {data, currentPage, numberOfPages} } = await api.fetchLolGroups(page);
        console.log(data)
        dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages }});
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }  
};

export const getLolGroupsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const {data: { data } } = await api.fetchLolGroupsBySearch(searchQuery);
        
        dispatch({ type: FETCH_BY_SEARCH, payload: { data }});
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
};

export const createLolGroup = (lolGroup) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.createLolGroup(lolGroup);

        dispatch({ type: CREATE, payload: data });
        dispatch({ type: END_LOADING});
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

export const commentLolGroup = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.commentLolGroup(value, id);

       dispatch({ type: COMMENT_LOL_GROUP, payload: data})

       return data.comments;
    } catch (error) {
        console.log(error);
    }
}