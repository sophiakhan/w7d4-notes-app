import React from 'react'
import Nav from './Nav'
import store from 'store'
import { browserHistory } from 'react-router'

class NewNote extends React.Component {
    constructor(props) {
        super(props)
        this.addNote = this.addNote.bind(this)

        this.state = {

        }
    }

    addNote() {
        // Get notes from localStorage via store.js library
        let notes = store.get('notes')

        // If there were no notes yet
        if ( ! notes) {
            notes = []
        }

        // Push our state object onto the notes array
        notes.push(this.state)

        // Persist the notes array into the notes key in localStorage
        store.set('notes', notes)

        // Redirect back to the home page
        browserHistory.push('/')
    }

    render() {
        return <div>
        <Nav />
        <div className="well well-sm text-center" id="note-area">
                <h1>Compose a note:</h1>
                <div className="form-group">
                        <label for="title" className="control-label">Title</label>
                        <div>
                            <input type="title" className="form-control" id="title" placeholder="Title" />
                        </div>
                </div>

                <div className="form-group">
                        <label for="body" className="control-label">Note</label>
                        <div>
                            <textarea className="form-control" rows="10" placeholder="Compose note here..."></textarea>
                        </div>
                </div>

                <div className="form-group">
                        <label for="link" className="control-label">Link</label>
                        <div>
                            <input type="link" className="form-control" id="link" placeholder="Image URL" />
                        </div>
                </div>

                <div className="form-group">
                        <label for="tags" className="control-label">Tags (Seperate by comma)</label>
                        <div>
                            <input type="tags" className="form-control" id="tags" placeholder="Tags" />
                        </div>
                </div>
                
                <div className="btn-group">
                    <button className="btn btn-success" type="button" onClick={this.addNote}>Save</button>
                    <button className="btn btn-default" type="button" onClick={() => browserHistory.push('/')}>All Notes</button>
                </div>
        </div>
        </div>
    }
}

export default NewNote