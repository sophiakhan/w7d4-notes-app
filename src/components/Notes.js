import React from 'react';
import Nav from './Nav'

class Notes extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <Nav />
            <div id="notesBox">
            
            </div>
        </div>
    }
}

export default Notes