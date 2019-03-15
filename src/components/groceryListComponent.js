import React from 'react';

import ItemInputComponent from './itemInputComponent';
import ItemListComponent from './itemListComponent';

class GroceryListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: localStorage.items ?
        JSON.parse(localStorage.items).map(item => ({ ...item, id: +item.id })) :
        [
          { id: 0, name: 'banana', highlighted: false },
          { id: 1, name: 'carrot', highlighted: false },
          { id: 2, name: 'onions', highlighted: true },
        ],
    };

    this.nextId = this.state.items.reduce((acc, item) => Math.max(acc, item.id), 0) + 1;

    this.clearList = this.clearList.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidUpdate() {
    localStorage.items = JSON.stringify(this.state.items);
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

  updateItem(id, update) {
    this.setState((prevState) => {
      return ({
        items: prevState.items.map((item) => {
          return item.id === id ? { ...item, ...update } : item;
        }),
      });
    });
  }

  deleteItem(id) {
    this.setState((prevState) => {
      return ({ items: prevState.items.filter(item => item.id !== id) });
    });
  }

  render() {
    return (
      <div>
        <ItemInputComponent handleSubmit={this.addItem} />
        <ItemListComponent
          items={this.state.items}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />

        <button onClick={this.clearList}>Clear</button>
      </div >
    );
  }
}

export default GroceryListComponent;
