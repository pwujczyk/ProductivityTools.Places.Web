import axios from 'axios'
import { config } from '../config.js'

async function getDate() {
    const response = await axios.get(`${config.PATH_BASE}/Date`)
    return response.data;
}

async function getPlaceList() {
    const response = await axios.get(`${config.PATH_BASE}/PlaceList`);
    return response.data;
}

async function newPlace(name) {
    let data = { name: name }
    const response = await axios.post(`${config.PATH_BASE}/NewPlace`,data);
    let r=response.data;
    return r;
}



const service = {
    getDate,
    getPlaceList,
    newPlace
}

export default service