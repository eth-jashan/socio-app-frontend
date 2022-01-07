import axios from 'axios';
import api from '../../Constants/api';

export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CHANGE_AUTH_STAUS = 'CHANGE_AUTH_STAUS';

export const signupUser = ({email, password, name}) => {
    const creationDate = new Date()

      const body = {
        email,
        password,
        returnSecureToken : true
      }

    try {
      return async (dispatch, getState) => {
        const response = await fetch(`${api.SIGNUP_URL}${api.API_KEY.staging}`,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(body)
        });
        if (response.ok) {
          const res = await response.json()
          
          console.log('signup success =====>', res)

          const userObj = {
            email,
            password,
            name,
            creationDate
          }

          try {
            const response = await fetch(`${api.BASE_URL.staging}${api.routes.user}/${res.localId}`,{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify(userObj)
            })
            const user = await response.json()
            console.log('user obj id', res)
            userNewObj = {
              id:user.name,
              email,
              password,
              name,
              creationDate
            }
            console.log('Profile created !!!!!!')
            dispatch({type:SIGNUP_USER, user:userNewObj, uid:res.localId})

          } catch (error) {
            //handle error while signUp
          }

        } else {
          console.log('Unable to fetch data from the API BASE URL!');
        }
      };
    } catch (error) {
      // Add custom logic to handle errors
      console.log(error);
    }
  };