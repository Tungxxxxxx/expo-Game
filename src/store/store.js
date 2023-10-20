import { createStore, combineReducers } from 'redux';
// Import các reducer
import userReducer from './reducers/userReducer';
import userLoginReducer from './reducers/userLoginReducer';
import productReducer from './reducers/productReducer';
import RatingReducer from './reducers/RatingReducer';
// Tạo reducer tổng
const rootReducer = combineReducers({
  users: userReducer,
  userLogin: userLoginReducer,
  products: productReducer,
  ratings: RatingReducer,
  //các reduecer khác nếu có
});
//Tạo store cho redux
const store = createStore(rootReducer);
export default store;
