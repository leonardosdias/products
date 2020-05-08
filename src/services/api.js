import axios from "axios";

const api = axios.create({ baseURL: "http://18.224.181.162:3001/api" });

export default api;