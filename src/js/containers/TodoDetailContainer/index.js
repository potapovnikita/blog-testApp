import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import * as databaseActions from '../../store/actionsCreators/database'


@connect(
    ({ todoList }) => ({ todoList }),
    (dispatch) => bindActionCreators(databaseActions, dispatch)
)

export default class extends Component {
    constructor(props) {
        super(props)
    }

    getTodoInfo() {
        const { todoList } = this.props
        const todoId = window.location.href.split('/')[4]
        const currentTodo = todoList.filter(item => item.id === todoId)[0]

        return currentTodo
            ? <div>
                <div>Название: {currentTodo.title}</div>
                <div>Статус: {currentTodo.done ? 'выполнено' : 'не выполнено' }</div>
                <Link to='/'>Вернуться на главную</Link>
            </div>
            : <div>
                <p>Дело не найдено</p>
                <Link to='/'>Вернуться на главную</Link>
            </div>
    }

    render() {
        return (
            <div>
                { this.getTodoInfo() }
            </div>
        )
    }
}