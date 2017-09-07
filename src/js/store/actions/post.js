import * as actions from '../constants'

export function addPost(post) {
    return {
        type: actions.addPost,
        payload: post
    }
}

export function removePost(id) {
    return {
        type: actions.removePost,
        payload: id
    }
}
