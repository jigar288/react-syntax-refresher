import React, { Component } from 'react'
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default class User extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userStatus: props.userStatus
        }
    }


    render() {
        return (
            <div>
                {/* display the appropriate component based on if user is logged in or not using inline conditional satement */}
                {this.state.userStatus ? <LoggedIn/> : <LoggedOut/>
                }
            </div>
        )
    }
}
