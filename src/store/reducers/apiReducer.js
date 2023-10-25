import axios from 'axios';
import * as API from '../../common/API';
const initState = {};
const fetchGetListUsers = async () => {
  try {
    const res = await axios.get(API.PATH_GET_LIST_USERS);
    console.log('api: ', res.data.data);
    return { data: res.data.data, message: API.SUCCESS };
  } catch (error) {
    return { data: null, message: error.message };
  }
};
const fetchGetSingleUser = async () => {
  try {
    const res = await axios.get(API.PATH_GET_SINGLE_USER);
    return res.data.data;
  } catch (error) {
    return error.message;
  }
};

// fetchGetListUsers
// fetchGetSingleUser
// fetchGetSingleUserNotFound
// fetchGetListResource
// fetchGetSingleResource
// fetchGetSingleResourceNotFound
// fetchPostCreate
// fetchPutUpdate
// fetchPatchUpdate
// fetchDeleteDelete
// fetchPostRegisterSuccessful
// fetchPostRegisterUnSuccessful
// fetchPostLoginSuccessful
// fetchPostLoginUnSuccessful
// fetchGetDelayedResponse

export const apiReducer = (state = initState, action) => {
  switch (action.type) {
    case API.GET_LIST_USERS:
      console.log('api: ');
      return { ...state, listUsers: fetchGetListUsers() };

    default:
      return state;
  }
};
//   export const GetSingleUserReducer =
//   export const GetSingleUserNotFoundReducer =
//   export const GetListResourceReducer =
//   export const GetSingleResourceReducer =
//   export const GetSingleResourceNotFoundReducer =
//   export const PostCreateReducer =
//   export const PutUpdateReducer =
//   export const PatchUpdateReducer =
//   export const DeleteDeleteReducer =
//   export const PostRegisterSuccessfulReducer =
//   export const PostRegisterUnSuccessfulReducer =
//   export const PostLoginSuccessfulReducer =
//   export const PostLoginUnSuccessfulReducer =
//   export const GetDelayedResponseReducer =
