import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

const client = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "http://10.254.61.24:8095/",
  responseType: "json",
});

const config = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    /*  request: [{
              success: function ({getState, dispatch, getSourceAction}, req) {
                  console.log(req); //contains information about request object
                  //...
              },
              error: function ({getState, dispatch, getSourceAction}, error) {
                  //...
              }
          }
          ],*/
    response: [
      {
        success: function ({ getState, dispatch, getSourceAction }, req) {
          return req;
        },
        error: function ({ getState, dispatch, getSourceAction }, error) {
          return Promise.reject(error);
        },
      },
    ],
  },
};

const middleware = axiosMiddleware(client, config);

export default middleware;
