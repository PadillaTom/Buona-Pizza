// import localcart from './localcart';
export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {


  
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'ADD_BASKET':
      // 1) Actual state, Actual Basket is changed to : Actual State + Action of the Item
      return { ...state, basket: [...state.basket, action.item] };

    case 'INCREASE_AMOUNT':
      let newCartInc = [...state.basket].map((item) => {
        return item.id === action.id
          ? { ...item, amount: item.amount + 1 }
          : { ...item };
      });
      return { ...state, basket: newCartInc };
    case 'DECREASE_AMOUNT':
      let newCartDec = [...state.basket].map((item) => {
        return item.id === action.id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      return { ...state, basket: newCartDec };
    case 'REMOVE_BASKET':
      // 1) Clone Actual Basket:
      let newBasket = [...state.basket];
      // 2) Found the Index of the item we need(page)
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // 3) If Exists: Cut it out (SPLICE 1)
      if (index >= 0) {
        // Item DO Exists in basket, remove it:
        newBasket.splice(index, 1);
      } else {
        console.warn(`No such item ID: ${action.id}`);
      }
      // 4) Return the new Basket (With the item Spliced)
      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default reducer;
