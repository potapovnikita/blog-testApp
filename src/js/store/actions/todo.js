import * as actions from '../constants'

export function addTodo(todo) {
    return {
        type: actions.addTodo,
        payload: todo
    }
}

export function removeTodo(id) {
    return {
        type: actions.removeTodo,
        payload: id
    }
}

export function updateTodo(todo) {
    return {
        type: actions.updateTodo,
        payload: todo
    }
}
