import axios from "axios";

const api = axios.create({
  baseURL: "https://pinterest-clone-backend-bzqp.onrender.com/"
});

export default api;
