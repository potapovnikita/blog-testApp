import React, { Component } from 'react'
import styled from 'styled-components'
import PostItem from './PostItem'



export default class extends Component {
    constructor(props) {
        super(props)
        this.state= {
            edit: false,
            disabled: false,
            title: this.props.item,
            limit: true,
            defaultLimit: 3,
        }
    }
    showMorePosts() {
        this.setState({ limit: !this.state.limit })
    }
    getItems() {
        const { postsList, removePost } = this.props

        postsList.sort((a, b) => {
            return Number(b.id) - Number(a.id);
        });


        return postsList.length
            ? postsList.map((item, index) => {
                if (this.state.limit) {
                    if (index < this.state.defaultLimit) {
                        return <PostItem
                            key={item.id}
                            item={item}
                            removePost={removePost}/>
                    }
                } else {
                    return <PostItem
                        key={item.id}
                        item={item}
                        removePost={removePost}/>
                }
            })
            : <EmptyList>
                Список пуст. Вы можете добавить пост с помощью формы создания.
            </EmptyList>
    }

    render() {
        const { postsList } = this.props

        return (
            <div>
                <Container>
                    { ::this.getItems() }
                </Container>
                <ShowMoreBtnContainer length={postsList.length}>
                    <ShowMoreBtn onClick={::this.showMorePosts}>{this.state.limit ? 'Показать еще' : 'Скрыть'}</ShowMoreBtn>
                </ShowMoreBtnContainer>
            </div>
        )
    }
}


const Container = styled.ul`
    padding: 0;
    margin: 0;
`

const ShowMoreBtnContainer = styled.div`
    display: ${props => props.length < 4 ? 'none' : 'block'};
    background: #FFF;
    padding: 15px 50px;
`

const ShowMoreBtn = styled.button`
    height: 40px;
    width: 100%;
    background: #e4e4e4;
    color: #000;
    border: none;
    outline: none;
    &:hover {
        cursor: pointer;
        background: #FFF;
        color: #000;
        border: 1px solid #e4e4e4;
    }
`

const EmptyList = styled.div`
    color: red;
    padding: 15px 0;
    text-align: center;
`