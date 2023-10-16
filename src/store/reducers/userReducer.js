import { Switch } from 'react-native-gesture-handler';

//Danh sách user
const initStateUsers = {
  users: [
    {
      id: 1,
      email: 'user1@email.com',
      username: 'user1',
      password: '1',
      userToken: 'token123',
      name: 'Phạm Thanh Tùng',
      nickname: 'Tùng Phạm',
      money: 1000000,
      avatar: require('../../assets/images/tungpt.png'),
      shoppingBags: [],
    },
    {
      id: 2,
      email: 'user1@email.com',
      username: 'user2',
      password: '2',
      userToken: 'token123',
      name: 'Sở Lưu Hương',
      nickname: 'Hương Sở',
      money: 999999,
      avatar: require('../../assets/images/tx2.jpg'),
      shoppingBags: [],
    },
    {
      id: 3,
      email: 'user1@email.com',
      username: 'user3',
      password: '3',
      userToken: 'token123',
      name: 'Ái Tân Giác La',
      nickname: 'Huyền Diệp',
      money: 898999999,
      avatar: require('../../assets/images/tx3.jpg'),
      shoppingBags: [{ product: {}, qty: 0 }],
    },
  ],
  shoppingBagsUserLogin: [{ product: {}, qty: 0 }],
};
function GetUsersAddedProduct(state, userLogin, action) {
  if (userLogin) {
    const usersCopy = [...state.users];
    const findIndex = usersCopy.findIndex((item) => item.id === userLogin.id);
    const shoppingBagsCopy = [...usersCopy[findIndex].shoppingBags];
    // Tìm product đã tồn tại chưa
    const findProductIndex = shoppingBagsCopy.findIndex((item) => item.product.id === action.payload.product.id);
    if (findProductIndex !== -1) {
      console.log('>>>Đã tồn tại');
      console.log(JSON.stringify(shoppingBagsCopy[findProductIndex]));
      shoppingBagsCopy[findProductIndex].qty = shoppingBagsCopy[findProductIndex].qty + 1;
    } else {
      console.log('>>>chưa tồn tại');
      shoppingBagsCopy.push({ product: action.payload.product, qty: 1 });
    }
    // Set shoppingBags cho usersCopy
    usersCopy[findIndex].shoppingBags = shoppingBagsCopy;
    const shoppingBagsUserLogin = shoppingBagsCopy;
    return { usersAddedProduct: usersCopy, shoppingBagsUserLogin: shoppingBagsUserLogin };
  } else {
    return state.users;
  }
}
const userReducer = (state = initStateUsers, action) => {
  if (action && action.payload && action.payload.userLogin) {
    const { usersAddedProduct, shoppingBagsUserLogin } = GetUsersAddedProduct(state, action.payload.userLogin, action);
    switch (action.type) {
      case 'ADD_PRODUCT_BAG':
        return { ...state, users: usersAddedProduct, shoppingBagsUserLogin: shoppingBagsUserLogin };
      default:
        return state;
    }
  } else {
    return state;
  }
};

export default userReducer;
