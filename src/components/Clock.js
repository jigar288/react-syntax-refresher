import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             date: new Date(),
             day: new Date()
        };
    }

    updateTime() {

        this.setState( (state) => {
            return {
                date: new Date()
            }
        });
        
    }


    componentDidMount(){

        this.timerID = setInterval( () => this.updateTime(), 1000); 

    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    //how do I run a method every sec to update the time? call it from the front end?


    

    render() {
        return (
            <div>
                
                <h1>
                    The time is { this.state.date.toLocaleTimeString() }
                </h1>
            
            </div>
        )
    }
}
