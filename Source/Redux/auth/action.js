import axios from 'axios';

export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CHANGE_AUTH_STAUS = 'CHANGE_AUTH_STAUS';

export const signupUser = () => {
    try {
      return async dispatch => {
        const response = await axios.get(`${BASE_URL}`);
        if (response.data) {
          dispatch({
            type: GET_BOOKS,
            payload: response.data
          });
        } else {
          console.log('Unable to fetch data from the API BASE URL!');
        }
      };
    } catch (error) {
      // Add custom logic to handle errors
      console.log(error);
    }
  };