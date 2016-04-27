import { IndexRoute, Route } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import Relay from 'react-relay'
import { RelayRouter, browserHistory } from 'react-router-relay'
import TodoApp from './components/TodoApp'
import TodoList from './components/TodoList'
import ViewerQueries from './queries/ViewerQueries'

import './style.css'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.graph.cool/relay/v1/UHJvamVjdDpjaW5pbGdxZnAwMDZjMDFta21vYnV5d2xq')
)

ReactDOM.render(
  <RelayRouter history={browserHistory}>
    <Route
      path='/' component={TodoApp}>
      <IndexRoute
        component={TodoList}
        queries={ViewerQueries}
      />
    </Route>
  </RelayRouter>,
  document.getElementById('root')
)
