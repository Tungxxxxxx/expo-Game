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
    },
  ],
};

const userReducer = (state = initStateUsers, action) => {
  console.log('userReducer', state);
  return state;
};

export default userReducer;
