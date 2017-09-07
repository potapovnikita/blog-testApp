import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {
    render() {
        return (
            <HeadBlock>
                Blog <Span>React/Redux app</Span>
            </HeadBlock>
        )
    }
}

const HeadBlock = styled.div`
    background-color: #242424;
    color: #fff;
    padding: 15px 50px;
    font-size: 20px;
    text-align: left;
`

const Span = styled.span`
    color: #989898;
`