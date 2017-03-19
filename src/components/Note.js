import React from 'react'
import store from 'store'
import { browserHistory } from 'react-router'

class Note extends React.Component {
        constructor(props) {
        super(props)
        
    }

    render() {
        return <div className="col-sm-4  col-md-3">
            <div id="card">
            <img src=""/>
            <h4 id="cardTitle">...</h4>
            <h5>TEXT PREVIEW</h5>
            </div>
        </div>
    }
}

export default Note