import React, { Component } from 'react'

export class EvenBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this) APPROACH 3 (binding inside constructor)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'GoodBye'
    //     })
    // }

    clickHandler= () => {
        this.setState({
            message: 'GoodBye'
        })           
    }

    // APPROACH 4 (binding inside constructor)
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  APPROACH 1 (Binding in the render method)*/}
                {/* <button onClick={() => this.clickHandler()}>Click</button>     APPROACH 2 (arrow functions in Event Handlers)*/}
                <button onClick={this.clickHandler}>Click</button>
                {/* APPROACH 3 (binding inside constructor) */}
            </div>
        )
    }
}

export default EvenBind
