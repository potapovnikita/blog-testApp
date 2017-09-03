/**
 * save data to Local Storage
 */

class Database {

    getTodoListFromLS() {
        const todoList = JSON.parse(localStorage.getItem('todoList'))
        if (todoList) {
            return Object.values(todoList)
        }
        return null
    }

    addTodoLS(data) {
        const currentTodoList = JSON.parse(localStorage.getItem('todoList'))

        if (currentTodoList && currentTodoList.length) {
            currentTodoList.push(data)
            localStorage.setItem('todoList', JSON.stringify(currentTodoList))
        } else {
            const newTodoItem = JSON.stringify([data])
            localStorage.setItem('todoList', newTodoItem)
        }

        return data
    }

    async removeTodoLS(id) {
        const currentTodoList = JSON.parse(localStorage.getItem('todoList'))
        const deleteItemIndex = currentTodoList.findIndex((item) => item.id === id)
        currentTodoList.splice(deleteItemIndex, 1)
        localStorage.setItem('todoList', JSON.stringify(currentTodoList))

        return id
    }

    async updateTodoLS(todo) {
        const currentTodoList = JSON.parse(localStorage.getItem('todoList'))
        const updateItemIndex = currentTodoList.findIndex((item) => item.id === todo.id)
        currentTodoList[updateItemIndex] = { ...currentTodoList[updateItemIndex], ...todo }

        localStorage.setItem('todoList', JSON.stringify(currentTodoList))

        return todo
    }
}

export default Database