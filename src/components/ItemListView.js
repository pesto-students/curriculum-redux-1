import React from 'react';
import { connect } from 'react-redux';

const ItemList = ({ items }) => {
  const list = items.map(item => <li><a href="">{item}</a></li>);
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

