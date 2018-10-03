import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';

class Account extends Component {
  navigateToProducts() {
    this.props.history.push(`/products/${1}`);
    this.props.goToNextProduct('product1');
    this.props.incrementProductIndex();
  }
  render() {
    return (
      <div>
        <button onClick={this.navigateToProducts.bind(this)}>Products</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);


