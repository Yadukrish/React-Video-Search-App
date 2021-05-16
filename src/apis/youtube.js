import axios from 'axios';
const KEY ='AIzaSyCn97hL3t0RyaETwNx3xPg9qJJ2cyA7lL8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
})