import React from 'react';

import ItemInputComponent from './itemInputComponent';
import ItemListComponent from './itemListComponent';

class GroceryListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'banana', highlighted: false },
        { name: 'carrot', highlighted: false },
        { name: 'onions', highlighted: true },
      ],
    };

    this.clearList = this.clearList.bind(this);
    this.addItem = this.addItem.bind(this);
    this.toggleItemHighlight = this.toggleItemHighlight.bind(this);
  }

  clearList() {
    this.setState({ items: [] });
  }

  addItem(name) {
    this.setState((prevState) => {
      const newItems = prevState.items.concat([]);
      newItems.push({ name, highlighted: false });
      return ({ items: newItems });
    });
  }

  toggleItemHighlight(idx) {
    this.setState((prevState) => {
      const newItems = prevState.items.concat([]);
      newItems[idx].highlighted = !newItems[idx].highlighted;
      return ({ items: newItems });
    });
  }

  render() {
    return (
      <div>
        <ItemInputComponent handleSubmit={this.addItem} />
        <ItemListComponent
          items={this.state.items}
          handleToggleItem={this.toggleItemHighlight}
        />

        <button onClick={this.clearList}>Clear</button>
      </div>
    );
  }
}

export default GroceryListComponent;
