import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comment: '',
            topic: 'react'
        }
    }

    changeUsernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changeCommentHandler = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    changeTopicHandler = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        alert(`${this.state.username}, ${this.state.comment}, ${this.state.topic}`)
        event.preventDefault()
    }
    

    render() {
        const {username, topic, comment} = this.state
        return (
            <form onSubmit={this.onSubmitHandler}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.changeUsernameHandler}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comment} onChange={this.changeCommentHandler}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.changeTopicHandler}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
