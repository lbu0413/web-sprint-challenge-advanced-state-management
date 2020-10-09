
import React from 'react'
import "./App.css";
import SmurfForm from './SmurfForm'
import SmurfList from './SmurfList'


const App = () => {
  return(
    <div className="App">
      <SmurfList />
      <SmurfForm />
    </div>
  )
}

export default App;
