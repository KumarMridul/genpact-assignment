import {
    FETCH_USER_BEGIN,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
  } from './action';

export const initialState = {
    item: {},
    loading: false,
    error: null
  };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_BEGIN: {
      console.log(action);

      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case FETCH_USER_SUCCESS: {
        return {
            ...state,
            loading: false,
            item: action.payload.userData
          };
    }

    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        item: {}
      };

    default:
      return state;
  }
};

export default appReducer;