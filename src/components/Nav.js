import React from 'react'


class Nav extends React.Component {
     static propTypes = {
        addNote: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
        this.state = {
            // add stuff
        }
    }

    onClick(addNote) {
        addNote() // < add stuff in parens

        this.setState({
            //add stuff
        })
    }

    render() {
        return <div className="container" id="headerCol">
            <div className="row" >
            <div className="col-sm-6">
                <ul className="list-inline">
                    <li> <img src="/img/compose.png" alt="Compose Logo" /> </li>
                    <li><strong>COMPOSE</strong></li>
                </ul>
            </div>     
            <div className="col-sm-6">
                <ul className="list-inline pull-right">
                    <li> 
                        <button type="button" className="btn btn-success" id="addButton" onClick={()=> this.onClick(this.props.addNote)}> + Note </button>
                    </li>
                </ul>
        </div>
        <div className="row">
                <div className="navbar-form text-center" role="search">
                    <div className="form-group center-block">
                        <input type="text" className="form-control" placeholder="Search Notes" />
                    </div>
                    <button type="submit" className="btn btn-default">Search</button>
                </div>
            </div>
        </div>  
        </div>
    }
}

export default Nav