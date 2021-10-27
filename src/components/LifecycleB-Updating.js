//child of Lifecycle A updating
import React, {Component} from "react"
class LifecycleBUpdating extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Aniket'
        }

        console.log('Lifecycle B constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle B getDerivedStatefromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecylce B componentDidMount')
    }

    render() {
        console.log('Lifecycle B render')
        return (
            <div>
                <h1>Lifecycle methods B</h1>
            </div>
        )
    }
}

export default LifecycleBUpdating