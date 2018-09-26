import React from 'react';
import PropTypes from 'prop-types';

function ItemListComponent(props) {
  return (
    <ul style={{ listStyleType: 'none' }}>
      {
        props.items.map((item, idx) => {
          return (
            <li
              key={item.id}
              style={{ color: item.highlighted ? 'red' : 'black' }}
            >
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  props.handleToggleItem(idx);
                }}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {idx + 1} {item.name}
              </a>

              <button
                href=""
                onClick={() => {
                  props.deleteItem(idx);
                }}
                style={{ marginLeft: '30px' }}
              >
                X
              </button>
            </li>
          );
        })
      }
    </ul >
  );
}

ItemListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemListComponent;
