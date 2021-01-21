const defaultState = {
  users: [],
  isFetchingUSers: false,
  isFetchingUsersError: false,
  isFetchingUsersSuccess: false
}

import * as constant from '../constants/constant';

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constant.FETCHING_USERS:
      return {
        ...state,
        isFetchingUSers: true,
        isFetchingUsersError: false,
        isFetchingUsersSuccess: false
      };
    case constant.FETCHING_USERS_SUCCESS:      
      return {
        ...state,
        isFetchingUSers: false,
        isFetchingUsersError: false,
        isFetchingUsersSuccess: true,
        users: action.data.users,
        count: action.data.count
      };
    case constant.FETCHING_USERS_ERROR:
      return {
        ...state,
        isFetchingUSers: false,
        isFetchingUsersError: true,
        isFetchingUsersSuccess: false
      };
    default: return state;
  }
};

export default userReducer;
