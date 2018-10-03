import { combineReducers } from 'redux';

function byId(state = {}, action) {
    switch(action.type) {
        case 'POST_REPLY' :
            return {
                ...state,
                    [action.index]: action.comment
            }
        default :
            return state;
        }
}

function allReplies(state = {}, action) {
    switch(action.type) {
        case 'POST_REPLY' :
            return state.concat([action.index])
        default :
            return state;
        }
}

function numberOfReplies(state = {}, action) {
    switch(action.type) {
        case 'POST_REPLY' :
            const newState = state + 1;
            return newState
        default :
            return state;
        }
}

export const replies = combineReducers({
    byId,
    allReplies,
    numberOfReplies
  });