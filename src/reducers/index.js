import { products } from './product.js'
import { questions } from './questions.js'
import { comments } from './comments.js'
import { replies } from './replies.js'

const rootReducer = (state = {}, action) => {
    return {
        products: products(state.products, action),
        questions: questions(state.questions, action),
        comments: comments(state.comments, action),
        replies: replies(state.replies, action),
    };
  };

export default rootReducer;