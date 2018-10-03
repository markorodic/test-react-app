import React, { Component } from 'react';

class InternalInput extends Component {
  state = {
    inputValue: ''
  }

  onInputChange(input) {
    this.setState({
      inputValue: input.target.value
    })
  }

  submitForm(e) {
    const { postComment } = this.props;
    e.preventDefault();
    postComment(this.state.inputValue)
  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <input placeholder="Ask a question" onChange={this.onInputChange.bind(this)}></input>
        <button>Go</button>
      </form>
    )
  }
}


export default InternalInput;

