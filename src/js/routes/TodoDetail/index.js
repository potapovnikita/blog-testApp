import React, { Component } from 'react'
import TodoDetailContainer from '../../containers/TodoDetailContainer'


export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <TodoDetailContainer />
        </div>
    }
}