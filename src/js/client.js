import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'

require('./../styles/main.scss')

const app = document.getElementById('app')

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>,
    app
)
