import axios from "axios";

// Create a shared Axios instance
const api = axios.create({
  // The base URL for our API calls. All requests will be prefixed with this.
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
