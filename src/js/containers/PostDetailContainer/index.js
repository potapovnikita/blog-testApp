import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import * as databaseActions from '../../store/actionsCreators/database'
import history from '../../libs/history'
import Header from '../../components/Header'



@connect(
    ({ postsList }) => ({ postsList }),
    (dispatch) => bindActionCreators(databaseActions, dispatch)
)

export default class extends Component {
    constructor(props) {
        super(props)
    }

    getPostInfo() {
        const { postsList } = this.props
        const postId = window.location.href.split('/')[4]
        const currentPost = postsList.filter(item => item.id === postId)[0]

        return currentPost
            ? <PostDetail>
                <BackBtn onClick={::this.returnBack}>
                    <ArrowBack className="fa fa-angle-left fa-2x" aria-hidden="true"></ArrowBack>
                    Назад
                </BackBtn>
                <PostDetailTitle>{currentPost.title}</PostDetailTitle>
                <PostDetailText>{currentPost.description}</PostDetailText>
                <Hr></Hr>
            </PostDetail>
            : <PostDetail>
                <BackBtn onClick={::this.returnBack}>Назад</BackBtn>
                <p>Пост не найден</p>
                <Hr></Hr>
            </PostDetail>
    }

    returnBack(){
        history.push('/');
    }
    render() {
        return (
            <div>
                <Header></Header>
                { this.getPostInfo() }
            </div>
        )
    }
}

const PostDetail = styled.div`
    padding: 40px 80px 15px;
    background: #FFF;
    text-align: left:
    
`

const PostDetailTitle = styled.div`
    margin-bottom: 30px;
    font-size: 34px;
`

const PostDetailText = styled.div`
    margin-bottom: 50px;
    line-height: 1.5;
`

const Hr = styled.hr`
    color: #e4e4e4;
    margin-bottom: 80px;
`
const BackBtn = styled.div`
    position: relative;
    width: 150px;
    margin-bottom: 30px;
    background: #e4e4e4;
    text-align: center;
    padding: 15px 0;
    cursor: pointer;
    &:hover {
        color: #FFF;
        background: #000;   
    }
`

const ArrowBack = styled.span`
    position: absolute;
    left: 15px;
    top: 8px;
`