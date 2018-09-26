import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddItem, UpdateItem } from '../redux/actions';

class FormItem extends Component {
   state = {
     isEditForm: Boolean(this.props.item),
     itemValue: this.props.item ? this.props.item.name : '',
   }

   onItemChange = (event) => {
     this.setState({
       itemValue: event.target.value,
     });
   }

   itemAdd = (event) => {
     event.preventDefault();
     this.props.AddItem(this.state.itemValue);
     this.setState({
       itemValue: '',
     });
   }

   itemUpdate = (event) => {
     event.preventDefault();
     this.props.UpdateItem(this.props.item.id, this.state.itemValue);
     this.props.onFinish();
   }

   render() {
     return (
       <form onSubmit={this.state.isEditForm ? this.itemUpdate : this.itemAdd}>
         <input type="text" name="item" onChange={this.onItemChange} value={this.state.itemValue} autoComplete="off" />
         {this.state.isEditForm ? <input type="submit" value="Save" /> : <input type="submit" value="Add" />}
       </form>
     );
   }
}

// const mapStateToProps = state => ({
// });

const mapActionToProps = {
  AddItem,
  UpdateItem,
};

const FormConnectedApp = connect(null, mapActionToProps)(FormItem);

export default FormConnectedApp;
