export function products(state = {}, action) {
    switch(action.type) {
        case 'POST_QUESTION' :
            return {
                ...state,
                    byId: {
                        ...state.byId,
                        1: {
                            ...state.byId[1],
                            questions: state.byId[1].questions.concat([action.comment.id])
                        }
                    }
            }
        case 'INCREMENT_PRODUCT_INDEX' :
            return {
                ...state,
                    currentProductIndex: state.currentProductIndex + 1
            }
        case 'RESET_PRODUCT_INDEX' :
            return {
                ...state,
                    currentProductIndex: 0
            }
        default :
            return state;
    }
}