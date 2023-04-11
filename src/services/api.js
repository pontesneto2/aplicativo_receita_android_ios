import axios from 'axios';

/* 
    // Rodar com IPV4: json-server --watch -d 180 --host 172.28.2.234 db.json
*/

const api = axios.create({
    baseURL: 'http://172.28.3.79:3000'
})

export default api;