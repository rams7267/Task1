import React, { Component } from 'react'
import Main1 from './Main1'
import SubNav from './SubNav'

export class RightComponent extends Component {
    render() {
        return (
            <div className = "right">
                <SubNav />
                <Main1 />
            </div>
        )
    }
}

export default RightComponent
