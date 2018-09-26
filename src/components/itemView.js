import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToggleItemPurchase, DeleteItem } from '../redux/actions';
import FormConnectedApp from './FormItem';

class ItemView extends Component {
  state = {
    isEditMode: false,
  };

  purchaseItem = (event) => {
    event.preventDefault();
    this.props.ToggleItemPurchase(this.props.item.id);
  }

  editItem = () => {
    this.setState({
      isEditMode: true,
    });
  }

  deleteItem = () => {
    this.props.DeleteItem(this.props.item.id);
  }

  itemSaved = () => {
    this.setState({
      isEditMode: false,
    });
  }

  render() {
    const { item } = this.props;
    if (this.state.isEditMode) {
      return <FormConnectedApp item={item} onFinish={this.itemSaved} />;
    }

    return (
      <li key={item.id}>
        <a href="" onClick={this.purchaseItem} className={item.purchased ? 'link-active' : ''}>{item.name}</a>
        <button type="button" onClick={this.editItem}>Edit</button>
        <button type="button" onClick={this.deleteItem}>Delete</button>
      </li>
    );
  }
}

const mapActionToProps = {
  ToggleItemPurchase,
  DeleteItem,
};

const ItemViewComponent = connect(null, mapActionToProps)(ItemView);

export default ItemViewComponent;
