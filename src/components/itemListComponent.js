import React from 'react';
import PropTypes from 'prop-types';

function ItemListComponent(props) {
  return (
    <ul style={{ listStyleType: 'none' }}>
      {
        props.items.map((item, idx) => {
          return (
            <li
              // eslint-disable-next-line
              key={idx}
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
