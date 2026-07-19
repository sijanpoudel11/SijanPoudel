import axios from "axios";

const publicApi = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export default publicApi;
