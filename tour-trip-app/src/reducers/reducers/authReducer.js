const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed ' + action.err.message
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        authError: null
      }
    case 'SIGNIN_ERROR':
      return {
        ...state,
        authError: action.err.message
      }
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
};

export default authReducer;