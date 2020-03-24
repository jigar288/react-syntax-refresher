import React from 'react';
import Welcome from './components/Welcome'
import Clock from './components/Clock'
import Counter from './components/Counter'
import User from "./components/User"
import UserNames from "./components/UserNames"
import Form from "./components/Form"
import Calculator from "./components/Calculator" 
import './App.css';

function App() {
  return (
    <div className="App">

        {/* <p> Reacttt </p>
        <Welcome name="Jigar Patel" />
        <Clock/>
        <Counter/>                                    
        <UserNames/> */}

        {/* make an api call to actually figure out if user is logged in or not */}

        {/* <User userStatus={true}/> */}

        {/* <Form/> */}
        
        {/* You can pass code as props like this to other components */}
        {/* <DataProvider render={data => ( <h1>Hello {data.target}</h1> )}/> */}

        <Calculator tempType='f' />
        
    </div>
  );
}

export default App;
