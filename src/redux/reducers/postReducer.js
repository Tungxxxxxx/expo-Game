import * as API from '../../common/APIActionType';
const initState = {
  loadingPost: false,
  user: null,
  error: null,
};

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case API.FETCH_POST_CREATE_REQUEST:
      return { ...state, loadingPost: true };
    case API.FETCH_POST_CREATE_SUCCESS:
      return { ...state, loadingPost: false, user: action.payload, error: null };
    case API.FETCH_POST_CREATE_REQUEST:
      return { ...state, loadingPost: false, user: null, error: action.payload };

    default:
      return state;
  }
};
