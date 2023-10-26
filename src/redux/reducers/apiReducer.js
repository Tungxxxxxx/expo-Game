import * as API from '../../common/APIActionType';
//Tạo sate ban đầu
const initState = {
  data: [],
  singleUser: {},
  loading: false,
  error: null,
};
export const ListUsersReducer = (state = initState, action) => {
  console.log('action.type', action);
  switch (action.type) {
    case API.FETCH_GET_LIST_USERS_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_LIST_USERS_SUCCESS:
      return { ...state, data: action.payload, loading: false, singleUser: {}, error: null };
    case API.FETCH_GET_LIST_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload, singleUser: {}, data: [] };
    case API.FETCH_GET_SINGLE_USER_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_SINGLE_USER_SUCCESS:
      return { ...state, data: [], singleUser: action.payload, loading: false, error: null };
    case API.FETCH_GET_SINGLE_USER_FAILURE:
      return { ...state, loading: false, error: action.payload, singleUser: {}, data: [] };
    case API.FETCH_GET_SINGLE_USER_NOT_FOUND_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_SINGLE_USER_NOT_FOUND_SUCCESS:
      return { ...state, data: [], singleUser: action.payload, loading: false, error: null };
    case API.FETCH_GET_SINGLE_USER_NOT_FOUND_FAILURE:
      return { ...state, data: [], singleUser: {}, loading: false, error: action.payload };
    case API.FETCH_GET_LIST_RESOURCE_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_LIST_RESOURCE_SUCCESS:
      return { ...state, data: action.payload, singleUser: {}, loading: false, error: null };
    case API.FETCH_GET_LIST_RESOURCE_FAILURE:
      return { ...state, data: [], singleUser: {}, loading: false, error: action.payload };
    case API.FETCH_GET_SINGLE_RESOURCE_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_SINGLE_RESOURCE_SUCCESS:
      return { ...state, data: [], singleUser: action.payload, loading: false, error: null };
    case API.FETCH_GET_SINGLE_RESOURCE_FAILURE:
      return { ...state, data: [], singleUser: {}, loading: false, error: action.payload };
    case API.FETCH_GET_SINGLE_RESOURCE_NOTFOUND_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_SINGLE_RESOURCE_NOTFOUND_SUCCESS:
      return { ...state, data: [], singleUser: action.payload, loading: false, error: null };
    case API.FETCH_GET_SINGLE_RESOURCE_NOTFOUND_FAILURE:
      return { ...state, data: [], singleUser: {}, loading: false, error: action.payload };
    case API.FETCH_GET_DELAYED_RESPONSE_REQUEST:
      return { ...state, loading: true };
    case API.FETCH_GET_DELAYED_RESPONSE_SUCCESS:
      return { ...state, data: [], singleUser: action.payload, loading: false, error: null };
    case API.FETCH_GET_DELAYED_RESPONSE_FAILURE:
      return { ...state, data: [], singleUser: {}, loading: false, error: action.payload };
    default:
      return state;
  }
};
//Sau đó tạo middleware sử dụng redux thunk
