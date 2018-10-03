import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import WriteComment from '../Comment'

class Question extends Component {
    render() {
        const { question, productComments, state : { comments , replies } } = this.props;
        let renderComments = productComments.map(function(comment, index) {
            const currentComment = comments.byId[comment].comment;
            const currentRepliesObject = comments.byId[comment].replies;
            return (
                <Comment
                key={index}
                commentIndex={comment}
                comment={currentComment}
                replies={currentRepliesObject}
                repliesState={replies}
                />
            );
        });
        return (
        <div>
            <li>{question}</li>
            <ul className="discussion">
            {renderComments}
            </ul>
            <WriteComment commentType='Comment' parentIndex={this.props.questionIndex} />
        </div>
        );
    }
}

class Comment extends Component {
    render() {
      const { comment, replies, repliesState } = this.props;
      
  
      const renderReplies = replies.map(function(reply, index) {    
        const currentRepliesObject = repliesState.byId[reply];
        const currentReply = currentRepliesObject.reply;
  
        return (
          <li className="subComment" key={index}>{currentReply}</li>
        );
      });
  
      return (
        <div>
          <li className="comment">{comment}</li>
          <ul>
              {renderReplies}
          </ul>
          <WriteComment commentType='Reply' parentIndex={this.props.commentIndex}/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Question);