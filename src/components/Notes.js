import React from 'react';
import store from 'store'; 
import Nav from './Nav';
import NewNote from './NewNote';
import Note from './Note';
import { connect } from 'react-redux'

class Notes extends React.Component {
    constructor(props) {
        super(props)
        this.getNote = this.getNote.bind(this)

        this.state = {
            notes: []
        }
    }

    getNote() {
        store.each(function(value, notes) {
	    console.log(notes, '==', value)
        } )

    }

    componentDidMount() {
        this.getNote()
    }

    render() {  
        let notes = this.props.redux.notes
         .map((note, key) => <Note key={key} index={key} {...note} />)
        return <div>
            <Nav />
            <div className="container" id="notesBox">
                    <h1 className="text-center">Welcome to Compose. To get started, click the <span id="addNoteButton">+ Note </span>button in the top right.</h1>
                    {notes}
            </div>
        </div>
    }
}

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        redux: redux.state
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Notes)