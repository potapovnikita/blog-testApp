
export default function postsList(state = [], action) {
    switch (action.type) {
        case 'ADD_POST':
            return [ ...state, action.payload ]
        case 'GET_POSTS_LIST':
            return action.payload
        case 'REMOVE_POST':
            return state.filter(item => item.id !== action.payload)
        default: return state
    }
}