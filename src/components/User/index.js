import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setName, setAge } from '../../actions/userActions'

import { Sub } from './Sub'

class User extends Component {

    render() {

        const { dispatch } = this.props

        return (
            <div>
                <Sub {...this.props} />
                <h1>User</h1>
                <h3>Name: {this.props.user.name}</h3>
                <h3>Age: {this.props.user.age}</h3>

                <input type="button" value="Submit" onClick={() => dispatch(setName('Md. Shams Sadek'))} />

                <ul>
                    { this.props.user.list.map( (item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.userReducer,
})


export default connect(mapStateToProps)(User)