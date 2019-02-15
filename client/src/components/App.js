import React from 'react'
import {BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () => {
  return (
    <Link to="pagetwo"> Navigate to page two </Link>
  )
}

const PageTwo = () => {
   return (
     <div>
       <button>click me</button>
       <Link to='/'> navigate to home</Link>
     </div>
   )
}


const App = () => {
  return (
  <div>
    <BrowserRouter>
      <div>
      <Route path="/" exact component={PageOne}/>
      <Route path="/pagetwo"  component={PageTwo}/>
      </div>
    </BrowserRouter>
  </div>
  )
}


export default App;