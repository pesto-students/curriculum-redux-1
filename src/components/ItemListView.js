import React from 'react';
import { connect } from 'react-redux';

import ItemViewComponent from './itemView';

const ItemList = ({ items }) => {
  const list = items.map(item => <ItemViewComponent item={item} key={item.id} />);
  return (
    <ul>
      {list}
    </ul>
  );
};

const mapStateToProps = state => ({
  items: state.items,
});

// const mapActionToProps = {
//   AddItem,
// };

const ItemListViewApp = connect(mapStateToProps, null)(ItemList);

export default ItemListViewApp;

