import { combineReducers } from 'redux';

const groceryReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          purchased: false,
        },
      ];
    case 'CLEAR_CART':
      return [];
    case 'PURCHASE_ITEM':
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            purchased: true,
          };
        }
        return item;
      });
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.id);
    case 'EDIT_ITEM':
      return state.filter((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            name: action.name,
          };
        }
        return item;
      });
    default:
      return state;
  }
};

export default combineReducers({
  groceryReducer,
});

