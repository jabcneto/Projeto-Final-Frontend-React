import axios from "axios";

const api = axios.create({
  baseURL: "http://residencia-ecommerce.us-east-1.elasticbeanstalk.com",
});

api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default api;
