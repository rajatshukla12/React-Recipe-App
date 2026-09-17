import axios from "axios";

const instance = axios.create({

    baseURL : "https://fakestoreapi.com/",
})



instance.interceptors.request.use(
  function (config) {
            console.log("Request--->", config)
    return config;
  },
  function (error) {
    // Do something with the request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
        console.log("Response--->", response)
    return response;
  },
  function (error) {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;