import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Screen1 extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    groceries: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }

  state = {
    input: '',
  }

  onChangeHandler = (e) => {
    this.setState({ input: e.target.value });
  }
  render() {
    return (
      <div>
        {
          this.props.groceries.map(item => <p data-id={item.id}>{ item.name }</p>)
        }
        <input type="text" value={this.state.input} onChange={this.onChangeHandler} />
        <input type="button" value="Add" onClick={() => this.props.addItem(this.state.input)} />
        <input type="button" value="Clear" onClick={() => this.props.clearCart()} />
      </div>
    );
  }
}
export default Screen1;
