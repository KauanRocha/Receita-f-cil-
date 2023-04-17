import axios from "axios"; 

/*

// Rodar com ipv4: json-server --watch -d 180 --host 10.100.123.17 db.json

*/

const api = axios.create({
    baseURL: 'http://10.100.123.17:3000'
})

export default api;