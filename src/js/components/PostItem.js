
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class extends Component {
    constructor(props) {
        super(props)
    }
    async deletePost() {
        const { item, removePost } = this.props
        await removePost(item.id)
    }

    render() {
        const { item, removePost } = this.props

        return <Li key={item.id}>
            <ItemHead>
                <Link className="posts-list__link" to={`/posts/${item.id}`}>
                    <SpanLink>{item.title}</SpanLink>
                </Link>
            </ItemHead>

            <ItemDescription>{item.description}</ItemDescription>
            <ItemDelete className="fa fa-trash fa-lg" onClick={::this.deletePost} />
        </Li>
    }

}

const ItemHead = styled.div`
    margin-bottom: 25px;
`

const ItemDescription = styled.div`
    max-height: 100px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`

const ItemDelete = styled.span`
    display: none;
    position: absolute;
    top: 30px;
    right: 50px;
    cursor: pointer;
`

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: left;
    position: relative;
    padding: 30px 50px;
    list-style-type: none;

    &:nth-child(odd) {
        background: white;
    }
    
    &:hover ${ItemDelete} {
        display: block;
    }
`

const SpanLink = styled.span`
    font-size: 25px;
    &:hover {
        text-decoration: underline;
    }
`

