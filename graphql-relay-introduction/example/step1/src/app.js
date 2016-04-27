import { IndexRoute, Route } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { RelayRouter, browserHistory } from 'react-router-relay'
import TodoApp from './components/TodoApp'
import TodoList from './components/TodoList'

import './style.css'

ReactDOM.render(
  <RelayRouter history={browserHistory}>
    <Route
      path='/' component={TodoApp}>
      <IndexRoute
        component={TodoList}
      />
    </Route>
  </RelayRouter>,
  document.getElementById('root')
)
