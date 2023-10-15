//Danh sách user
const initStateProduct = {
  products: [
    {
      id: 1,
      name: 'XIAOMI PAD 6',
      title: 'Máy tính bảng Xiaomi pad 6',
      giá: 6990000,
      rateing: 4,
      avatar: require('../../assets/images/products/sg-11134201-7rbmf-ll3bwnklx35h9d.jpg'),
      images: [],
    },
    {
      id: 2,
      name: 'XIAOMI PAD 6',
      title: 'Điện thoại Iphone 15 promax',
      giá: 34000000,
      rateing: 1,
      avatar: require('../../assets/images/products/sg-11134201-7rbmf-ll3bwnklx35h9d.jpg'),
      images: [],
    },
    {
      id: 3,
      name: 'XIAOMI PAD 6',
      title: 'Điện thoại Xiaomi 1000',
      giá: 11990000,
      rateing: 4,
      avatar: require('../../assets/images/products/sg-11134201-7rbmk-llyi25uexya852.jpg'),
      images: [],
    },
    {
      id: 4,
      name: 'XIAOMI PAD 6',
      title: 'Điện thoại Xiaomi 2121',
      giá: 12121212,
      rateing: 5,
      avatar: require('../../assets/images/products/sg-11134201-7rbnl-lm8i0yy7ouy17d.jpg'),
      images: [],
    },
    {
      id: 5,
      name: 'XIAOMI PAD 6',
      title: 'Điện thoại samsung promax',
      giá: 40000000,
      rateing: 2,
      avatar: require('../../assets/images/products/sg-11134201-7rbma-ll3bvvc99sms18.jpg'),
      images: [],
    },
    {
      id: 6,
      name: 'XIAOMI PAD 6 PRO',
      title: 'Điện thoại Xiaomi lutanlu pro',
      giá: 20000000,
      rateing: 4,
      avatar: require('../../assets/images/products/sg-11134201-7rbm8-llyi1jr7cglh41.jpg'),
      images: [],
    },
    {
      id: 7,
      name: 'XIAOMI PAD 6',
      title: 'Điện thoại Xiaomi không pro',
      giá: 5000000,
      rateing: 4,
      avatar: require('../../assets/images/products/sg-11134201-7rbm4-ll3bv62686td13.jpg'),
      images: [],
    },
    {
      id: 8,
      name: 'XIAOMI PAD 6',
      title: 'Điện thoại Sony 4000',
      giá: 200008888,
      rateing: 4,
      avatar: require('../../assets/images/products/sg-11134201-7rbm2-llyi1nt5dhll12.jpg'),
      images: [],
    },
    {
      id: 9,
      name: 'XIAOMI PAD 6',
      title: 'Máy tính bảng Xiaomi pad 5',
      giá: 5000000,
      rateing: 4,
      avatar: require('../../assets/images/products/sg-11134201-7rbm1-ll3brbxgfyph09.jpg'),
      images: [],
    },
    {
      id: 10,
      name: 'XIAOMI PAD 6',
      title: 'Giày Nike Academy',
      giá: 1809000,
      rateing: 4,
      avatar: require('../../assets/images/products/137690925e6e_787a66299877405d85e70b0d75d7961d_1024x1024.jpg'),
      images: [],
    },
    {
      id: 11,
      name: 'XIAOMI PAD 6',
      title: 'Ipad 100 pro 1 TB',
      giá: 290900000,
      rateing: 4,
      avatar: require('../../assets/images/products/sg-11134201-7r9a8-llq8m0jlpgsr0c.jpg'),
      images: [],
    },
  ],
};

const productReducer = (state = initStateProduct, action) => {
  console.log('productReducer', state);
  return state;
};

export default productReducer;
