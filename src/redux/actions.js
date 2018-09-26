export const AddItem = itemName => ({
  type: 'ADD_ITEM',
  itemName,
});

export const DeleteItem = itemId => ({
  type: 'DELETE_ITEM',
  itemId,
});

export const UpdateItem = (itemId, itemName) => ({
  type: 'UPDATE_ITEM_NAME',
  itemId,
  itemName,
});

export const ToggleItemPurchase = itemId => ({
  type: 'TOGGLE_ITEM_PURCHASE',
  itemId,
});
