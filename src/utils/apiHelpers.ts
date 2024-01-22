import axios from "axios";

const BASE_URL = "http://localhost:9001/api/v1";

const instance = axios.create({ baseURL: BASE_URL });

instance.interceptors.request.use(
  (config) => {
    // Passing API KEY as default query
    config.params = { ...config.params };
    return config;
  },
  (err) => {
    // Error from Request will be handled here
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res.data.data;
  },
  (err) => {
    // Error from Response will be handled here
    return Promise.reject(err);
  }
);

export default instance;
