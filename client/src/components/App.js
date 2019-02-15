import React from 'react'
import {BrowerRouter, Route} from 'react-router-dom'

const PageOne = () => {
  return (
    <div>page one</div>
  )
}

const PageTwo = () => {
   return (
     <div>page two</div>
   )
}


const App = () => {
  return (
  <div>
    <BrowerRouter>
      <div>
      <Route path="/" exact component={PageOne}/>
      <Route path="/pagetwp"  component={PageTwo}/>
      </div>
    </BrowerRouter>
  </div>
  )
}


export default App;