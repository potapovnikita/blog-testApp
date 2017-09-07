/**
 * save data to Local Storage(LS)
 */

class Database {

    getPostsListFromLS() {
        const postsList = JSON.parse(localStorage.getItem('postsList'))
        if (postsList) {
            return Object.values(postsList)
        }
        return null
    }

    addPostLS(data) {
        const currentPostsList = JSON.parse(localStorage.getItem('postsList'))

        if (currentPostsList && currentPostsList.length) {
            currentPostsList.push(data)
            localStorage.setItem('postsList', JSON.stringify(currentPostsList))
        } else {
            const newPostItem = JSON.stringify([data])
            localStorage.setItem('postsList', newPostItem)
        }

        return data
    }

    async removePostLS(id) {
        const currentPostsList = JSON.parse(localStorage.getItem('postsList'))
        const deleteItemIndex = currentPostsList.findIndex((item) => item.id === id)
        currentPostsList.splice(deleteItemIndex, 1)
        localStorage.setItem('postsList', JSON.stringify(currentPostsList))

        return id
    }
}

export default Database