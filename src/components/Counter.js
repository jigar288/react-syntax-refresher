import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }

        //have to bind the function to the state/button for clicking to work 
        this.increment = this.increment.bind(this);
    }

    increment(){

        this.setState(({ count }) => ({
            count: count + 1
        }));
    }
    

    render() {
        return (
            <div>
                <p>
                    Counter: {this.state.count}
                </p>

                <button onClick={this.increment} >Increment</button>

            </div>
        )
    }
}
