import React, { Component } from 'react';
import WriteComment from '../Comment'
import Question from './Question'

class CommentSection extends Component {
  render() {
    const { productQuestions, questionsState } = this.props;
    let renderQuestions = productQuestions.map(function(question, index) {
      const currentQuestionObject = questionsState.byId[question];
      const currentQuestion = currentQuestionObject.question;
      const currentCommentsObject = currentQuestionObject.comments;
      
      return (
        <Question
          key={index}
          questionIndex={index}
          question={currentQuestion}
          productComments={currentCommentsObject}
        />
      );
    });
    return (
      <div>
        <WriteComment commentType='Question' />
        {renderQuestions}
      </div>
    )
  }
}

export default CommentSection;
