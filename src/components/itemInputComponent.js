import React from 'react';
import PropType from 'prop-types';

class ItemInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.updateNewItemName = this.updateNewItemName.bind(this);
    this.submitNewItem = this.submitNewItem.bind(this);
  }

  updateNewItemName(e) {
    this.setState({ name: e.target.value });
  }

  submitNewItem(e) {
    e.preventDefault();
    const newItem = this.state.name;
    this.setState({ name: '' });
    this.props.handleSubmit(newItem);
  }

  render() {
    return (
      <form onSubmit={this.submitNewItem}>
        <label htmlFor="new-item-input">Item:
          <input
            type="text"
            name="item"
            required
            id="new-item-input"
            onChange={this.updateNewItemName}
            value={this.state.name}
          />
        </label>

        <input type="submit" value="Add" />
      </form>
    );
  }
}

ItemInputComponent.propTypes = {
  handleSubmit: PropType.func.isRequired,
};

export default ItemInputComponent;
