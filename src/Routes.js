// Load React
import React from 'react'
//import Notes from './Notes'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
import Notes from './components/Notes'


// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}> 
                <Router history={history}>
                <Route path="/" component={Notes} />
            </Router>
        </Provider>
    }
}

export default Routes