let globalID = 0;

export const addItem = item => ({
  type: 'ADD_ITEM',
  id: globalID++, //eslint-disable-line
  name: item,
});

export const removeItem = item => ({
  type: 'REMOVE_ITEM',
  id: globalID++, //eslint-disable-line
  name: item,
});
