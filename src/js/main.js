import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import * as Routes from './routes'


export default class extends Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Routes.Main } />
                <Route path="/todos/:id" component={ Routes.TodoDetail } />
                <Redirect from='/*' to='/' />
            </Switch>
        </BrowserRouter>
    }
}