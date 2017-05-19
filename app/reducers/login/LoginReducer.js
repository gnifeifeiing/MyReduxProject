import * as Types from '../../constant/ActionTypes';
/**
 * 初始化状态
 */
const initState = {
  isLoading: true
}

let LoginReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.LOGIN_ISLOADING:
      return {
        ...state
      };
    case Types.LOGIN_OVER:
      return {
        ...state,
        isLoading: false,
        result: action.result
      };
    case Types.LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        result: action.e
      };
    default:
      return state;
  }
}

export default LoginReducer;