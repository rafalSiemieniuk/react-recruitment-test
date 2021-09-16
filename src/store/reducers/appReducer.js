const initState = {
  products: [],
  productsLoading: false,
  lastCheckProductMessage: {},
  lastCheckProductMessageLoading: false,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };

    case 'SET_PRODUCTS_LOADING':
      return {
        ...state,
        productsLoading: action.payload,
      };

    case 'SET_LAST_CHECK_PRODUCT_MESSAGE':
      return {
        ...state,
        lastCheckProductMessage: action.payload,
      };
    case 'SET_LAST_CHECK_PRODUCT_MESSAGE_LOADING':
      return {
        ...state,
        lastCheckProductMessageLoading: action.payload,
      };
    default:
      return state;
  }
};

export const setProducts = (payload) => {
  return {
    type: 'SET_PRODUCTS',
    payload,
  };
};
export const setProductsLoading = (payload) => {
  return {
    type: 'SET_PRODUCTS_LOADING',
    payload,
  };
};
export const setLastCheckProductMessage = (payload) => {
  return {
    type: 'SET_LAST_CHECK_PRODUCT_MESSAGE',
    payload,
  };
};
export const setLastCheckProductMessageLoading = (payload) => {
  return {
    type: 'SET_LAST_CHECK_PRODUCT_MESSAGE_LOADING',
    payload,
  };
};

export default appReducer;
