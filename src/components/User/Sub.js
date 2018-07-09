import React from 'react'

import { setAge } from '../../actions/userActions'

export const Sub = (props) => {

    const { dispatch } = props

    return (
        <div>
            <h3> Sub </h3>
            <input type="button" value="Set Age" onClick={() => dispatch(setAge('35'))} />
        </div>
    )
}
