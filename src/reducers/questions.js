import { combineReducers } from 'redux';

function byId(state = {}, action) {
    switch(action.type) {
    case 'POST_QUESTION' :
        return {
            ...state,
                [action.index]: action.comment
        }
    case 'POST_COMMENT' :
        return {
            ...state,
                [action.question]: {
                    ...state[action.question],
                        comments: state[action.question].comments.concat([action.index])
                }
        }
    default :
        return state;
    }
}

function allQuestions(state = {}, action) {
    switch(action.type) {
    case 'POST_QUESTION' :
        return state.concat([action.index])
    default :
        return state;
    }
}

function numberOfQuestions(state = {}, action) {
    switch(action.type) {
    case 'POST_QUESTION' :
        const newState = state + 1;
        return newState
    default :
        return state;
    }
}

export const questions = combineReducers({
    byId,
    allQuestions,
    numberOfQuestions
  });