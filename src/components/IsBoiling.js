import React, { Component } from 'react'

function IsBoiling(props) {
    if(props.celsius >= 100){
        return <h1>Your water is crossing boiling point since its more than 100 C</h1>
    } else if( isNaN(props.celsius) ){
        return <h1> Is not a number of you haven't entered anything </h1>
    }
    else{
        return <h1> Your water is less than boiling point since its less than 100 C</h1>
    }
}

export default IsBoiling;