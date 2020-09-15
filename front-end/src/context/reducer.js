export const initialState = {
  basket: [],
  user: null,
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
    return {
      ...state,
      user: action.user
      }
      case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }
    case 'Add_to_basket':
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
    case 'Remove_from_basket':
      let newBasket = [...state.basket]
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(action.id)
      }
      return {...state, basket: newBasket }
    default:
      return state;
  }
}

export default reducer