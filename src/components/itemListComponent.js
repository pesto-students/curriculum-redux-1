import React from 'react';
import PropTypes from 'prop-types';

import ItemComponent from './itemComponent';

function ItemListComponent(props) {
  return (
    <ul style={{ listStyleType: 'none' }}>
      {
        props.items.map((item) => {
          return (
            <ItemComponent
              key={item.id}
              item={item}
              updateItem={props.updateItem}
              deleteItem={props.deleteItem}
            />
          );
        })
      }
    </ul>
  );
}

ItemListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ItemListComponent;
