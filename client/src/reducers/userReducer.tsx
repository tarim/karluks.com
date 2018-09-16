import * as types from '../actions/actionTypes'
const INITIAL_STATE = {
  authUser: [],
  error: '',
  authenticated: false,
  loading: false,
  reason:''
};

export function UserReducer(state = INITIAL_STATE, action:any) {
  switch (action.type) {
    case types.START_LOADING_AUTH:
      return { ...state,
        loading: true
      }
    case types.AUTH_USER:
      return { ...state,
        error: '',
        authUser: action.payload,
        loading: false,
        reason:''
      }
    case types.AUTHENTICATED:
      return { ...state,
        error: '',
        authenticated: true,
        loading: false,
        reason:''
      }
    case types.UNAUTH_USER:
      return { ...state,
        authenticated: false,
        error: '',
        authUser: [],
        loading: false,
        reason:''
      }
      case types.UNAUTH_ACCESS:
      return { ...state,
        authenticated: false,
        error: '',
        authUser: [],
        loading: false,
        reason: 'NO_ACCOUNT'
      }
    case types.AUTH_ERROR:
      return { ...state,
        error: action.payload,
        authenticated: false,
        authUser: [],
        loading: false,
        reason:''
      }
  }
  return state
}
