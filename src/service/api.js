import axios from "axios";

const api = axios.create({
  baseURL: "https://api-castor.herokuapp.com",
});

api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default api;
