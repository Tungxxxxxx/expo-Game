import axios from 'axios';
import * as API from '../../common/API';
const fetchGetListUsers = async () => {
  try {
    const res = await axios.get(API.PATH_GET_LIST_USERS);
    return res.data.data;
  } catch (error) {
    return error.message;
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

export const GetListUsersReducer = (state, action) => {
  switch (action.type) {
    case API.GET_LIST_USERS:
      break;

    default:
      break;
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
