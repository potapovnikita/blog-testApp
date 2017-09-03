import * as actions from '../actions/todo'
import Database from '../../libs/database'

const db = new Database()

export function addTodo(payload) {
    return async (dispatch) => {
        const todo = await db.addTodoLS(payload)
        dispatch(actions.addTodo(todo))
    }
}

export function removeTodo(payload) {
    return async (dispatch) => {
        const todo = await db.removeTodoLS(payload)
        dispatch(actions.removeTodo(todo))
    }
}

export function updateTodo(payload) {
    return async (dispatch) => {
        const todo = await db.updateTodoLS(payload)
        dispatch(actions.updateTodo(todo))
    }
}