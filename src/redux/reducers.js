const Items = (state = { items: [] }, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = {
        id: `IT_${state.items.length}`,
        name: action.itemName,
        purchased: false,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    }

    case 'DELETE_ITEM': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.itemId),
      };
    }

    case 'UPDATE_ITEM_NAME': {
      const updatedItems = state.items.map((item) => {
        if (item.id === action.itemId) {
          return {
            ...item,
            name: action.itemName,
          };
        }
        return item;
      });

      return {
        ...state,
        items: updatedItems,
      };
    }

    case 'TOGGLE_ITEM_PURCHASE': {
      const updatedItems = state.items.map((item) => {
        if (item.id === action.itemId) {
          return {
            ...item,
            purchased: !item.purchased,
          };
        }
        return item;
      });

      return {
        ...state,
        items: updatedItems,
      };
    }

    default:
      return state;
  }
};

export default Items;
