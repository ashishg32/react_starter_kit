import axios from 'axios';

import * as constant from '../constants/constant';

const fetchingUsers =() => {
  return {
    type:constant.FETCHING_USERS,
    data: []
  }
};

const fetchingUsersSuccess =(data) => {
  return {
    type:constant.FETCHING_USERS_SUCCESS,
    data
  }
};

const fetchingUsersError =() => {
  return {
    type:constant.FETCHING_USERS_ERROR,
    data: []
  }
};

const fetchUsers = (page) => {
  const url = `https://swapi.co/api/people/?page=${page}`;
  return (dispatch) => {
    dispatch(fetchingUsers());
    const promise = axios.get(url);
    promise.then(response => {      
      const { results, count } = response.data;
      dispatch(fetchingUsersSuccess({users: results, count}));
    })
    .catch(error => {
      dispatch(fetchingUsersError());
    });
  }
};

export default fetchUsers;
