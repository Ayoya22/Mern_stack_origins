import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class HelloHospital extends Component {
    render() {
        return(
            <div>
                <h1>CAMEROON Health Center</h1>
            </div>
        )
    }
}

export default hot(module)(HelloHospital)