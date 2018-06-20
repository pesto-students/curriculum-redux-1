let nextItemID = 0;

export const addItem = itemName => ({
  type: 'ADD_ITEM',
  id: nextItemID++, // eslint-disable-line
  name: itemName,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const purchaseItem = itemID => ({
  type: 'PURCHASE_ITEM',
  id: itemID,
});

export const deleteItem = itemID => ({
  type: 'DELETE_ITEM',
  id: itemID,
});

export const editItem = (itemID, itemName) => ({
  type: 'EDIT_ITEM',
  id: itemID,
  name: itemName,
});

