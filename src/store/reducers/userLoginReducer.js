//user đã login vào ứng dụng
const initStateUserLogin = { userLogin: null };
const userLoginReducer = (state = initStateUserLogin, action) => {
  // Dùng switch-case để xử lý các action, khi login component sẽ gửi action có type làSET_USER_LOGIN
  // payload là data gửi lên
  switch (action.type) {
    case 'SET_USER_LOGIN':
      return { ...state, userLogin: action.payload };
    default:
      // Nếu ko có gì thì return state ban đầu
      return state;
  }
};
export default userLoginReducer;
