import {fetchUserBegin,fetchUserSuccess, fetchUserFailure } from "./action";

export function fetchUser(userId) {
    return dispatch => {
      dispatch(fetchUserBegin(userId));
      return fetch(`https://reqres.in/api/users/${userId}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchUserSuccess(json.data));
          return json;
        })
        .catch(error => dispatch(fetchUserFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }