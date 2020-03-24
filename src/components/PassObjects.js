import React, { Component } from 'react'
import Form from "./Form"

//you can pass objects as props using spread operator ...

function PassObjects(props) {
    const propObjet = { firstName: 'Jigar', lastName: 'Patel' }
    return <Form {...propObjet} />
}

export default PassObjects;