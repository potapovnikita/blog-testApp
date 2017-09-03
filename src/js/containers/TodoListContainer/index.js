import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



import * as databaseActions from '../../store/actionsCreators/database'

import TodoList from '../../components/todoList'
import AddTodo from '../../components/addTodo'

@connect(
    ({ todoList }) => ({ todoList }),
    (dispatch) => bindActionCreators(databaseActions, dispatch)
)

export default class extends Component {

    render() {
        const { todoList, addTodo, removeTodo , updateTodo } = this.props

        return (
            <div>
                <AddTodo addTodo={addTodo}/>
                <TodoList todoList={todoList}
                          editItem={updateTodo}
                          removeItem={removeTodo}
                />
            </div>
        )
    }
}