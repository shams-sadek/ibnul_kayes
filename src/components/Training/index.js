import React, { Component } from 'react'
import { connect } from 'react-redux'

import { clickMe, changeName } from '../../actions/trainingActions'

class Training extends Component {
    render() {
        return (
            <div>
                <input type="button" value="Click Me" onClick={(e) => this.props.dispatch(clickMe('Farazi'))} />
                <h1>{this.props.training.name}</h1>


                <input type="text" value={this.props.training.name}
                    onChange={(e) => this.props.dispatch(changeName(e.target.value))}
                />

            </div>
        )
    }
}


const mapStateToProps = state => ({
    training: state.trainingReducer
})


export default connect(mapStateToProps)(Training)


