import React, { Component } from 'react'
import IsBoiling from "./IsBoiling"

//don't forget the overall goal of lifting up the state so that other parts of the code can use it
//in a way state is kinda synced

const TempTypeMap = {
    'f':'Fahrenheit',
    'c': 'Celsius'
}

export default class Calculator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             temp: ''
        }

        this.handleCelsius = this.handleCelsius.bind(this);
        
    }

    //make an event handler than bind it with the class
    //then tie that event handler to the input
    handleCelsius(event){
        this.setState({temp: event.target.value });
    }

    render() {
        //let lift up the state so its the syntax is cleaner in the code 
        //data should be sent down the component the hiearchy as one-way flow
        //if two componets use the same data then it should be lifted up to the parent component
        //then it should be passed in passed in a props
        
        /// [[[ Inverse data flow from children to parent components by using props & event handlers ]]]

        //props are read-only elements of componets --> however they can trigger event handlers 
        //that send back info the parent so that the other componets can be synced 
        //ex: temp conversion calculator 
        //read more in docs at --> https://reactjs.org/docs/lifting-state-up.html
        
        const temp = this.state.temp
        const tempType = this.props.tempType;

        return (
            <div>
                <br/>
                <legend>Enter Celsius:</legend>
                <br/>
                <input value={temp} onChange={this.handleCelsius} />
                <br/> <br/>
                You entered: {this.state.temp}    
                <br/> <br/>
                <IsBoiling celsius={ parseFloat(temp) } />
                <br/> <br/>
                The prop is { TempTypeMap[tempType] }
                    
            </div>
        )
    }
}
