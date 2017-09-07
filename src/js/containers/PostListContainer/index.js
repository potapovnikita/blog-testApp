import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



import * as databaseActions from '../../store/actionsCreators/database'

import PostsList from '../../components/PostsList'
import AddPost from '../../components/AddPost'
import Header from '../../components/Header'

@connect(
    ({ postsList }) => ({ postsList }),
    (dispatch) => bindActionCreators(databaseActions, dispatch)
)

export default class extends Component {

    render() {
        const { postsList, addPost, removePost }  = this.props

        return (
            <div>
                <Header />
                <AddPost addPost={addPost}/>
                <PostsList postsList={postsList}
                           removePost={removePost}/>
            </div>
        )
    }
}