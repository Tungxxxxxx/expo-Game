import { createStore, combineReducers } from 'redux';
// Import các reducer
import userReducer from './reducers/userReducer';
import userLoginReducer from './reducers/userLoginReducer';
// Tạo reducer tổng
const rootReducer = combineReducers({
  users: userReducer,
  userLogin: userLoginReducer,
  //các reduecer khác nếu có
});
//Tạo store cho redux
const store = createStore(rootReducer);
export default store;
