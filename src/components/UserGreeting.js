import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Aniket</div> // APPROACH-4 Short-Circuit operator

        // return this.state.isLoggedIn ?
        //     <div>Welcome Aniket</div> :     // APPROACH-3 ternary-condition operator
        //     <div>Welcome Guest</div>
        
        // let message
        // if (this.state.isLoggedIn) {
        //     message= <div>Welcome Aniket</div>
        // } else {
        //     message= <div>Welcome Guest</div>     // APPROACH-2 element-variable method
        // }

        // return (
        //     message
        // )

        // if (this.state.isLoggedIn) {
        //     return (
        //     <div>
        //         Welcome Aniket
        //     </div>
        // )                            // APPROACH-1 if/else method
        // } else {
        //     return (
        //     <div>
        //         Welcome Guest
        //         </div>
        //     )
        // }
    }
}

export default UserGreeting
