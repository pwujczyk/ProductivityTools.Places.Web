import axios from 'axios'
import { config } from '../config.js'

async function getDate() {
    const response = await axios.get(`${config.PATH_BASE}/Date`)
    return response.data;
}

async function getPlace(id) {
    const response = await axios.get(`${config.PATH_BASE}/Place?id=${id}`);
    return response.data;
}

async function getPlaceList() {
    const response = await axios.get(`${config.PATH_BASE}/PlaceList`);
    return response.data;
}

async function newPlace(data) {
    const response = await axios.post(`${config.PATH_BASE}/NewPlace`,data);
    let r=response.data;
    return r;
}

async function updatePlace(place){

    const response = await axios.post(`${config.PATH_BASE}/UpdatePlace`,place);
    let r=response.data;
    return r; 
}


// async function newVisit(){
//     let data={Comment:"pawel ma kota"}
//     const response=await axios.post(`${config.PATH_BASE}/NewVisit`,data);
//     let r=response.data;
//     return r;
// }

async function uploadPhoto(photo){
    const formData = new FormData();
     
    // Update the formData object
    formData.append(
      "file",
      photo,
      photo.name
    );
   
    // Details of the uploaded file
    console.log(photo);
   
    // Request made to the backend api
    // Send formData object
    const response=await axios.post(`${config.PATH_BASE}/uploads`, formData);
    return response.data;
}


const service = {
    getDate,
    getPlace,
    getPlaceList,
    newPlace,
    updatePlace,
    uploadPhoto
}

export default service