const Items = (state = { items: [] }, action) => {
  switch (action.type) {
    case 'ITEM_ADD': {
      return {
        ...state,
        items: [...state.items, action.item],
      };
    }

    default:
      return state;
  }
};

export default Items;
