const initState = {
  currentBags: [],
};

const currentBagReducer = (state = initState, action) => {
  if (action && action.payload && action.payload.userLogin) {
    switch (action.type) {
      case 'ADD_PRODUCT_BAG':
        return { ...state, currentBags: [...state.currentBags, action.payload.product] };
      default:
        return state;
    }
  } else {
    return state;
  }
};
export default currentBagReducer;
