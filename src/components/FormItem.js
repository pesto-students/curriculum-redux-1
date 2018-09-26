import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddItem } from '../redux/actions';

class FormItem extends Component {
   state = {
     itemValue: '',
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

   render() {
     return (
       <form onSubmit={this.itemAdd}>
         <input type="text" name="item" onChange={this.onItemChange} value={this.state.itemValue} />
         <input type="submit" value="Add" />
       </form>
     );
   }
}

// const mapStateToProps = state => ({
// });

const mapActionToProps = {
  AddItem,
};

const FormConnectedApp = connect(null, mapActionToProps)(FormItem);

export default FormConnectedApp;

