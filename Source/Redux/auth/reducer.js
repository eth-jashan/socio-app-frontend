import { SIGNUP_USER } from './action';


const initialState = {
  user: [],
  uid: null,
  authStatus:'NOT_CREATED'
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, user: action.user, uid:action.uid, authStatus:'LOGGED_IN' };
    default:
      return state;
  }
}

export default authReducer;