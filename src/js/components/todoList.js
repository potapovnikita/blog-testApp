import React, { Component } from 'react'
import styled from 'styled-components'
import TodoItem from './todoItem'



export default class extends Component {
    constructor(props) {
        super(props)
        this.state= {
            edit: false,
            disabled: false,
            title: this.props.item
        }
    }

    getItems() {
        const { todoList, removeItem, editItem } = this.props
        return todoList.length
            ? todoList.map(item => {
                return <TodoItem
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    editItem={editItem} />
            })
            : <div>
                Список пуст
            </div>
    }

    render() {
        return (
            <div>
                <h3 className="fa fa-list">&nbsp;Your todo's list</h3>
                <Container>
                    { ::this.getItems() }
                </Container>
            </div>
        )
    }
}


const Container = styled.ul`
    padding: 0;
`
