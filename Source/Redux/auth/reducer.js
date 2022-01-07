import { SIGNUP_USER } from './action';


const initialState = {
  user: [],
  uid: null,
  authStatus:'NOT_CREATED'
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default authReducer;