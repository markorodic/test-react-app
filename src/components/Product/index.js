import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import CommentSection from '../Comments/CommentSection'
import base from '../../base'

class Product extends Component {
  state = {
    currentProductFromLocalStorage: null
  }

  navigateToNextProduct() {
    this.props.incrementProductIndex();
    if (this.props.state.products.currentProductIndex === 5) {
      this.props.history.push('/account')
      this.props.resetProductIndex();
    } else {
      this.props.goToNextProduct('product2');
      console.log(this.props.state.products.currentProductIndex + 1)
      const currentProductIndex = this.props.state.products.currentProductIndex + 1;
      this.props.history.push(`/products/${currentProductIndex}`);
    }
  }

  componentWillMount() {
    const { products } = this.props.state
    const localStorageRef = parseInt(localStorage.getItem('currentProduct'))
    if (localStorageRef) {
      this.setState({
        currentProductFromLocalStorage: localStorageRef
      })
      console.log(localStorageRef)
    }
  }

  componentDidUpdate() {
    const { products } = this.props.state
    localStorage.setItem(
      'currentProduct',
      products.currentProductIndex
    );
  }

  componentDidMount() {
    // this.ref = base.syncState();
    const { products } = this.props.state
    localStorage.setItem(
      'currentProduct',
      products.currentProductIndex
    );
  }

  render() {
    const { products : { byId }, questions, comments, replies } = this.props.state;
    const productIndex = this.props.state.products.currentProductIndex ? this.props.state.products.currentProductIndex : this.state.currentProductFromLocalStorage
    const currentProduct = byId[productIndex]
    const productHeading = byId[productIndex].company
    return (
      <div>
        <h1>{productHeading}</h1>
        <CommentSection
          productQuestions={currentProduct.questions}
          questionsState={questions}
          commentsState={comments}
          repliesState={replies}
        />
        <button onClick={this.navigateToNextProduct.bind(this)}>Next</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);

