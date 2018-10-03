import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import InternalInput from './InternalInput'

class WriteComment extends Component {
  createNewQuestion(id, question) {
    return {
      id,
      name: 'new question',
      question,
      comments: []
    }
  }

  createNewComment(id, comment) {
    return {
      id,
      name: 'new question',
      comment,
      replies: []
    }
  }

  createNewReply(id, reply) {
    return {
      id,
      author : 'alice',
      reply,
      upVotes : 0,
    }
  }

  postQuestion = (input) => {
    const questionId = this.props.state.questions.numberOfQuestions + 1
    const { postQuestion } = this.props;
    const questionEntry = this.createNewQuestion(questionId, input);

    postQuestion(questionEntry, questionId);
  }

  postComment = (input) => {
    const commentId = this.props.state.comments.numberOfComments + 1
    const { postComment } = this.props;
    const commentEntry = this.createNewComment(commentId, input);
    const questionIndex = this.props.parentIndex + 1;

    postComment(commentEntry, commentId, questionIndex);
  }

  postReply = (input) => {
    const replyId = this.props.state.replies.numberOfReplies + 1
    const { postReply } = this.props;
    const replyEntry = this.createNewReply(replyId, input);
    const commentIndex = this.props.parentIndex;

    postReply(replyEntry, replyId, commentIndex);
  }

  onSubmit = (input) => {
    const { commentType } = this.props
    switch (commentType) {
      case 'Question':
        this.postQuestion(input);
        break;

      case 'Comment':
        this.postComment(input);
        break;

      case 'Reply':
        this.postReply(input);
        break;

      default:
        return;
    }
  }

  render() {
    return (
      <InternalInput
        postComment={this.onSubmit}
      />
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(WriteComment);

