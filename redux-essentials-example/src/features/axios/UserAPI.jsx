import axios from "axios";

export const userURL = axios.create({
  baseURL: "http://202.131.117.92:7152/api",
});


// NOTE: Add a request interceptor
export const postRequestInterceptor = () => {
  userURL.interceptors.request.use(
    function (config) {
      // Do something before request is sent

      console.log("From the request interceptor  ");

      //  document.getElementById("overlay").style.display = "block";

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
};

//NOTE: Add a response interceptor
export const postResponseInterceptor = () => {
  userURL.interceptors.response.use(
    function (response) {
      
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      console.log("From the response interceptor  ");

      //document.getElementById("overlay").style.display = "none";
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
};
