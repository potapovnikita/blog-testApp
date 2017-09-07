import * as actions from '../actions/post'
import Database from '../../libs/database'

const db = new Database()

export function addPost(payload) {
    return async (dispatch) => {
        const post = await db.addPostLS(payload)
        dispatch(actions.addPost(post))
    }
}

export function removePost(payload) {
    return async (dispatch) => {
        const post = await db.removePostLS(payload)
        dispatch(actions.removePost(post))
    }
}