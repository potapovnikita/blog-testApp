import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            textarea: '',
            disabled: false,
            errorInput: false,
            errorTextArea: false,
        }
    }

    inputChangeHandler(e) {
        if (e.target.value.length) this.setState({ errorInput: false })
        this.setState({ input: e.target.value })
    }

    textareaChangeHandler(e) {
        if (e.target.value.length) this.setState({ errorTextArea: false })
        this.setState({ textarea: e.target.value })
    }

    inputKeyupHandler(e) {
        if (e.keyCode === 13) this.clickButtonHandler(e)
    }

    async clickButtonHandler(e) {

        let {
            state: { input, textarea, disabled, errorInput, errorTextArea },
            props: { addPost },
        } = this

        /**
         * обработчики ошибок пустых полей
         */
        input = input.trim()
        textarea = textarea.trim()

        if (input === '' || textarea === '') {
            if (input === '') {
                this.setState({ errorInput: true })
            } else this.setState({ errorInput: false })

            if (textarea === '') {
                this.setState({ errorTextArea: true })
            } else this.setState({ errorTextArea: false })
            return
        }

        /**
         * Добавление поста
         */
        try {
            this.setState({ disabled: true })
            await addPost({
                    id: Date.now().toString(),
                    title: input,
                    description: textarea,
            })
            this.setState({ disabled: false, input: '', textarea: '' })
        }
        catch (e) {
            console.error(e)
            this.setState({ disabled: false })
        }
    }

    render() {
        const { disabled, input, textarea, errorInput, errorTextArea } = this.state
        return (
            <AddPost>
                <AddPostHead>Форма создания поста</AddPostHead>
                <PostInput errorInput={errorInput} type="text"
                       name="input"
                       maxLength="90"
                       value={input}
                       onChange={::this.inputChangeHandler}
                       onKeyUp={::this.inputKeyupHandler}
                       placeholder="Название поста"
                       disabled={disabled} />
                <DescPostTextarea errorTextArea={errorTextArea}
                                  placeholder="Содержание поста"
                                  onChange={::this.textareaChangeHandler}
                                  onKeyUp={::this.inputKeyupHandler}
                                  value={textarea}
                />
                <AddPostBtnContainer>
                    <AddPostBtn onClick={::this.clickButtonHandler}> Создать пост </AddPostBtn>
                    { errorInput || errorTextArea ? <ErrorText>Заполните обязательные поля</ErrorText> : null }
                    </AddPostBtnContainer>
            </AddPost>
        )
    }
}

const AddPost = styled.div`
    display: block;
    padding: 30px 50px;
    position: relative;
`

const AddPostHead = styled.div`
    font-size: 20px;
    text-align: left;
    margin-bottom: 15px;
`

const PostInput = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid;
    margin-bottom: 15px;
    padding-left: 20px;
    box-sizing: border-box;
    border-color: ${props => props.errorInput ? 'red' : 'lightgray'};
    outline: none;
    &:focus {
        border: 1px solid #749ae3;
    }
`

const DescPostTextarea = styled.textarea`
    height: 160px;
    width: 100%;
    border-color: ${props => props.errorTextArea ? 'red' : 'lightgray'};    
    margin-bottom: 20px;
    padding: 13px 20px;
    box-sizing: border-box;
    resize: none;
    overflow: auto;
    outline: none;
    &:focus {
        border: 1px solid #749ae3;
    }
`

const AddPostBtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
`

const AddPostBtn = styled.button`
    width: 263px;
    height: 40px;
    background: #000;
    color: #FFF;
    border: none;
    outline: none;
    &:hover {
        border: 1px solid #e4e4e4;
        cursor: pointer;
        background: #FFF;
        color: #000;
    }
`

const ErrorText = styled.div`
    color: red;
    position: absolute;
    bottom: 10px;
    right: 80px;
`