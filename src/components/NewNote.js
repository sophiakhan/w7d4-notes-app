import React from 'react'
import Nav from './Nav'
import store from 'store'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class NewNote extends React.Component {
    constructor(props) {
        super(props)
        this.addNote = this.addNote.bind(this)

        this.state = {
            title: null,
            body: null,
            link: null,
            tags: null
        }
    }

    componentWillMount() {
        if (this.props.params.index >= 0) {
            let note = this.props.redux.notes[this.props.params.index]
            this.setState(note)
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
                            <input type="title" className="form-control" id="title" placeholder="Title" onChange={(e) => this.setState({title: e.target.value})} />
                        </div>
                </div>

                <div className="form-group">
                        <label for="body" className="control-label">Note</label>
                        <div>
                            <textarea className="form-control" rows="10" placeholder="Compose note here..." onChange={(e) => this.setState({body: e.target.value})}></textarea>
                        </div>
                </div>

                <div className="form-group">
                        <label for="link" className="control-label">Link</label>
                        <div>
                            <input type="link" className="form-control" id="link" placeholder="Image URL" onChange={(e) => this.setState({link: e.target.value})} />
                        </div>
                </div>

                <div className="form-group">
                        <label for="tags" className="control-label">Tags (Seperate by comma)</label>
                        <div>
                            <input type="tags" className="form-control" id="tags" placeholder="Tags" onChange={(e) => this.setState({tags: e.target.value})}/>
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

// Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        redux: redux.state
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(NewNote)
