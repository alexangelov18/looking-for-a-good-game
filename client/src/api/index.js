import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

// const urlLol='http://localhost:5000/lolGroups';

export const fetchLolGroups = (page) => API.get(`/lolGroups?page=${page}`);
export const fetchLolGroupsBySearch = (searchQuery) => API.get(`/lolGroups/search?searchQuery=${searchQuery.search || 'none'}&gameMode=${searchQuery.gameMode}&tier=${searchQuery.tier}`);
export const createLolGroup = (newLolGroup) => API.post('/lolGroups', newLolGroup); 
export const updateLolGroup = (id, updatedLolGroup) => API.patch(`/lolGroups/${id}`, updatedLolGroup);
export const deleteLolGroup =  (id) => API.delete(`/lolGroups/${id}`);
export const joinLolGroup = (id) => API.patch(`/lolGroups/${id}/joinLolGroup`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);