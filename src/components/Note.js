import React from 'react'
import store from 'store'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class Note extends React.Component {
        // constructor(props) {
        // super(props)
    
        // }



    render() {
        console.log(this.props)
        return <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-block">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
export default connect(mapStateToProps)(Note)

