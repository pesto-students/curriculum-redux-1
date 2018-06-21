import { connect } from 'react-redux';

import Screen1 from './Screen1';
import { addItem, clearCart, purchaseItem, deleteItem, editItem } from '../../redux/actions';

const mapStateToProps = state => ({
  groceries: state,
});

const mapDispatchToProps = () => ({
  addItem,
  clearCart,
  purchaseItem,
  deleteItem,
  editItem,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen1);
