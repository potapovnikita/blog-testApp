import React, { Component } from 'react'
import PostDetailContainer from '../../containers/PostDetailContainer'


export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <PostDetailContainer />
        </div>
    }
}