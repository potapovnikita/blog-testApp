
export default function todoList(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [ ...state, action.payload ]
        case 'GET_TODO_LIST':
            return action.payload
        case 'REMOVE_TODO':
            return state.filter(item => item.id !== action.payload)
        case 'UPDATE_TODO':
            if (!state || !action.payload) return []
            let index = state.findIndex(item => item.id === action.payload.id)
            state[index] = { ...state[index], ...action.payload }
            return [...state]
        default: return state
    }
}