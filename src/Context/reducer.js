export const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_BASKET':
      //Logic for Adding to cart
      return { ...state, basket: [...state.basket, action.item] };

    case 'REMOVE_BASKET':
      // Logic
      return { state };

    default:
      return state;
  }
}

export default reducer;
