import React, { Component } from 'react'
import LifecycleBUpdating from './LifecycleBUpdating'

class LifecycleAUpdating extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Aniket'
        }

        console.log('Lifecycle A constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDerivedStatefromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecylce A componentDidMount')
    }

    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                <h1>Lifecycle methods A</h1>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleAUpdating
