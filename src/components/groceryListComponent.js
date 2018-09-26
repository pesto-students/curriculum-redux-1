import React from 'react';

import ItemInputComponent from './itemInputComponent';
import ItemListComponent from './itemListComponent';

class GroceryListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 0, name: 'banana', highlighted: false },
        { id: 1, name: 'carrot', highlighted: false },
        { id: 2, name: 'onions', highlighted: true },
      ],
    };

    this.nextId = this.state.items.length;

    this.clearList = this.clearList.bind(this);
    this.addItem = this.addItem.bind(this);
    this.toggleItemHighlight = this.toggleItemHighlight.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  clearList() {
    this.setState({ items: [] });
  }

  addItem(name) {
    this.setState((prevState) => {
      const newItem = {
        id: this.nextId,
        name,
        highlighted: false,
      };
      this.nextId += 1;
      return ({ items: prevState.items.concat(newItem) });
    });
  }

  deleteItem(idx) {
    this.setState((prevState) => {
      const newItems = prevState.items.concat([]);
      newItems.splice(idx, 1);
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
          deleteItem={this.deleteItem}
        />

        <button onClick={this.clearList}>Clear</button>
      </div>
    );
  }
}

export default GroceryListComponent;
