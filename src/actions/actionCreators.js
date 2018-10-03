export function goToNextProduct(index) {
    return {
        type: 'NEXT_PRODUCT',
        index
    }
}

export function resetProduct(index) {
    return {
        type: 'RESET_PRODUCT',
        index
    }
}

export function incrementProductIndex(index) {
    return {
        type: 'INCREMENT_PRODUCT_INDEX',
        index
    }
}

export function resetProductIndex() {
    return {
        type: 'RESET_PRODUCT_INDEX',
    }
}

export function postQuestion(comment, index,) {
    return {
        type: 'POST_QUESTION',
        comment,
        index
    }
}

export function postComment(comment, index, question) {
    return {
        type: 'POST_COMMENT',
        comment,
        index,
        question
    }
}

export function postReply(comment, index, commentIndex) {
    return {
        type: 'POST_REPLY',
        comment,
        index,
        commentIndex
    }
}