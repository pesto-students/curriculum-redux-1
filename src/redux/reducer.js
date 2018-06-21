
const groceryList = (state = [], action) => { //eslint-disable-line
  switch (action.type) {
    case ('ADD_ITEM'): return [...state, {
      id: action.id,
      name: action.name,
      status: true,
    }];
    case ('REMOVE_ITEM'): return state.filter(item => item.id !== action.id);
    case ('CLEAR_LIST'): return [];
    case ('EDIT'): return state;
    default: return state;
  }
};
