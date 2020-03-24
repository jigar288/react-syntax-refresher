import React, { Component } from 'react'

export default class UserNames extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             names: ["Jigar", "Bharat", "Clark", "Arshad", "Alex"]
        }
    }

    renderData(){

        const mappedItems = this.state.names.map( (element, index) => 
            <li key={index}>
                 {index} + {element}
            </li>
        );

        return(
            <div>{mappedItems}</div>
        );
    }
    
    render() {
        return (
            <div>

                {/* trying to render the list of elements won't work here its better to make a function call 
                & have it render the stuff */}
                
                {this.renderData()}

            </div>
        )
    }
}
