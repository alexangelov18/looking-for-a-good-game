import axios from 'axios';

const urlLol='http://localhost:5000/lolGroups';

export const fetchLolGroups = () => axios.get(urlLol);

export const createLolGroup = (newLolGroup) => axios.post(urlLol, newLolGroup); 
export const updateLolGroup = (id, updatedLolGroup) => axios.patch(`${urlLol}/${id}`, updatedLolGroup);
export const deleteLolGroup =  (id) => axios.delete(`${urlLol}/${id}`);
export const joinLolGroup = (id) => axios.patch(`${urlLol}/${id}/joinLolGroup`);