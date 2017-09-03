
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    async removeButtonHandler() {
        const { item, removeItem } = this.props
        await removeItem(item.id)
    }

    async changeStatusItemHandler() {
        const { editItem, item } = this.props
        await editItem({
                id: item.id,
                done: !item.done,
        })
    }

    render() {
        const {item, removeItem, editItem} = this.props

        return <Li key={item.id}>
            <Input type="checkbox" defaultChecked={item.done} onClick={::this.changeStatusItemHandler}/>
            <div className="todo-list__item-name">
                <Link className="todo-list__link" to={`/todos/${item.id}`}>
                    <SpanLink done={item.done}>{item.title}</SpanLink>
                </Link>
            </div>
            <BlockDelete className="fa fa-trash-o" onClick={::this.removeButtonHandler}>&nbsp;Delete</BlockDelete>
        </Li>
    }

}

const Li = styled.li`
    position: relative;
    display: flex;
    padding: 10px;
    list-style-type: none;
    
    &:nth-child(odd) {
        background: white;
    }
`

const Input = styled.input`
    &:hover {
        cursor: pointer;
	}
`

const BlockDelete = styled.div`
    position: absolute;
    right: 20px;
    
    &:hover {
        color: red;
        cursor: pointer;
    }
`

const SpanLink = styled.span`
    color: ${props => props.done ? 'green' : 'black'};
    &:hover {
        text-decoration: underline;
    }
`