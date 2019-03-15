import React from 'react';
import PropType from 'prop-types';

class ItemComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.item.name,
      editing: false,
    };
    this.startEditItem = this.startEditItem.bind(this);
    this.cancelEditItem = this.cancelEditItem.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.saveNameChange = this.saveNameChange.bind(this);
  }

  startEditItem() {
    this.setState({ editing: true });
  }

  cancelEditItem() {
    this.setState({ editing: false });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  saveNameChange() {
    this.setState({ editing: false });
    this.props.updateItem(this.props.item.id, { name: this.state.name });
  }

  render() {
    if (this.state.editing) {
      return (
        <li style={{ color: this.props.item.highlighted ? 'red' : 'black' }}>
          <span>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <button
              onClick={this.saveNameChange}
            >
              Save
            </button>
            <button
              onClick={this.cancelEditItem}
            >
              Cancel
            </button>
          </span>
        </li>
      );
    }

    return (
      <li style={{ color: this.props.item.highlighted ? 'red' : 'black' }}>
        <span>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              this.props.updateItem(this.props.item.id, {
                highlighted: !this.props.item.highlighted,
              });
            }}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {this.props.item.id}. {this.props.item.name}
          </a>

          <button
            href=""
            onClick={() => {
              this.props.deleteItem(this.props.item.id);
            }}
            style={{ marginLeft: '30px' }}
          >
            X
          </button>

          <button
            href=""
            onClick={this.startEditItem}
            style={{ marginLeft: '30px' }}
          >
            Edit
          </button>
        </span>
      </li>
    );
  }
}

ItemComponent.propTypes = {
  item: PropType.shape({
    id: PropType.number.isRequired,
    name: PropType.string.isRequired,
    highlighted: PropType.bool.isRequired,
  }).isRequired,
  updateItem: PropType.func.isRequired,
  deleteItem: PropType.func.isRequired,
};

export default ItemComponent;
