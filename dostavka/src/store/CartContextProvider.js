import CartContext from './Cart-context';
import { useReducer } from 'react';
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existinCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existinCartItemIndex];

    let updatedItem;
    let updatedItems;
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existinCartItemIndex] = updatedItem;
    } else {
      updatedItem = {
        ...action.item,
      };
      updatedItems = state.items.concat(updatedItem);
    }
    return { items: updatedItems, totalAmount: updateTotalAmount };
  }
  if (action.type === 'REMOVE_ITEM') {
    const existinCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existinCartItemIndex];
    const updateTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existinCartItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updateTotalAmount };
  }
  if (action.type === 'DELETE_ITEM') {
    const existinCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existinCartItemIndex];
    const updateTotalAmount =
      state.totalAmount - existingCartItem.price * existingCartItem.amount;
    let updatedItems;
    updatedItems = state.items.filter((item) => item.id !== action.id);
    return { items: updatedItems, totalAmount: updateTotalAmount };
  }

  return defaultCartState;
};
const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
  };
  const deleteItemHandler = (id) => {
    dispatchCartAction({ type: 'DELETE_ITEM', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    deleteItem: deleteItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
