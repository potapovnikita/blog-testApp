import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            disabled: false,
            error: false,
            errorMessage: '',
        }
    }

    inputChangeHandler(e) {
        this.setState({ input: e.target.value })
    }

    inputKeyupHandler(e) {
        if (e.keyCode === 13) this.clickButtonHandler(e)
    }

    async clickButtonHandler(e) {

        let {
            state: { input, disabled, errorMessage },
            props: { addTodo },
        } = this

        input = input.trim()

        if (input === '') {
            this.setState({ errorMessage: 'Поле не может быть пустым' })
            return
        }

        try {
            this.setState({ disabled: true, error: false })
            await addTodo({
                    id: Date.now().toString(),
                    title: input,
                    done: false,
            })
            this.setState({ disabled: false, input: '', errorMessage: '' })
        }
        catch (e) {
            console.error(e)
            this.setState({ disabled: false, error: true })
        }
    }

    render() {
        const { disabled, input, errorMessage } = this.state
        return (
            <AddTodo>
                <AddTodoInput type="text"
                       name="input"
                       maxLength="90"
                       value={input}
                       onChange={::this.inputChangeHandler}
                       onKeyUp={::this.inputKeyupHandler}
                       placeholder="Enter todo..."
                       disabled={disabled} />
                <AddTodoError>{errorMessage}</AddTodoError>
                <AddTodoBtn className="add-todo__btn" onClick={::this.clickButtonHandler}> Add Todo </AddTodoBtn>
            </AddTodo>
        )
    }
}

const AddTodo = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AddTodoError = styled.span`
    margin-bottom: 20px;
    color: red;
`

const AddTodoInput = styled.input`
    width: 250px;
    height: 40px;
    padding-left: 10px;
`

const AddTodoBtn = styled.button`
    width: 263px;
    height: 40px;
    background: #FFF;
    color: #000;
    border: none;
    transition: 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        background: #000;
        color: #FFF;
    }
`