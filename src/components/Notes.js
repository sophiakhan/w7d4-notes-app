import React from 'react';
import Nav from './Nav';
import NewNote from './NewNote';
import Note from './Note';

class Notes extends React.Component {
    constructor(props) {
        super(props)
        //this.getNote = this.getNote.bind(this)
    }

    render() {  
        return <div>
            <Nav />
            <div className="container" id="notesBox">
                    <h1 className="text-center">Welcome to Compose. To get started, click the <span id="addNoteButton">+ Note </span>button in the top right.</h1>
            </div>
        </div>
    }
}

export default Notes

//if ( ! notes) {}