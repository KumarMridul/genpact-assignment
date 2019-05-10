// types of action

export const FETCH_USER_BEGIN = "FETCH_USER_BEGIN";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

  // actions
  
  export const fetchUserBegin = userID => ({
    type: FETCH_USER_BEGIN,
    payload: userID
  });

  export const fetchUserSuccess = userData => ({
    type: FETCH_USER_SUCCESS,
    payload: { userData }
  });
  
  export const fetchUserFailure = error => ({
    type: FETCH_USER_FAILURE,
    payload: { error }
  });
  
  export default {
    fetchUserBegin,
    fetchUserSuccess,
    fetchUserFailure
  };