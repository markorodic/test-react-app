import { combineReducers } from 'redux';

function byId(state = {}, action) {
    switch(action.type) {
    case 'POST_COMMENT' :
        return {
            ...state,
                [action.index]: action.comment
        }
    case 'POST_REPLY' :
        return {
            ...state,
                [action.commentIndex]: {
                    ...state[action.commentIndex],
                        replies: state[action.commentIndex].replies.concat([action.index])
                }
        }
    default :
        return state;
    }
}

function allComments(state = {}, action) {
    switch(action.type) {
    case 'POST_COMMENT' :
        return state.concat([action.index])
    default :
        return state;
    }
}

function numberOfComments(state = {}, action) {
    switch(action.type) {
    case 'POST_COMMENT' :
        const newState = state + 1;
        return newState
    default :
        return state;
    }
}

export const comments = combineReducers({
    byId,
    allComments,
    numberOfComments
  });