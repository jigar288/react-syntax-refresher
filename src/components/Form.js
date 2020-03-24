import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {value: ''};

        // the event objects for functions won't work if you don't bind this class
        this.updateValue = this.updateValue.bind(this);
        this.showAlert = this.showAlert.bind(this);
    }

    updateValue(event){
        this.setState({ value : event.target.value})
    }

    showAlert(event){        
        alert("The Value: " + this.state.value);
        event.preventDefault(); //where does event come from?
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.showAlert} >
                    <label>
                        Name: 
                        <input type="text" value={this.state.value} onChange={this.updateValue} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

